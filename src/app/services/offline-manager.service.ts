import { Injectable } from "@angular/core";
import { Platform } from "@ionic/angular";
import { SQLite, SQLiteObject } from "@ionic-native/sqlite/ngx";
import { UtilService } from "./util.service";
import { StaticDataService } from "./static-data.service";
import { DeviceOfflineDetailViewModels } from "../_models/offline/DeviceOfflineDetailViewModels";
import { DeviceArchivedWorkPermitDetail } from "../_models/offline/DeviceArchivedWorkPermitDetail";
import { DeviceArchivedDocumentDetail } from "../_models/offline/DeviceArchivedDocumentDetail";
import { DeviceCompanyUserDetail } from "../_models/offline/DeviceCompanyUserDetail";
import { DeviceEntityData } from "../_models/offline/DeviceEntityData";
import { DeviceUserDetail } from "../_models/offline/DeviceUserDetail";
import { DeviceUserQualificationDetail } from "../_models/offline/DeviceUserQualificationDetail";
import { DeviceGuestUserDetail } from "../_models/offline/DeviceGuestUserDetail";
import { DeviceAvailableDocumentDetail } from "../_models/offline/DeviceAvailableDocumentDetail";
import { DeviceAvailableFormDetail } from "../_models/offline/DeviceAvailableFormDetail";
import { DeviceArchivedFormDetail } from "../_models/offline/DeviceArchivedFormDetail";
import { DeviceAvailableWorkPermitDetail } from "../_models/offline/DeviceAvailableWorkPermitDetail";
import { DeviceLiveWorkPermitDetail } from "../_models/offline/DeviceLiveWorkPermitDetail";
import { DeviceFormDetail } from "../_models/offline/DeviceFormDetail";
import { DeviceFormAttachmentDetail } from "../_models/offline/DeviceFormAttachmentDetail";
import { DeviceEvacuationDetail } from "../_models/offline/DeviceEvacuationDetail";
import { DeviceUserCheckInQualificationDetail } from "../_models/offline/DeviceUserCheckInQualificationDetail";
import { DeviceLocationDetail } from "../_models/offline/DeviceLocationDetail";
import { DeviceProjectDetail } from "../_models/offline/DeviceProjectDetail";
import { DeviceInventoryItemDetail } from "../_models/offline/DeviceInventoryItemDetail";
import { DeviceUserCheckinDetail } from "../_models/offline/DeviceUserCheckinDetail";
import { DeviceCheckInInductionDetail } from "../_models/offline/DeviceCheckInInductionDetail";
import { DeviceCheckInInductionItemDetail } from "../_models/offline/DeviceCheckInInductionItemDetail";
import { DeviceGuestUserCheckinDetail } from "../_models/offline/DeviceGuestUserCheckinDetail";
import { DeviceCheckInGuestInductionDetail } from "../_models/offline/DeviceCheckInGuestInductionDetail";
import { DeviceCheckInGuestInductionItemDetail } from "../_models/offline/DeviceCheckInGuestInductionItemDetail";
import { DeviceCompanyUserGroupDetail } from "../_models/offline/DeviceCompanyUserGroupDetail";
import { DeviceHAVManufacturerDetail } from "../_models/offline/DeviceHAVManufacturerDetail";
import { DeviceHAVTypeDetail } from "../_models/offline/DeviceHAVTypeDetail";
import { DeviceHAVModelDetail } from "../_models/offline/DeviceHAVModelDetail";
import { DeviceRiskItemDetail } from "../_models/offline/DeviceRiskItemDetail";
import { DeviceHazardItemDetail } from "../_models/offline/DeviceHazardItemDetail";
import { DeviceEntityDetail } from "../_models/deviceEntityDetail";
import { DeviceFormBuilderDetail } from "../_models/offline/DeviceFormBuilderDetail";
import { EntityItem } from "../_models/entityItem";
import { EnumService } from "./enum.service";
import * as moment from "moment";
import { FilehandlerService } from "./filehandler.service";
import { Capacitor } from "@capacitor/core";

declare var window: any;

@Injectable({
  providedIn: "root",
})
export class OfflineManagerService {
  private dbInstance: SQLiteObject;
  readonly db_name: string = "compliancegenie.db";
  readonly db_table: string = "userTable";

  constructor(
    private platform: Platform,
    private sqlite: SQLite,
    private utilService: UtilService,
    private filehandlerService: FilehandlerService
  ) {}

  public dbSetUp() {
    if (UtilService.isLocalHost()) {
      this.dbInstance = window.openDatabase(
        this.db_name,
        "1.0",
        "My WebSQL Database",
        2 * 1024 * 1024
      );
      this.createTables();
    } else {
      this.platform.ready().then(() => {
        this.sqlite
          .create({
            name: this.db_name,
            location: "default",
          })
          .then((sqLite: SQLiteObject) => {
            this.dbInstance = sqLite;
            this.createTables();
          })
          .catch((error) => alert(JSON.stringify(error)));
      });
    }
  }

  dbQuery = (sql: any, values: any = []) => {
    return new Promise((resolve, reject) => {
      if (!UtilService.isLocalHost()) {
        this.dbInstance.executeSql(sql, values).then(
          (response: any) => {
            resolve(response);
          },
          (err) => {
            debugger;
            console.log("QUERY Error ", err);
            reject(err);
          }
        );
      } else {
        this.dbInstance.transaction((tx) => {
          tx.executeSql(
            sql,
            values,
            (tx, results) => {
              resolve(results);
            },
            (tx, err) => {
              debugger;
              console.log("QUERY Error ", err);
              reject(err);
            }
          );
        });
      }
    });
  };

  createTables = () => {
    StaticDataService.offlineTables.map((data) => {
      if (data.table_name) {
        let columnsList = [];
        data.columns.map((item) => {
          columnsList.push(item.name + " " + item.type);
        });

        let query =
          "CREATE TABLE IF NOT EXISTS " +
          data.table_name +
          " (" +
          columnsList.join(", ") +
          ")";

        this.dbQuery(query, []).then(
          (response: any) => {},
          (err) => {
            console.error(data.table_name + " Unable to execute sql: ", err);
          }
        );
      }
    });
  };

  convertObjectToColValPlaceholders = (data) => {
    const dataCols = [];
    const dataVals = [];
    const dataValPlaceHolders = [];

    Object.keys(data).map((colName) => {
      const val = data[colName];

      if (val !== null && val !== "") {
        dataCols.push(colName);
        dataValPlaceHolders.push("?");

        if (UtilService.isArray(val)) {
          dataVals.push(escape(JSON.stringify(val)));
        } else if (UtilService.isObject(val)) {
          dataVals.push(escape(JSON.stringify(val)));
        } else {
          dataVals.push(val);
        }
      }
    });

    return {
      dataCols,
      dataVals,
      dataValPlaceHolders,
    };
  };

  convertObjectToConditionString(obj) {
    let condition = "";
    Object.keys(obj).map((item, key) => {
      if (key > 0) {
        condition = condition + " AND";
      }
      let conditionValue;
      if (typeof obj[item] === "string") {
        conditionValue = '"' + obj[item] + '"';
      } else if (typeof obj[item] === "number") {
        conditionValue = obj[item];
      }
      condition = condition + " " + item + " = " + conditionValue;
    });
    return condition;
  }

  emptyCond(key: string | Array<string>) {
    const createCond = (key) => {
      return " (" + key + " is NULL OR " + key + " = 0 OR " + key + " = '') ";
    };
    if (typeof key === "string") {
      return createCond(key);
    } else if (Array.isArray(key)) {
      const allKeys: Array<string> = [];
      key.forEach((element) => {
        allKeys.push(createCond(element));
      });
      return "(" + allKeys.join("AND") + ")";
    }
    return " ";
  }

  checkPreviousSyncDataProgress = () => {
    const syncState = localStorage.getItem(
      EnumService.LocalStorageKeys.OFFLINEMODE_SYNC_STATE
    );
    if (syncState) {
      switch (syncState) {
        case EnumService.SyncProcessState.OFFLINE_DATA_INSERT_START:
        case EnumService.SyncProcessState.OFFLINE_DATA_DOWNLOAD_START:
          this.emptyAllTables(() => {
            // Remove offline data json/zip files
            const offlineDataFiles = localStorage.getItem(
              EnumService.LocalStorageKeys.OFFLINE_DATA_FILES
            );
            if (offlineDataFiles) {
              try {
                const files = JSON.parse(offlineDataFiles);
                files.forEach((fileUrl) => {
                  this.filehandlerService.removeFile(fileUrl);
                });
                localStorage.removeItem(
                  EnumService.LocalStorageKeys.OFFLINE_DATA_FILES
                );
              } catch (error) {}
            }
          });
          break;

        default:
          break;
      }
    }
  };

  /**
   *
   * @param table DB table name
   * @param data Data objects to be inserted
   * @param condition Insert data if condition not match
   */
  insertData = (table, data = {}, condition = {}) => {
    const { dataCols, dataVals, dataValPlaceHolders } =
      this.convertObjectToColValPlaceholders(data);

    let condCols = [];
    Object.keys(condition).map((colName) => {
      const val = condition[colName];
      if (val != null) {
        let condState = colName + " = ";
        if (typeof val === "string") {
          condState = condState + '"' + val + '"';
        } else {
          condState = condState + "" + val;
        }
        condCols.push(condState);
      }
    });
    let query =
      "INSERT INTO " +
      table +
      " (" +
      dataCols.join(",") +
      ") select " +
      dataValPlaceHolders.join(",") +
      "";
    if (condCols.length > 0) {
      query =
        query +
        " WHERE NOT EXISTS(SELECT 1 FROM " +
        table +
        " WHERE " +
        condCols.join(" AND ") +
        ")";
    }

    return this.dbQuery(query, dataVals);
  };

  emptyTable = (table, condition = "") => {
    let query =
      "DELETE FROM " + table + (condition ? " WHERE " + condition : "");
    return this.dbQuery(query);
  };

  emptyAllTables = async (callBack) => {
    let emptiedCount = 0;
    StaticDataService.offlineTables.map((data) => {
      if (data.table_name) {
        this.emptyTable(data.table_name)
          .then(() => {
            emptiedCount++;
            if (emptiedCount === StaticDataService.offlineTables.length) {
              callBack && callBack();
            }
          })
          .catch(() => {
            emptiedCount++;
            if (emptiedCount === StaticDataService.offlineTables.length) {
              callBack && callBack();
            }
          });
      }
    });
  };

  insertOfflineData = async (
    offlineData: DeviceOfflineDetailViewModels,
    callBack
  ) => {
    debugger;

    // deviceDetailData
    const deviceDetailData = offlineData.deviceDetailData;
    if (deviceDetailData) {
      const condition: any = {
        companyID: deviceDetailData.companyID,
        deviceID: deviceDetailData.deviceID,
      };
      await this.insertData("DeviceDetails", deviceDetailData, condition);

      callBack && callBack();
      console.log("DeviceDetails Inserted");
    }

    // deviceEntityData
    const deviceEntityData = offlineData.deviceEntityData;
    if (deviceEntityData) {
      for (let index = 0; index < deviceEntityData.length; index++) {
        const value: DeviceEntityData = deviceEntityData[index];
        const condition: any = {
          deviceEntityID: value.deviceEntityID,
          deviceID: value.deviceID,
        };
        await this.insertData("DeviceEntities", value, condition);
      }
      callBack && callBack();
      console.log("DeviceEntities Inserted");
    }

    // deviceUserList
    const deviceUserList = offlineData.deviceUserList;
    if (deviceUserList) {
      for (let index = 0; index < deviceUserList.length; index++) {
        const value: DeviceUserDetail = deviceUserList[index];
        const condition: any = {
          userId: value.userId,
          companyID: value.companyID,
        };
        await this.insertData("DeviceUsers", value, condition);
      }
      callBack && callBack();
      console.log("DeviceUsers Inserted");
    }

    // deviceUserQualificationList
    const deviceUserQualificationList = offlineData.deviceUserQualificationList;
    if (deviceUserQualificationList) {
      for (let index = 0; index < deviceUserQualificationList.length; index++) {
        const value: DeviceUserQualificationDetail =
          deviceUserQualificationList[index];
        const condition: any = {
          qualificationID: value.qualificationID,
          userId: value.userId,
        };
        await this.insertData("DeviceUserQualifications", value, condition);
      }
      callBack && callBack();
      console.log("DeviceUserQualifications Inserted");
    }

    // deviceGuestUserList
    const deviceGuestUserList = offlineData.deviceGuestUserList;
    if (deviceGuestUserList) {
      for (let index = 0; index < deviceGuestUserList.length; index++) {
        const value: DeviceGuestUserDetail = deviceGuestUserList[index];
        const condition: any = { guestPhone: value.guestPhone };
        await this.insertData("DeviceGuestUsers", value, condition);
      }
      callBack && callBack();
      console.log("DeviceGuestUsers Inserted");
    }

    // deviceAvailableDocumentList
    const deviceAvailableDocumentList = offlineData.deviceAvailableDocumentList;
    if (deviceAvailableDocumentList) {
      for (let index = 0; index < deviceAvailableDocumentList.length; index++) {
        const value: DeviceAvailableDocumentDetail =
          deviceAvailableDocumentList[index];
        const condition: any = {};
        if (value.documentID) {
          condition["documentID"] = value.documentID;
          condition["documentVersionID"] = value.documentVersionID;
          condition["parentFolderID"] = value.documentVersionID;
        } else if (value.folderID) {
          condition["folderID"] = value.folderID;
          condition["parentFolderID"] = value.folderID;
        }
        if (value.locationID > 0) {
          condition.locationID = value.locationID;
        } else if (value.projectID > 0) {
          condition.projectID = value.projectID;
        } else if (value.inventoryItemID > 0) {
          condition.inventoryItemID = value.inventoryItemID;
        }
        await this.insertData("DeviceAvailableDocuments", value, condition);
      }
      callBack && callBack();
      console.log("DeviceAvailableDocuments Inserted");
    }

    // deviceArchivedDocumentList
    const deviceArchivedDocumentList = offlineData.deviceArchivedDocumentList;
    if (deviceArchivedDocumentList) {
      for (let index = 0; index < deviceArchivedDocumentList.length; index++) {
        const value: DeviceArchivedDocumentDetail =
          deviceArchivedDocumentList[index];
        const condition: any = {
          documentID: value.documentID,
        };
        if (value.locationID > 0) {
          condition.locationID = value.locationID;
        } else if (value.projectID > 0) {
          condition.projectID = value.projectID;
        } else if (value.inventoryItemID > 0) {
          condition.inventoryItemID = value.inventoryItemID;
        }
        await this.insertData("DeviceArchivedDocuments", value, condition);
      }
      callBack && callBack();
      console.log("DeviceArchivedDocuments Inserted");
    }

    // deviceAvailableFormList
    const deviceAvailableFormList = offlineData.deviceAvailableFormList;
    if (deviceAvailableFormList) {
      for (let index = 0; index < deviceAvailableFormList.length; index++) {
        const value: DeviceAvailableFormDetail = deviceAvailableFormList[index];

        const condition: any = {};
        if (value.formID) {
          condition["formID"] = value.formID;
          condition["formVersionID"] = value.formVersionID;
        } else if (value.formFolderID) {
          condition["formFolderID"] = value.formFolderID;
        }
        if (value.locationID > 0) {
          condition.locationID = value.locationID;
        } else if (value.projectID > 0) {
          condition.projectID = value.projectID;
        } else if (value.inventoryItemID > 0) {
          condition.inventoryItemID = value.inventoryItemID;
        }
        await this.insertData("DeviceAvailableForms", value, condition);
      }
      callBack && callBack();
      console.log("DeviceAvailableForms Inserted");
    }

    // deviceArchivedFormList
    const deviceArchivedFormList = offlineData.deviceArchivedFormList;
    if (deviceArchivedFormList) {
      for (let index = 0; index < deviceArchivedFormList.length; index++) {
        const value: DeviceArchivedFormDetail = deviceArchivedFormList[index];
        const condition: any = {
          documentID: value.documentID,
        };
        if (value.locationID > 0) {
          condition.locationID = value.locationID;
        } else if (value.projectID > 0) {
          condition.projectID = value.projectID;
        } else if (value.inventoryItemID > 0) {
          condition.inventoryItemID = value.inventoryItemID;
        }
        await this.insertData("DeviceArchivedForms", value, condition);
      }
      callBack && callBack();
      console.log("DeviceArchivedForms Inserted");
    }

    // deviceAvailableWorkPermitList
    const deviceAvailableWorkPermitList =
      offlineData.deviceAvailableWorkPermitList;
    if (deviceAvailableWorkPermitList) {
      for (
        let index = 0;
        index < deviceAvailableWorkPermitList.length;
        index++
      ) {
        const value: DeviceAvailableWorkPermitDetail =
          deviceAvailableWorkPermitList[index];
        const condition: any = {
          formID: value.formID,
          formVersionID: value.formVersionID,
          formVersionNo: value.formVersionNo,
        };
        if (value.locationID > 0) {
          condition.locationID = value.locationID;
        } else if (value.projectID > 0) {
          condition.projectID = value.projectID;
        } else if (value.inventoryItemID > 0) {
          condition.inventoryItemID = value.inventoryItemID;
        }
        await this.insertData("DeviceAvailableWorkPermits", value, condition);
      }
      callBack && callBack();
      console.log("DeviceAvailableWorkPermits Inserted");
    }

    // deviceLiveWorkPermitList
    const deviceLiveWorkPermitList = offlineData.deviceLiveWorkPermitList;
    if (deviceLiveWorkPermitList) {
      for (let index = 0; index < deviceLiveWorkPermitList.length; index++) {
        const value: DeviceLiveWorkPermitDetail =
          deviceLiveWorkPermitList[index];
        const condition: any = {
          userWorkPermitId: value.userWorkPermitId,
        };
        if (value.locationID > 0) {
          condition.locationID = value.locationID;
        } else if (value.projectID > 0) {
          condition.projectID = value.projectID;
        } else if (value.inventoryItemID > 0) {
          condition.inventoryItemID = value.inventoryItemID;
        }
        await this.insertData("DeviceLiveWorkPermits", value, condition);
      }
      callBack && callBack();
      console.log("DeviceLiveWorkPermits Inserted");
    }

    // deviceArchivedWorkPermitList
    const deviceArchivedWorkPermitList =
      offlineData.deviceArchivedWorkPermitList;
    if (deviceArchivedWorkPermitList) {
      for (
        let index = 0;
        index < deviceArchivedWorkPermitList.length;
        index++
      ) {
        const value: DeviceArchivedWorkPermitDetail =
          deviceArchivedWorkPermitList[index];
        const condition: any = {
          userWorkPermitId: value.userWorkPermitId,
        };
        if (value.locationID > 0) {
          condition.locationID = value.locationID;
        } else if (value.projectID > 0) {
          condition.projectID = value.projectID;
        } else if (value.inventoryItemID > 0) {
          condition.inventoryItemID = value.inventoryItemID;
        }
        await this.insertData("DeviceArchivedWorkPermits", value, condition);
      }
      callBack && callBack();
      console.log("DeviceArchivedWorkPermits Inserted");
    }

    // deviceFormDetailsList
    const deviceFormDetailsList = offlineData.deviceFormDetailsList;
    if (deviceFormDetailsList) {
      for (let index = 0; index < deviceFormDetailsList.length; index++) {
        const value: DeviceFormDetail = deviceFormDetailsList[index];

        const condition: any = {
          formID: value.formID,
          formVersionID: value.formVersionID,
          formVersionNo: value.formVersionNo,
        };
        if (value.locationID > 0) {
          condition.locationID = value.locationID;
        } else if (value.projectID > 0) {
          condition.projectID = value.projectID;
        } else if (value.inventoryItemID > 0) {
          condition.inventoryItemID = value.inventoryItemID;
        }
        await this.insertData("DeviceFormDetails", value, condition);
      }
      callBack && callBack();
      console.log("DeviceFormDetails Inserted");
    }

    // deviceFormAttachmentList
    const deviceFormAttachmentList = offlineData.deviceFormAttachmentList;
    if (deviceFormAttachmentList) {
      for (let index = 0; index < deviceFormAttachmentList.length; index++) {
        const value: DeviceFormAttachmentDetail =
          deviceFormAttachmentList[index];

        const condition: any = {
          formID: value.formID,
          documentID: value.documentID,
        };

        await this.insertData("DeviceFormAttachments", value, condition);
      }
      callBack && callBack();
      console.log("DeviceFormAttachments Inserted");
    }

    // deviceEvacuationList
    const deviceEvacuationList = offlineData.deviceEvacuationList;
    if (deviceEvacuationList) {
      for (let index = 0; index < deviceEvacuationList.length; index++) {
        const value: DeviceEvacuationDetail = deviceEvacuationList[index];

        const condition: any = {
          firstAndLastName: value.firstAndLastName,
        };
        if (value.locationID > 0) {
          condition.locationID = value.locationID;
        } else if (value.projectID > 0) {
          condition.projectID = value.projectID;
        } else if (value.inventoryItemID > 0) {
          condition.inventoryItemID = value.inventoryItemID;
        }
        await this.insertData("DeviceEvacuations", value, condition);
      }
      callBack && callBack();
      console.log("DeviceEvacuations Inserted");
    }

    // deviceUserCheckInQualificationList
    const deviceUserCheckInQualificationList =
      offlineData.deviceUserCheckInQualificationList;
    if (deviceUserCheckInQualificationList) {
      for (
        let index = 0;
        index < deviceUserCheckInQualificationList.length;
        index++
      ) {
        const value: DeviceUserCheckInQualificationDetail =
          deviceUserCheckInQualificationList[index];

        const condition: any = {
          qualificationID: value.qualificationID,
        };
        if (value.locationID) {
          condition["locationID"] = value.locationID;
        } else if (value.projectID) {
          condition["projectID"] = value.projectID;
        } else if (value.inventoryItemID) {
          condition["inventoryItemID"] = value.inventoryItemID;
        }
        await this.insertData(
          "DeviceUserCheckInQualifications",
          value,
          condition
        );
      }
      callBack && callBack();
      console.log("DeviceUserCheckInQualifications Inserted");
    }

    // deviceLocationList
    const deviceLocationList = offlineData.deviceLocationList;
    if (deviceLocationList) {
      for (let index = 0; index < deviceLocationList.length; index++) {
        const value: DeviceLocationDetail = deviceLocationList[index];
        const condition: any = {
          companyID: value.companyID,
          locationID: value.locationID,
        };
        await this.insertData("DeviceLocations", value, condition);
      }
      callBack && callBack();
      console.log("DeviceLocations Inserted");
    }

    // deviceProjectList
    const deviceProjectList = offlineData.deviceProjectList;
    if (deviceProjectList) {
      for (let index = 0; index < deviceProjectList.length; index++) {
        const value: DeviceProjectDetail = deviceProjectList[index];
        const condition: any = {
          companyID: value.companyID,
          projectID: value.projectID,
        };
        await this.insertData("DeviceProjects", value, condition);
      }
      callBack && callBack();
      console.log("DeviceProjects Inserted");
    }

    // deviceInventoryItemList
    const deviceInventoryItemList = offlineData.deviceInventoryItemList;
    if (deviceInventoryItemList) {
      for (let index = 0; index < deviceInventoryItemList.length; index++) {
        const value: DeviceInventoryItemDetail = deviceInventoryItemList[index];
        const condition: any = {
          companyID: value.companyID,
          inventoryItemID: value.inventoryItemID,
        };
        await this.insertData("DeviceInventoryItems", value, condition);
      }
      callBack && callBack();
      console.log("DeviceInventoryItems Inserted");
    }

    // deviceUserCheckinDetailList
    const deviceUserCheckinDetailList = offlineData.deviceUserCheckinDetailList;
    if (deviceUserCheckinDetailList) {
      for (let index = 0; index < deviceUserCheckinDetailList.length; index++) {
        const value: DeviceUserCheckinDetail =
          deviceUserCheckinDetailList[index];
        const condition: any = {
          userCheckInDetailID: value.userCheckInDetailID,
          userId: value.userId,
        };
        if (value.locationID > 0) {
          condition.locationID = value.locationID;
        } else if (value.projectID > 0) {
          condition.projectID = value.projectID;
        } else if (value.inventoryItemID > 0) {
          condition.inventoryItemID = value.inventoryItemID;
        }
        await this.insertData("DeviceUserCheckinDetails", value, condition);
      }
      callBack && callBack();
      console.log("DeviceUserCheckinDetails Inserted");
    }

    // deviceCheckInInductionList
    const deviceCheckInInductionList = offlineData.deviceCheckInInductionList;
    if (deviceCheckInInductionList) {
      for (let index = 0; index < deviceCheckInInductionList.length; index++) {
        const value: DeviceCheckInInductionDetail =
          deviceCheckInInductionList[index];
        const condition: any = {
          checkInInductionID: value.checkInInductionID,
        };
        if (value.locationID > 0) {
          condition.locationID = value.locationID;
        } else if (value.projectID > 0) {
          condition.projectID = value.projectID;
        } else if (value.inventoryItemID > 0) {
          condition.inventoryItemID = value.inventoryItemID;
        }
        await this.insertData("DeviceCheckInInductions", value, condition);
      }
      callBack && callBack();
      console.log("DeviceCheckInInductions Inserted");
    }

    // deviceCheckInInductionItemList
    const deviceCheckInInductionItemList =
      offlineData.deviceCheckInInductionItemList;
    if (deviceCheckInInductionItemList) {
      for (
        let index = 0;
        index < deviceCheckInInductionItemList.length;
        index++
      ) {
        const value: DeviceCheckInInductionItemDetail =
          deviceCheckInInductionItemList[index];
        const condition: any = {
          checkInInductionID: value.checkInInductionID,
          checkInInductionItemID: value.checkInInductionItemID,
          documentID: value.documentID,
          formID: value.formID,
        };
        await this.insertData("DeviceCheckInInductionItems", value, condition);
      }
      callBack && callBack();
      console.log("DeviceCheckInInductionItems Inserted");
    }

    // deviceGuestUserCheckinDetailList
    const deviceGuestUserCheckinDetailList =
      offlineData.deviceGuestUserCheckinDetailList;
    if (deviceGuestUserCheckinDetailList) {
      for (
        let index = 0;
        index < deviceGuestUserCheckinDetailList.length;
        index++
      ) {
        const value: DeviceGuestUserCheckinDetail =
          deviceGuestUserCheckinDetailList[index];
        const condition: any = {
          userCheckInDetailID: value.userCheckInDetailID,
          userId: value.userId,
        };
        if (value.locationID > 0) {
          condition.locationID = value.locationID;
        } else if (value.projectID > 0) {
          condition.projectID = value.projectID;
        } else if (value.inventoryItemID > 0) {
          condition.inventoryItemID = value.inventoryItemID;
        }
        await this.insertData(
          "DeviceGuestUserCheckinDetails",
          value,
          condition
        );
      }
      callBack && callBack();
      console.log("DeviceGuestUserCheckinDetails Inserted");
    }

    // deviceCheckInGuestInductionList
    const deviceCheckInGuestInductionList =
      offlineData.deviceCheckInGuestInductionList;
    if (deviceCheckInGuestInductionList) {
      for (
        let index = 0;
        index < deviceCheckInGuestInductionList.length;
        index++
      ) {
        const value: DeviceCheckInGuestInductionDetail =
          deviceCheckInGuestInductionList[index];
        const condition: any = {
          checkInInductionGuestID: value.checkInInductionGuestID,
        };
        if (value.locationID > 0) {
          condition.locationID = value.locationID;
        } else if (value.projectID > 0) {
          condition.projectID = value.projectID;
        } else if (value.inventoryItemID > 0) {
          condition.inventoryItemID = value.inventoryItemID;
        }
        await this.insertData("DeviceCheckInGuestInductions", value, condition);
      }
      callBack && callBack();
      console.log("DeviceCheckInGuestInductions Inserted");
    }

    // deviceCheckInGuestInductionItemList
    const deviceCheckInGuestInductionItemList =
      offlineData.deviceCheckInGuestInductionItemList;
    if (deviceCheckInGuestInductionItemList) {
      for (
        let index = 0;
        index < deviceCheckInGuestInductionItemList.length;
        index++
      ) {
        const value: DeviceCheckInGuestInductionItemDetail =
          deviceCheckInGuestInductionItemList[index];

        const condition: any = {
          checkInInductionGuestID: value.checkInInductionGuestID,
          checkInInductionGuestItemID: value.checkInInductionGuestItemID,
          documentID: value.documentID,
          formID: value.formID,
        };

        await this.insertData(
          "DeviceCheckInGuestInductionItems",
          value,
          condition
        );
      }
      callBack && callBack();
      console.log("DeviceCheckInGuestInductionItems Inserted");
    }

    // deviceCompanyUserList
    const deviceCompanyUserList = offlineData.deviceCompanyUserList;
    if (deviceCompanyUserList) {
      for (let index = 0; index < deviceCompanyUserList.length; index++) {
        const value: DeviceCompanyUserDetail = deviceCompanyUserList[index];
        const condition: any = {
          userId: value.userId,
        };
        await this.insertData("DeviceCompanyUsers", value, condition);
      }
      callBack && callBack();
      console.log("DeviceCompanyUsers Inserted");
    }

    // deviceCompanyUserGroupList
    const deviceCompanyUserGroupList = offlineData.deviceCompanyUserGroupList;
    if (deviceCompanyUserGroupList) {
      for (let index = 0; index < deviceCompanyUserGroupList.length; index++) {
        const value: DeviceCompanyUserGroupDetail =
          deviceCompanyUserGroupList[index];
        const condition: any = {
          userGroupID: value.userGroupID,
        };
        await this.insertData("DeviceCompanyUserGroups", value, condition);
      }
      callBack && callBack();
      console.log("DeviceCompanyUserGroups Inserted");
    }

    // deviceHAVManufacturerList
    const deviceHAVManufacturerList = offlineData.deviceHAVManufacturerList;
    if (deviceHAVManufacturerList) {
      for (let index = 0; index < deviceHAVManufacturerList.length; index++) {
        const value: DeviceHAVManufacturerDetail =
          deviceHAVManufacturerList[index];
        const condition: any = {
          companyID: value.companyID,
          havManufacturerID: value.havManufacturerID,
        };
        await this.insertData("DeviceHAVManufacturers", value, condition);
      }
      callBack && callBack();
      console.log("DeviceHAVManufacturers Inserted");
    }

    // deviceHAVTypeList
    const deviceHAVTypeList = offlineData.deviceHAVTypeList;
    if (deviceHAVTypeList) {
      for (let index = 0; index < deviceHAVTypeList.length; index++) {
        const value: DeviceHAVTypeDetail = deviceHAVTypeList[index];
        const condition: any = {
          companyID: value.companyID,
          havManufacturerID: value.havManufacturerID,
          havTypeID: value.havTypeID,
        };
        await this.insertData("DeviceHAVTypes", value, condition);
      }
      callBack && callBack();
      console.log("DeviceHAVTypes Inserted");
    }

    // deviceHAVModelList
    const deviceHAVModelList = offlineData.deviceHAVModelList;
    if (deviceHAVModelList) {
      for (let index = 0; index < deviceHAVModelList.length; index++) {
        const value: DeviceHAVModelDetail = deviceHAVModelList[index];
        const condition: any = {
          companyID: value.companyID,
          havManufacturerID: value.havManufacturerID,
          havTypeID: value.havTypeID,
          havModelID: value.havModelID,
        };
        await this.insertData("DeviceHAVModels", value, condition);
      }
      callBack && callBack();
      console.log("DeviceHAVModels Inserted");
    }

    // deviceRiskItemList
    const deviceRiskItemList = offlineData.deviceRiskItemList;
    if (deviceRiskItemList) {
      for (let index = 0; index < deviceRiskItemList.length; index++) {
        const value: DeviceRiskItemDetail = deviceRiskItemList[index];
        const condition: any = {
          companyID: value.companyID,
          companyRiskItemID: value.companyRiskItemID,
        };
        await this.insertData("DeviceRiskItems", value, condition);
      }
      callBack && callBack();
      console.log("DeviceRiskItems Inserted");
    }

    // deviceHazardItemList
    const deviceHazardItemList = offlineData.deviceHazardItemList;
    if (deviceHazardItemList) {
      for (let index = 0; index < deviceHazardItemList.length; index++) {
        const value: DeviceHazardItemDetail = deviceHazardItemList[index];
        const condition: any = {
          companyID: value.companyID,
          companyRiskItemID: value.companyRiskItemID,
          companyHazardItemID: value.companyHazardItemID,
        };
        await this.insertData("DeviceHazardItems", value, condition);
      }
      callBack && callBack();
      console.log("DeviceHazardItems Inserted");
    }

    // deviceAnswerChoiceQrCodeEntityDataList
    const deviceAnswerChoiceQrCodeEntityDataList =
      offlineData.deviceAnswerChoiceQrCodeEntityDataList;
    if (deviceAnswerChoiceQrCodeEntityDataList) {
      for (
        let index = 0;
        index < deviceAnswerChoiceQrCodeEntityDataList.length;
        index++
      ) {
        const value = deviceAnswerChoiceQrCodeEntityDataList[index];
        const condition: any = {
          entityID: value.entityID,
          entityType: value.entityType,
          qrCode: value.qrCode,
        };
        await this.insertData(
          "DeviceAnswerChoiceQrCodeEntities",
          value,
          condition
        );
      }
      callBack && callBack();
      console.log("DeviceAnswerChoiceQrCodeEntities Inserted");
    }

    // deviceLocationItemList
    const deviceLocationItemList = offlineData.deviceLocationItemList;
    if (deviceLocationItemList) {
      for (let index = 0; index < deviceLocationItemList.length; index++) {
        const value: any = deviceLocationItemList[index];
        const condition: any = {
          locationID: value.locationID,
        };
        await this.insertData("DeviceLocationItems", value, condition);
      }
      callBack && callBack();
      console.log("DeviceLocationItems Inserted");
    }

    // deviceAccidentTypeList
    const deviceAccidentTypeList = offlineData.deviceAccidentTypeList;
    if (deviceAccidentTypeList) {
      for (let index = 0; index < deviceAccidentTypeList.length; index++) {
        const value: any = deviceAccidentTypeList[index];
        const condition: any = {
          accidentTypeId: value.accidentTypeId,
        };
        await this.insertData("DeviceAccidentTypes", value, condition);
      }
      callBack && callBack();
      console.log("DeviceAccidentTypes Inserted");
    }

    // deviceAccidentClassificationList
    const deviceAccidentClassificationList =
      offlineData.deviceAccidentClassificationList;
    if (deviceAccidentClassificationList) {
      for (
        let index = 0;
        index < deviceAccidentClassificationList.length;
        index++
      ) {
        const value: any = deviceAccidentClassificationList[index];
        const condition: any = {
          accidentClassificationId: value.accidentClassificationId,
        };
        await this.insertData(
          "DeviceAccidentClassifications",
          value,
          condition
        );
      }
      callBack && callBack();
      console.log("DeviceAccidentClassifications Inserted");
    }

    // deviceRiskAssessmentProbabilityOptions
    const deviceRiskAssessmentProbabilityOptions =
      offlineData.deviceRiskAssessmentProbabilityOptionList;
    if (deviceRiskAssessmentProbabilityOptions) {
      for (
        let index = 0;
        index < deviceRiskAssessmentProbabilityOptions.length;
        index++
      ) {
        const value: any = deviceRiskAssessmentProbabilityOptions[index];
        const condition: any = {
          riskAssessmentProbabilityOptionId:
            value.riskAssessmentProbabilityOptionId,
        };
        await this.insertData(
          "DeviceRiskAssessmentProbabilityOptions",
          value,
          condition
        );
      }
      callBack && callBack();
      console.log("DeviceRiskAssessmentProbabilityOptions Inserted");
    }

    // deviceUserTotalHAVExposureList
    const deviceUserTotalHAVExposureList =
      offlineData.deviceUserTotalHAVExposureList;
    if (deviceUserTotalHAVExposureList) {
      for (
        let index = 0;
        index < deviceUserTotalHAVExposureList.length;
        index++
      ) {
        const value: any = deviceUserTotalHAVExposureList[index];
        const condition: any = {
          userID: value.userID,
          modifiedDate: value.modifiedDate,
        };
        await this.insertData("DeviceUserTotalHAVExposures", value, condition);
      }
      callBack && callBack();
      console.log("DeviceUserTotalHAVExposures Inserted");
    }

    // deviceRiskAssessmentSeverityOptions
    const deviceRiskAssessmentSeverityOptions =
      offlineData.deviceRiskAssessmentSeverityOptionList;
    if (deviceRiskAssessmentSeverityOptions) {
      for (
        let index = 0;
        index < deviceRiskAssessmentSeverityOptions.length;
        index++
      ) {
        const value: any = deviceRiskAssessmentSeverityOptions[index];
        const condition: any = {
          riskAssessmentSeverityOptionId: value.riskAssessmentSeverityOptionId,
        };
        await this.insertData(
          "DeviceRiskAssessmentSeverityOptions",
          value,
          condition
        );
      }
      callBack && callBack();
      console.log("DeviceRiskAssessmentSeverityOptions Inserted");
    }

    // deviceFormBuilderDetailsList
    const deviceFormBuilderDetailsList =
      offlineData.deviceFormBuilderDetailsList;
    if (deviceFormBuilderDetailsList) {
      for (
        let index = 0;
        index < deviceFormBuilderDetailsList.length;
        index++
      ) {
        const value: DeviceFormBuilderDetail =
          deviceFormBuilderDetailsList[index];
        const condition: any = {
          formId: value.formId,
          formVersionNo: value.formVersionNo,
          formVersionId: value.formVersionId,
        };
        await this.insertData("DeviceFormBuilderDetails", value, condition);
      }
      callBack && callBack();
      console.log("deviceFormBuilderDetailsList Inserted");
    }

    callBack && callBack(true);
  };

  appendEntityCondition = (entity: DeviceEntityDetail) => {
    if (entity?.projectID) {
      return "projectID = " + entity?.projectID;
    } else if (entity?.locationID) {
      return "locationID = " + entity?.locationID;
    } else if (entity?.inventoryItemID) {
      return "inventoryItemID = " + entity?.inventoryItemID;
    }
  };

  convertToArray = (rows) => {
    let arr = [];
    if (rows) {
      for (let index = 0; index < rows.length; index++) {
        let item = this.convertToObject(rows, index);
        arr.push(item);
      }
    }

    return arr;
  };

  convertToObject = (rows, index = 0) => {
    let item = null;
    if (rows?.item) {
      item = rows.item(index);
    } else {
      item = rows[index];
    }

    Object.keys(item).map((itemKey) => {
      try {
        item[itemKey] = JSON.parse(unescape(item[itemKey]));
      } catch (e) {}
    });
    return item;
  };
  /****Get data from db*****/

  getAssignedEnitities() {
    return new Promise((resolve, reject) => {
      const query = "SELECT * FROM DeviceEntities";
      this.dbQuery(query, [])
        .then((res: any) => {
          if (res.rows?.length > 0) {
            resolve(this.convertToArray(res.rows));
          } else {
            resolve([]);
          }
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  getDeviceDetail() {
    return new Promise((resolve, reject) => {
      const query = "SELECT * FROM DeviceDetails";
      this.dbQuery(query, [])
        .then((res: any) => {
          if (res.rows?.length > 0) {
            resolve(this.convertToObject(res.rows));
          } else {
            resolve(null);
          }
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  getAvailableDocuments(folderId, entity: DeviceEntityDetail) {
    return new Promise((resolve, reject) => {
      let condition = this.appendEntityCondition(entity);
      if (folderId) {
        condition =
          "(" +
          condition +
          " OR " +
          this.emptyCond(["projectID", "locationID", "inventoryItemID"]) +
          ") " +
          " AND  parentFolderID = " +
          folderId;
      } else {
        condition = condition + " AND " + this.emptyCond("parentFolderID");
      }

      const query =
        "SELECT * FROM DeviceAvailableDocuments" +
        (condition ? " WHERE " + condition : "");
      this.dbQuery(query, [])
        .then((res: any) => {
          if (res.rows?.length > 0) {
            resolve(this.convertToArray(res.rows));
          } else {
            resolve([]);
          }
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  getArchivedDocuments(entity: DeviceEntityDetail) {
    return new Promise((resolve, reject) => {
      let condition = this.appendEntityCondition(entity);

      const query =
        "SELECT * FROM DeviceArchivedDocuments" +
        (condition ? " WHERE " + condition : "") +
        " ORDER BY createdDate DESC";
      this.dbQuery(query, [])
        .then((res: any) => {
          if (res.rows?.length > 0) {
            const list = this.convertToArray(res.rows);
            list.map((item: any) => {
              const createdDate = moment(item.createdDate);
              const currentDate = moment();

              const formattedCreatedDate = createdDate.from(currentDate);

              item.formattedCreatedDate = formattedCreatedDate;
              item.todayDate = currentDate.format("YYYY-MM-DDTHH:mm:00.000");
            });

            resolve(list);
          } else {
            resolve([]);
          }
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  getAvailableForms(folderId, entity: DeviceEntityDetail) {
    return new Promise((resolve, reject) => {
      let condition = this.appendEntityCondition(entity);
      if (folderId) {
        condition =
          "(" +
          condition +
          " OR " +
          this.emptyCond(["projectID", "locationID", "inventoryItemID"]) +
          ") " +
          " AND  parentFormFolderID = " +
          folderId;
      } else {
        condition = condition + " AND  " + this.emptyCond("parentFormFolderID");
      }

      const query =
        "SELECT * FROM DeviceAvailableForms" +
        (condition ? " WHERE " + condition : "");
      this.dbQuery(query, [])
        .then((res: any) => {
          if (res.rows?.length > 0) {
            resolve(this.convertToArray(res.rows));
          } else {
            resolve([]);
          }
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  getArchivedForms(entity: DeviceEntityDetail) {
    return new Promise((resolve, reject) => {
      let condition = this.appendEntityCondition(entity);

      const query =
        "SELECT * FROM DeviceArchivedForms" +
        (condition ? " WHERE " + condition : "") +
        " ORDER BY createdDate DESC";
      this.dbQuery(query, [])
        .then((res: any) => {
          if (res.rows?.length > 0) {
            const list = this.convertToArray(res.rows);
            list.map((item: any) => {
              const createdDate = moment(item.createdDate);
              const currentDate = moment();

              const formattedCreatedDate = createdDate.from(currentDate);

              item.formattedCreatedDate = formattedCreatedDate;
              item.todayDate = currentDate.format(
                StaticDataService.dateTimeFormatForDb
              );
            });

            resolve(list);
          } else {
            resolve([]);
          }
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  getDeviceLiveWorkPermits(entity: DeviceEntityDetail) {
    return new Promise((resolve, reject) => {
      let condition =
        this.appendEntityCondition(entity) +
        ' AND expiryDate >= datetime("now")';

      const query =
        "SELECT * FROM DeviceLiveWorkPermits" +
        (condition ? " WHERE " + condition : "");
      this.dbQuery(query, [])
        .then((res: any) => {
          if (res.rows?.length > 0) {
            const list = this.convertToArray(res.rows);
            list.map((item: any) => {
              const issuedDateObj = moment(item.issuedDate);
              const expiryDateObj = moment(item.expiryDate);
              const currentDate = moment();

              const formattedIssuedDate = issuedDateObj.from(currentDate);
              const formattedExpiryDate =
                expiryDateObj.from(currentDate, true) +
                " (" +
                moment(expiryDateObj).format("DD MMM YYYY HH:mm") +
                ")";

              item.formattedIssuedDate = formattedIssuedDate;
              item.formattedExpiryDate = formattedExpiryDate;
              item.todayDate = currentDate.format("YYYY-MM-DDTHH:mm:00.000");
            });

            resolve(list);
          } else {
            resolve([]);
          }
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  getDeviceArchivedWorkPermits(entity: DeviceEntityDetail) {
    return new Promise((resolve, reject) => {
      let condition = this.appendEntityCondition(entity);

      const query =
        "SELECT * FROM DeviceArchivedWorkPermits" +
        (condition ? " WHERE " + condition : "");
      this.dbQuery(query, [])
        .then((res: any) => {
          if (res.rows?.length > 0) {
            resolve(this.convertToArray(res.rows));
          } else {
            resolve([]);
          }
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  getDeviceAvailableWorkPermits(entity: DeviceEntityDetail, folderId = 0) {
    return new Promise((resolve, reject) => {
      let condition = this.appendEntityCondition(entity);
      if (folderId) {
        condition =
          "(" +
          condition +
          " OR " +
          this.emptyCond(["projectID", "locationID", "inventoryItemID"]) +
          ") " +
          " AND  parentFormFolderID = " +
          folderId;
      } else {
        condition = condition + " AND  " + this.emptyCond("parentFormFolderID");
      }

      const query =
        "SELECT * FROM DeviceAvailableWorkPermits" +
        (condition ? " WHERE " + condition : "");
      this.dbQuery(query, [])
        .then((res: any) => {
          if (res.rows?.length > 0) {
            resolve(this.convertToArray(res.rows));
          } else {
            resolve([]);
          }
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  getDeviceEvacuations(entity: DeviceEntityDetail) {
    return new Promise((resolve, reject) => {
      let condition = this.appendEntityCondition(entity);

      const query =
        "SELECT DeviceEvacuations.*, ImageVideoFiles.fileName as offlineUserPhoto  FROM DeviceEvacuations LEFT JOIN ImageVideoFiles ON DeviceEvacuations.userPhotoImageVideoFileId=ImageVideoFiles.imageVideoFileId" +
        (condition ? " WHERE " + condition : "");
      this.dbQuery(query, [])
        .then((res: any) => {
          if (res.rows?.length > 0) {
            resolve(this.convertToArray(res.rows));
          } else {
            resolve([]);
          }
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  getDeviceCompanyUsers(name = "") {
    return new Promise((resolve, reject) => {
      let condition = "";
      if (name) {
        condition =
          condition + "LOWER(firstAndLastName) LIKE LOWER('%" + name + "%')";
      }

      const query =
        "SELECT * FROM DeviceCompanyUsers" +
        (condition ? " WHERE " + condition : "");
      this.dbQuery(query, [])
        .then((res: any) => {
          if (res.rows?.length > 0) {
            resolve(this.convertToArray(res.rows));
          } else {
            resolve([]);
          }
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  getDeviceCompanyUserGroups() {
    return new Promise((resolve, reject) => {
      const query = "SELECT * FROM DeviceCompanyUserGroups";
      this.dbQuery(query, [])
        .then((res: any) => {
          if (res.rows?.length > 0) {
            resolve(this.convertToArray(res.rows));
          } else {
            resolve([]);
          }
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  getDeviceUsers(name) {
    return new Promise((resolve, reject) => {
      let condition = "";

      if (name) {
        condition =
          condition +
          "LOWER(firstAndLastName) LIKE LOWER('%" +
          name +
          "%') OR LOWER(fullName) LIKE LOWER('%" +
          name +
          "%')";
      }

      const query =
        'SELECT *, firstName || " " || lastName as firstAndLastName, firstName || " " || middleName || " " || lastName as fullName FROM DeviceUsers' +
        (condition ? " WHERE " + condition : "");
      this.dbQuery(query, [])
        .then((res: any) => {
          if (res.rows?.length > 0) {
            resolve(this.convertToArray(res.rows));
          } else {
            resolve([]);
          }
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  getDeviceHazardItems(companyId, companyRiskItemID) {
    return new Promise((resolve, reject) => {
      let conitionObj = {
        companyID: companyId,
        companyRiskItemID: companyRiskItemID,
      };
      let condition = this.convertObjectToConditionString(conitionObj);

      const query =
        "SELECT * FROM DeviceHazardItems" +
        (condition ? " WHERE " + condition : "");
      this.dbQuery(query, [])
        .then((res: any) => {
          if (res.rows?.length > 0) {
            resolve(this.convertToArray(res.rows));
          } else {
            resolve([]);
          }
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  getDeviceRiskAssessmentSeverityOptions() {
    return new Promise((resolve, reject) => {
      const query = "SELECT * FROM DeviceRiskAssessmentSeverityOptions";
      this.dbQuery(query, [])
        .then((res: any) => {
          if (res.rows?.length > 0) {
            resolve(this.convertToArray(res.rows));
          } else {
            resolve([]);
          }
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  getDeviceRiskAssessmentProbabilityOptions() {
    return new Promise((resolve, reject) => {
      const query = "SELECT * FROM DeviceRiskAssessmentProbabilityOptions";
      this.dbQuery(query, [])
        .then((res: any) => {
          if (res.rows?.length > 0) {
            resolve(this.convertToArray(res.rows));
          } else {
            resolve([]);
          }
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  getDeviceRiskItems() {
    return new Promise((resolve, reject) => {
      const query = "SELECT * FROM DeviceRiskItems";
      this.dbQuery(query, [])
        .then((res: any) => {
          if (res.rows?.length > 0) {
            resolve(this.convertToArray(res.rows));
          } else {
            resolve([]);
          }
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  getGuestUserDetailByPhone(phone) {
    return new Promise((resolve, reject) => {
      let condition = "";
      if (phone) {
        condition =
          condition + "rtrim(guestPhone) LIKE rtrim('%" + phone + "%')";
      }

      const query =
        "SELECT * FROM DeviceGuestUsers" +
        (condition ? " WHERE " + condition : "");
      this.dbQuery(query, [])
        .then((res: any) => {
          if (res.rows?.length > 0) {
            resolve(this.convertToObject(res.rows));
          } else {
            resolve(null);
          }
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  getUserDetailByQRCode(qrcode) {
    return new Promise((resolve, reject) => {
      let condition = "";
      if (qrcode) {
        condition = condition + "qrCode = '" + qrcode + "'";
      }

      const query =
        "SELECT * FROM DeviceUsers" + (condition ? " WHERE " + condition : "");
      this.dbQuery(query, [])
        .then((res: any) => {
          if (res.rows?.length > 0) {
            resolve(this.convertToObject(res.rows));
          } else {
            resolve(null);
          }
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  getAnswerChoiceEntityByQRCode(qrCode) {
    return new Promise(async (resolve, reject) => {
      let condition = "";
      if (qrCode) {
        condition = condition + ' qrCode="' + qrCode + '"';
      }
      // Get DeviceInventoryItems
      let query =
        "SELECT * FROM DeviceAnswerChoiceQrCodeEntities" +
        (condition ? " WHERE " + condition : "");
      const inventryItemsRes: any = await this.dbQuery(query, []);
      if (inventryItemsRes && inventryItemsRes.rows?.length > 0) {
        const inventoryItem = this.convertToObject(inventryItemsRes.rows);
        resolve(inventoryItem);
      } else {
        resolve(null);
      }
    });
  }

  getDeviceUserLastCheckinDetail(
    entity: DeviceEntityDetail,
    userIdOrGuestPhone,
    isGuest = false
  ) {
    return new Promise((resolve, reject) => {
      let condition = this.appendEntityCondition(entity);
      let query;
      if (isGuest) {
        condition =
          condition + ' AND guestPhone = "' + userIdOrGuestPhone + '"';
        query =
          "SELECT * FROM DeviceGuestUserCheckinDetails" +
          (condition ? " WHERE " + condition : "") +
          " ORDER BY checkInDate DESC";
      } else {
        condition = condition + ' AND userId = "' + userIdOrGuestPhone + '"';
        query =
          "SELECT * FROM DeviceUserCheckinDetails" +
          (condition ? " WHERE " + condition : "") +
          " ORDER BY checkInDate DESC";
      }

      this.dbQuery(query, [])
        .then((res: any) => {
          if (res.rows?.length > 0) {
            resolve(this.convertToObject(res.rows));
          } else {
            resolve(null);
          }
        })
        .catch((error) => {
          reject(null);
        });
    });
  }

  getDeviceUserCheckinDetails(
    entity: DeviceEntityDetail,
    userIdOrGuestPhone,
    isGuest = false
  ) {
    return new Promise((resolve, reject) => {
      const onSuccess = async (deviceUserCheckinDetails) => {
        let entityData: any;
        if (entity.locationID) {
          entityData = await this.getDeviceLocationDetail(entity.locationID);
        } else if (entity.projectID) {
          entityData = await this.getDeviceProjectDetail(entity.projectID);
        } else if (entity.inventoryItemID) {
          entityData = await this.getDeviceInventoryItemDetail(
            entity.inventoryItemID
          );
        }

        const checkInEntityDetail = {
          checkInGuestPhoto: entityData.checkInGuestPhoto,
          checkInPersonalPhoto: entityData.checkInPersonalPhoto,
          checkInPersonalQR: entityData.checkInPersonalQR,
          inventoryItemID: entity.inventoryItemID,
          locationID: entity.locationID,
          processInduction: false,
          projectID: entity.projectID,
        };
        const inductionDetail: any = isGuest
          ? await this.getDeviceCheckInGuestInductionDetail(entity)
          : await this.getDeviceCheckInInductionDetail(entity);
        let checkInInductionItems: any = [];
        if (inductionDetail) {
          // Check process induction
          const lastCheckinForCurrentLocation: any =
            await this.getDeviceUserLastCheckinDetail(
              entity,
              userIdOrGuestPhone,
              isGuest
            );
          if (lastCheckinForCurrentLocation) {
            const lastCheckinDate = lastCheckinForCurrentLocation.checkInDate;
            const lastCheckinDateObj = moment(lastCheckinDate);
            const currentDate = moment();

            const renewEveryPeriodType = inductionDetail.renewEveryPeriodType;
            const renewEveryPeriod = inductionDetail.renewEveryPeriod;
            if (renewEveryPeriodType && renewEveryPeriod) {
              const diff = currentDate.diff(
                lastCheckinDateObj,
                renewEveryPeriodType.toLowerCase()
              );
              if (diff >= renewEveryPeriod) {
                checkInEntityDetail.processInduction = true;
              }
            }
          } else {
            checkInEntityDetail.processInduction = true;
          }

          checkInInductionItems = isGuest
            ? await this.getDeviceCheckInGuestInductionItems(
                inductionDetail.checkInInductionGuestID
              )
            : await this.getDeviceCheckInInductionItems(
                inductionDetail.checkInInductionID
              );
        }
        resolve({
          checkInEntityDetail: checkInEntityDetail,
          checkInInduction: inductionDetail,
          checkInInductionItems: checkInInductionItems,
        });
      };

      let query;
      const checkoutDateCondition =
        '(checkOutDate is NULL OR checkOutDate="" OR checkOutDate="' +
        StaticDataService.userDefaultDate +
        '")';
      if (isGuest) {
        const condition =
          ' guestPhone = "' +
          userIdOrGuestPhone +
          '" AND ' +
          checkoutDateCondition;
        query =
          "SELECT * FROM DeviceGuestUserCheckinDetails" +
          (condition ? " WHERE " + condition : "") +
          " ORDER BY checkInDate DESC";
      } else {
        const condition =
          ' userId = "' + userIdOrGuestPhone + '" AND ' + checkoutDateCondition;
        query =
          "SELECT * FROM DeviceUserCheckinDetails" +
          (condition ? " WHERE " + condition : "") +
          " ORDER BY checkInDate DESC";
      }

      this.dbQuery(query, [])
        .then(async (res: any) => {
          const deviceUserCheckinDetails = this.convertToArray(res.rows);

          let isAlreadyCheckinToThisEntity = false;
          let isSimultaneousCheckInAllowed = true;
          let currentCheckinLocation;

          // Get list of assgined enity to the device
          let deviceAssginedLocationIds = [];
          let deviceAssginedProjectIds = [];
          let deviceAssginedInventryItemIds = [];
          const deviceAssginedEntity = localStorage.getItem(
            EnumService.LocalStorageKeys.DEDICATED_MODE_ASSIGNED_ENTITIES
          );
          if (deviceAssginedEntity) {
            try {
              const list = JSON.parse(deviceAssginedEntity);
              list.map((obj) => {
                if (obj.locationID) {
                  deviceAssginedLocationIds.push(obj.locationID);
                } else if (obj.projectID) {
                  deviceAssginedProjectIds.push(obj.projectID);
                } else if (obj.inventoryItemID) {
                  deviceAssginedInventryItemIds.push(obj.inventoryItemID);
                }
              });
            } catch (error) {}
          }

          if (res.rows?.length > 0) {
            if (
              deviceUserCheckinDetails &&
              deviceUserCheckinDetails.length > 0
            ) {
              // Check if already checking to this entity
              deviceUserCheckinDetails.some((item) => {
                if (
                  (entity.locationID &&
                    entity.locationID === item.locationID) ||
                  (entity.projectID && entity.projectID === item.projectID) ||
                  (entity.inventoryItemID &&
                    entity.inventoryItemID === item.inventoryItemID)
                ) {
                  isAlreadyCheckinToThisEntity = true;
                  currentCheckinLocation = item;
                  return true;
                }
              });

              // Check if SimultaneousCheckIn allowed or not
              deviceUserCheckinDetails.some((item) => {
                const locationIsAssigned =
                  (item.locationID &&
                    deviceAssginedLocationIds.indexOf(item.locationID) !==
                      -1) ||
                  (item.projectID &&
                    deviceAssginedProjectIds.indexOf(item.projectID) !== -1) ||
                  (item.inventoryItemID &&
                    deviceAssginedInventryItemIds.indexOf(
                      item.inventoryItemID
                    ) !== -1);
                if (locationIsAssigned && !item.isSimultaneousCheckIn) {
                  isSimultaneousCheckInAllowed = false;
                  currentCheckinLocation = item;
                  return true;
                }
              });
            }

            if (isAlreadyCheckinToThisEntity || !isSimultaneousCheckInAllowed) {
              // let entityData: any;
              let Field = "";
              let Message = "";
              let entityId = isGuest
                ? currentCheckinLocation.deviceGuestUserCheckinDetailId
                : currentCheckinLocation.deviceUserCheckinDetailId;
              let entityName = currentCheckinLocation.entityName;

              if (isAlreadyCheckinToThisEntity) {
                Field = "Location#" + entityId;
                Message = "'" + entityName + "'";
              } else if (!isSimultaneousCheckInAllowed) {
                Field = "SimultaneousCheckIn#" + entityId;
                Message = "'" + entityName + "'";
              }

              const response = {
                error: {
                  Version: "1.0",
                  StatusCode: 402,
                  Message: "",
                  Result: null,
                  ResponseException: {
                    IsError: true,
                    ExceptionMessage: {},
                    Details: "",
                    ReferenceErrorCode: "",
                    ReferenceDocumentLink: "",
                    ValidationErrors: [
                      {
                        Field: Field,
                        Message: Message,
                      },
                    ],
                  },
                },
              };
              reject(response);
            } else {
              onSuccess(deviceUserCheckinDetails);
            }
          } else {
            onSuccess(null);
          }
        })
        .catch((error) => {
          debugger;
          reject(error);
        });
    });
  }

  getDeviceCheckInInductionDetail(entity: DeviceEntityDetail) {
    return new Promise((resolve, reject) => {
      let condition = this.appendEntityCondition(entity);

      const query =
        "SELECT * FROM DeviceCheckInInductions" +
        (condition ? " WHERE " + condition : "");
      this.dbQuery(query, [])
        .then((res: any) => {
          if (res.rows?.length > 0) {
            resolve(this.convertToObject(res.rows));
          } else {
            resolve(null);
          }
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  getDeviceCheckInGuestInductionDetail(entity: DeviceEntityDetail) {
    return new Promise((resolve, reject) => {
      let condition = this.appendEntityCondition(entity);

      const query =
        "SELECT * FROM DeviceCheckInGuestInductions" +
        (condition ? " WHERE " + condition : "");
      this.dbQuery(query, [])
        .then((res: any) => {
          if (res.rows?.length > 0) {
            resolve(this.convertToObject(res.rows));
          } else {
            resolve(null);
          }
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  getDeviceCheckInInductionItems(checkInInductionID: string) {
    return new Promise((resolve, reject) => {
      let condition = "checkInInductionID=" + checkInInductionID;

      const query =
        "SELECT * FROM DeviceCheckInInductionItems" +
        (condition ? " WHERE " + condition : "");
      this.dbQuery(query, [])
        .then((res: any) => {
          if (res.rows?.length > 0) {
            resolve(this.convertToArray(res.rows));
          } else {
            resolve(null);
          }
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  getDeviceCheckInGuestInductionItems(checkInInductionGuestID: string) {
    return new Promise((resolve, reject) => {
      let condition = "checkInInductionGuestID=" + checkInInductionGuestID;

      const query =
        "SELECT * FROM DeviceCheckInGuestInductionItems" +
        (condition ? " WHERE " + condition : "");
      this.dbQuery(query, [])
        .then((res: any) => {
          if (res.rows?.length > 0) {
            resolve(this.convertToArray(res.rows));
          } else {
            resolve(null);
          }
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  getDeviceInventoryItemDetail(inventoryItemID: any) {
    return new Promise((resolve, reject) => {
      let condition = "inventoryItemID=" + inventoryItemID;

      const query =
        "SELECT * FROM DeviceInventoryItems" +
        (condition ? " WHERE " + condition : "");
      this.dbQuery(query, [])
        .then((res: any) => {
          if (res.rows?.length > 0) {
            resolve(this.convertToObject(res.rows));
          } else {
            resolve(null);
          }
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  getDeviceLocationDetail(locationID: any) {
    return new Promise((resolve, reject) => {
      let condition = "locationID=" + locationID;

      const query =
        "SELECT * FROM DeviceLocations" +
        (condition ? " WHERE " + condition : "");
      this.dbQuery(query, [])
        .then((res: any) => {
          if (res.rows?.length > 0) {
            resolve(this.convertToObject(res.rows));
          } else {
            resolve(null);
          }
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  getDeviceProjectDetail(projectID: any) {
    return new Promise((resolve, reject) => {
      let condition = "projectID=" + projectID;

      const query =
        "SELECT * FROM DeviceProjects" +
        (condition ? " WHERE " + condition : "");
      this.dbQuery(query, [])
        .then((res: any) => {
          if (res.rows?.length > 0) {
            resolve(this.convertToObject(res.rows));
          } else {
            resolve(null);
          }
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  getManufacturerList(companyId) {
    return new Promise((resolve, reject) => {
      const condition = "companyID=" + companyId;

      const query =
        "SELECT * FROM DeviceHAVManufacturers" +
        (condition ? " WHERE " + condition : "");
      this.dbQuery(query, [])
        .then((res: any) => {
          if (res.rows?.length > 0) {
            resolve(this.convertToArray(res.rows));
          } else {
            resolve([]);
          }
        })
        .catch((error) => {
          resolve([]);
        });
    });
  }

  getTypeList(companyId, manufacturerId) {
    return new Promise((resolve, reject) => {
      const condition =
        "companyID=" + companyId + " AND havManufacturerID=" + manufacturerId;

      const query =
        "SELECT * FROM DeviceHAVTypes" +
        (condition ? " WHERE " + condition : "");
      this.dbQuery(query, [])
        .then((res: any) => {
          if (res.rows?.length > 0) {
            resolve(this.convertToArray(res.rows));
          } else {
            resolve([]);
          }
        })
        .catch((error) => {
          resolve([]);
        });
    });
  }

  getModelList(companyId, typeId) {
    return new Promise((resolve, reject) => {
      const condition = "companyID=" + companyId + " AND havTypeID=" + typeId;

      const query =
        "SELECT * FROM DeviceHAVModels" +
        (condition ? " WHERE " + condition : "");
      this.dbQuery(query, [])
        .then((res: any) => {
          if (res.rows?.length > 0) {
            resolve(this.convertToArray(res.rows));
          } else {
            resolve([]);
          }
        })
        .catch((error) => {
          resolve([]);
        });
    });
  }

  getDeviceAccidentTypeList() {
    return new Promise((resolve, reject) => {
      const query = "SELECT * FROM DeviceAccidentTypes";
      this.dbQuery(query, [])
        .then((res: any) => {
          if (res.rows?.length > 0) {
            resolve(this.convertToArray(res.rows));
          } else {
            resolve([]);
          }
        })
        .catch((error) => {
          resolve([]);
        });
    });
  }

  getDeviceAccidentClassificationList() {
    return new Promise((resolve, reject) => {
      const query = "SELECT * FROM DeviceAccidentClassifications";
      this.dbQuery(query, [])
        .then((res: any) => {
          if (res.rows?.length > 0) {
            resolve(this.convertToArray(res.rows));
          } else {
            resolve([]);
          }
        })
        .catch((error) => {
          resolve([]);
        });
    });
  }

  getDeviceLocationItemList() {
    return new Promise((resolve, reject) => {
      const query = "SELECT * FROM DeviceLocationItems";
      this.dbQuery(query, [])
        .then((res: any) => {
          if (res.rows?.length > 0) {
            resolve(this.convertToArray(res.rows));
          } else {
            resolve([]);
          }
        })
        .catch((error) => {
          resolve([]);
        });
    });
  }

  getDeviceUserCheckInQualifications(entity) {
    return new Promise((resolve) => {
      let condition = this.appendEntityCondition(entity);
      const query =
        "SELECT * FROM DeviceUserCheckInQualifications" +
        (condition ? " WHERE " + condition : "");
      this.dbQuery(query, [])
        .then((res: any) => {
          if (res.rows?.length > 0) {
            resolve(this.convertToArray(res.rows));
          } else {
            resolve([]);
          }
        })
        .catch((error) => {
          resolve([]);
        });
    });
  }

  getDeviceUserQualifications(userId) {
    return new Promise((resolve) => {
      let condition = 'userId = "' + userId + '"';
      const query =
        "SELECT * FROM DeviceUserQualifications" +
        (condition ? " WHERE " + condition : "");
      this.dbQuery(query, [])
        .then((res: any) => {
          if (res.rows?.length > 0) {
            resolve(this.convertToArray(res.rows));
          } else {
            resolve([]);
          }
        })
        .catch((error) => {
          resolve([]);
        });
    });
  }

  getFormDetail(formId, formVersionId, formVersionNo, folderId = null) {
    return new Promise((resolve, reject) => {
      let condition =
        "formId = " +
        formId +
        " AND formVersionId = " +
        formVersionId +
        " AND formVersionNo = " +
        formVersionNo;
      if (folderId) {
        condition = " AND  parentFormFolderID = " + folderId;
      } else {
        condition = condition + " AND  " + this.emptyCond("parentFormFolderID");
      }
      const query = "SELECT * FROM DeviceFormDetails" + " WHERE " + condition;

      this.dbQuery(query, [])
        .then((res: any) => {
          if (res.rows?.length > 0) {
            const formDetail = this.convertToObject(res.rows);
            this.getDeviceFormAttachments(formId).then((attachments) => {
              if (attachments) {
                formDetail.formAttachments = attachments;
              }
              resolve(formDetail);
            });
          } else {
            resolve(null);
          }
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  getSignOffFormDetail(formId) {
    return new Promise((resolve, reject) => {
      let condition = "formId = " + formId;

      const query = "SELECT * FROM DeviceFormDetails" + " WHERE " + condition;

      this.dbQuery(query, [])
        .then((res: any) => {
          if (res.rows?.length > 0) {
            const formData = this.convertToObject(res.rows);
            this.getDeviceFormAttachments(formId).then((attachments) => {
              resolve({
                formData,
                formAttachments: attachments
                  ? attachments
                  : formData.formAttachments,
                entityList: null,
              });
            });
          } else {
            resolve(null);
          }
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  getDeviceFormAttachments(formId) {
    return new Promise((resolve, reject) => {
      let condition = "formID = " + formId;

      const query =
        "SELECT * FROM DeviceFormAttachments" + " WHERE " + condition;

      this.dbQuery(query, [])
        .then((res: any) => {
          if (res.rows?.length > 0) {
            resolve(this.convertToArray(res.rows));
          } else {
            resolve(null);
          }
        })
        .catch((error) => {
          resolve(null);
        });
    });
  }

  getFormBuilderDetail(formId, formVersionId, formVersionNo) {
    return new Promise((resolve, reject) => {
      let condition =
        "formId = " +
        formId +
        " AND formVersionId = " +
        formVersionId +
        " AND formVersionNo = " +
        formVersionNo;
      const query =
        "SELECT * FROM DeviceFormBuilderDetails" + " WHERE " + condition;

      this.dbQuery(query, [])
        .then((res: any) => {
          if (res.rows?.length > 0) {
            resolve(this.convertToObject(res.rows));
          } else {
            resolve(null);
          }
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  getUserTotalHAVExposureForToday(userId) {
    return new Promise((resolve) => {
      let condition =
        'userId = "' +
        userId +
        '" AND date="' +
        moment().format("YYYY-MM-DDT00:00:00.000") +
        '"';
      const query =
        "SELECT exposure as total_exposure FROM UserHavExposure" +
        (condition ? " WHERE " + condition : "");
      this.dbQuery(query, [])
        .then((res: any) => {
          debugger;
          if (res.rows?.length > 0) {
            resolve(this.convertToObject(res.rows));
          } else {
            resolve(null);
          }
        })
        .catch((error) => {
          resolve(null);
        });
    });
  }

  /********************************************************************************/
  /*****************************Insert Data Operations*****************************/
  /********************************************************************************/

  insertLiveWorkPermit = (data) => {
    return new Promise((resolve, reject) => {
      this.insertData("DeviceLiveWorkPermits", data)
        .then((res: any) => {
          resolve(res.insertId);
        })
        .catch((error) => {
          reject(error);
        });
    });
  };

  insertImageVideoFile = (data) => {
    return new Promise((resolve, reject) => {
      this.insertData("ImageVideoFiles", data)
        .then((res: any) => {
          resolve(res.insertId);
        })
        .catch((error) => {
          reject(error);
        });
    });
  };

  insertFormSubmitData = (data) => {
    return new Promise((resolve, reject) => {
      this.insertData("FormSubmitData", data)
        .then((res: any) => {
          resolve(res.insertId);
        })
        .catch((error) => {
          reject({ message: "Error in saving the form" });
        });
    });
  };

  insertDeviceArchivedDocuments = (data) => {
    return new Promise((resolve, reject) => {
      const entity: any = {
        inventoryItemID: data.inventoryItemID,
        locationID: data.locationID,
        projectID: data.projectID,
      };
      let condition = this.appendEntityCondition(entity);
      condition =
        condition + " AND documentTitle LIKE '%" + data.documentTitle + "%'";
      const query =
        "SELECT COUNT(*) as total_count FROM DeviceArchivedDocuments" +
        (condition ? " WHERE " + condition : "") +
        " ORDER BY createdDate DESC";
      this.dbQuery(query, [])
        .then((res: any) => {
          debugger;
          if (res.rows?.length > 0) {
            const obj = this.convertToObject(res.rows);
            if (obj.total_count > 0) {
              data.documentTitle = data.documentTitle + " " + obj.total_count;
            }
          }
          this.insertData("DeviceArchivedDocuments", data)
            .then((res: any) => {
              resolve(res.insertId);
            })
            .catch((error) => {
              reject({ message: "Error in saving the form" });
            });
        })
        .catch(() => {
          this.insertData("DeviceArchivedDocuments", data)
            .then((res: any) => {
              resolve(res.insertId);
            })
            .catch((error) => {
              reject({ message: "Error in saving the form" });
            });
        });
    });
  };

  insertDeviceArchivedForms = (data) => {
    return new Promise((resolve, reject) => {
      const entity: any = {
        inventoryItemID: data.inventoryItemID,
        locationID: data.locationID,
        projectID: data.projectID,
      };
      let condition = this.appendEntityCondition(entity);
      condition =
        condition + " AND documentTitle LIKE '%" + data.documentTitle + "%'";
      const query =
        "SELECT COUNT(*) as total_count FROM DeviceArchivedForms" +
        (condition ? " WHERE " + condition : "") +
        " ORDER BY createdDate DESC";
      this.dbQuery(query, [])
        .then((res: any) => {
          debugger;
          if (res.rows?.length > 0) {
            const obj = this.convertToObject(res.rows);
            if (obj.total_count > 0) {
              data.documentTitle = data.documentTitle + " " + obj.total_count;
            }
          }
          this.insertData("DeviceArchivedForms", data)
            .then((res: any) => {
              resolve(res.insertId);
            })
            .catch((error) => {
              reject({ message: "Error in saving the form" });
            });
        })
        .catch(() => {
          this.insertData("DeviceArchivedForms", data)
            .then((res: any) => {
              resolve(res.insertId);
            })
            .catch((error) => {
              reject({ message: "Error in saving the form" });
            });
        });
    });
  };

  insertHAVExposureForDate = (data) => {
    return new Promise((resolve, reject) => {
      const condition =
        'userId="' +
        data.userId +
        '" AND date="' +
        moment().format("YYYY-MM-DDT00:00:00.000") +
        '"';
      let query =
        "SELECT userHavExposureId FROM UserHavExposure WHERE " + condition;
      this.dbQuery(query)
        .then((res: any) => {
          if (res && res.rows?.length > 0) {
            let query =
              "UPDATE UserHavExposure SET exposure=? WHERE " + condition;
            this.dbQuery(query, [data.exposure])
              .then((updateRes: any) => {
                resolve(updateRes);
              })
              .catch((error) => {
                reject(error);
              });
          } else {
            this.insertData("UserHavExposure", data);
          }
        })
        .catch(() => {
          this.insertData("UserHavExposure", data);
        });
    });
  };

  insertSignOffDetail = (data) => {
    return this.insertData("SignOffDetails", data);
  };

  insertCheckinDetails = async (data) => {
    let userQualified = false;
    const checkinQualifications: any =
      await this.getDeviceUserCheckInQualifications(data);

    if (checkinQualifications && checkinQualifications.length > 0) {
      const userQualifications: any = await this.getDeviceUserQualifications(
        data.userId
      );
      if (userQualifications && userQualifications.length > 0) {
        let matchedQualificationCount = 0;
        checkinQualifications.map((checkinQualObj) => {
          userQualifications.some((userQualObj) => {
            if (
              checkinQualObj.qualificationID === userQualObj.qualificationID
            ) {
              if (
                userQualObj.expireDate &&
                userQualObj.expireDate !== StaticDataService.userDefaultDate
              ) {
                const expireDate = moment(userQualObj.expireDate);
                const todayDate = moment();

                const validTilDays = expireDate.diff(todayDate, "days");
                if (validTilDays > 0) {
                  matchedQualificationCount++;
                }
              } else {
                matchedQualificationCount++;
              }
              return true;
            }
          });
        });
        if (matchedQualificationCount === checkinQualifications.length) {
          userQualified = true;
        }
      }
    } else {
      userQualified = true;
    }

    return new Promise((resolve, reject) => {
      if (userQualified) {
        const { dataCols, dataVals, dataValPlaceHolders } =
          this.convertObjectToColValPlaceholders(data);

        let query =
          "INSERT INTO DeviceUserCheckinDetails (" +
          dataCols.join(",") +
          ") select " +
          dataValPlaceHolders.join(",") +
          "";

        this.dbQuery(query, dataVals)
          .then((res: any) => {
            // Insert user checkin detail to Evacuation List
            const evacuationData = {
              firstAndLastName: data.firstAndLastName || "",
              firstName: data.firstName || "",
              inventoryItemID: data.inventoryItemID || 0,
              lastName: data.lastName || "",
              locationID: data.locationID || 0,
              projectID: data.projectID || 0,
              userDetailPhoto: data.userDetailPhoto || "",
              userPhoto: data.userPhoto || "",
              userPhotoImageVideoFileId:
                data.userSignaturePhotoImageVideoFileId || "",
            };

            let evacCondition = {};
            if (data.inventoryItemID) {
              evacCondition["inventoryItemID"] = data.inventoryItemID;
            } else if (data.locationID) {
              evacCondition["locationID"] = data.locationID;
            } else if (data.projectID) {
              evacCondition["projectID"] = data.projectID;
            }

            if (data.firstAndLastName) {
              evacCondition["firstAndLastName"] = data.firstAndLastName;
            }
            this.insertData("DeviceEvacuations", evacuationData, evacCondition);

            resolve(res);
          })
          .catch((error) => {
            reject(error);
          });
      } else {
        const response = {
          error: {
            Version: "1.0",
            StatusCode: 402,
            Message: "",
            Result: null,
            ResponseException: {
              IsError: true,
              ExceptionMessage: {},
              Details: "",
              ReferenceErrorCode: "",
              ReferenceDocumentLink: "",
              ValidationErrors: [
                {
                  Field: "Qualification",
                  Message: "You do not have the required qualifications.",
                },
              ],
            },
          },
        };
        reject(response);
      }
    });
  };

  insertGuestCheckinDetails = (data) => {
    if (!data.isGuestReturning) {
      // Insert guest to the db if never checked in before
      const guestUser = {
        guestFirsName: data.guestFirsName || "",
        guestLastName: data.guestLastName || "",
        guestMiddleName: data.guestMiddleName || "",
        guestPhone: data.guestPhone || "",
        guestPhotoImageVideoFileId: data.guestPhotoImageVideoFileId || "",
        isOfflineDone: data.isOfflineDone || false,
      };

      const { dataCols, dataVals, dataValPlaceHolders } =
        this.convertObjectToColValPlaceholders(guestUser);
      let query =
        "INSERT INTO DeviceGuestUsers (" +
        dataCols.join(",") +
        ") select " +
        dataValPlaceHolders.join(",") +
        "";

      this.dbQuery(query, dataVals)
        .then((res: any) => {})
        .catch((error) => {});
    }

    return new Promise((resolve, reject) => {
      const { dataCols, dataVals, dataValPlaceHolders } =
        this.convertObjectToColValPlaceholders(data);

      let query =
        "INSERT INTO DeviceGuestUserCheckinDetails (" +
        dataCols.join(",") +
        ") select " +
        dataValPlaceHolders.join(",") +
        "";

      this.dbQuery(query, dataVals)
        .then((res: any) => {
          // Insert user checkin detail to Evacuation List
          const evacuationData = {
            firstAndLastName:
              data.guestFirsName +
              " " +
              (data.guestMiddleName ? data.guestMiddleName + " " : "") +
              data.guestLastName,
            firstName: data.guestFirsName || "",
            inventoryItemID: data.inventoryItemID || "",
            lastName: data.guestLastName || "",
            locationID: data.locationID || 0,
            projectID: data.projectID || 0,
            userDetailPhoto: data.guestPhotoFileName || "",
            userPhoto: data.guestPhotoFileName || "",
            userPhotoImageVideoFileId: data.guestPhotoImageVideoFileId || 0,
          };

          let evacCondition = {};
          if (evacuationData.inventoryItemID) {
            evacCondition["inventoryItemID"] = evacuationData.inventoryItemID;
          } else if (evacuationData.locationID) {
            evacCondition["locationID"] = evacuationData.locationID;
          } else if (evacuationData.projectID) {
            evacCondition["projectID"] = evacuationData.projectID;
          }

          if (evacuationData.firstAndLastName) {
            evacCondition["firstAndLastName"] = evacuationData.firstAndLastName;
          }
          this.insertData("DeviceEvacuations", evacuationData, evacCondition);
          resolve(res);
        })
        .catch((error) => {
          reject(error);
        });
    });
  };

  insertCheckOutDetails = (data, cond) => {
    const userCheckInDetailID = cond.userCheckInDetailID;

    return new Promise((resolve, reject) => {
      const { dataCols, dataVals } =
        this.convertObjectToColValPlaceholders(data);
      let condition = "deviceUserCheckinDetailId = " + userCheckInDetailID;
      let query =
        "UPDATE DeviceUserCheckinDetails SET " +
        dataCols.join(" = ?,") +
        " = ? WHERE " +
        condition;

      this.dbQuery(query, dataVals)
        .then(async (res: any) => {
          //Get checkin details
          const checinDetailQuery =
            "SELECT * FROM DeviceUserCheckinDetails WHERE " + condition;
          // If user checkout then remove it from Evacuation list
          const checkinDetails: any = await this.dbQuery(checinDetailQuery);

          if (checkinDetails && checkinDetails.rows.length > 0) {
            const checkinDetail = this.convertToObject(checkinDetails.rows);

            let removeCondition = this.appendEntityCondition({
              inventoryItemID: checkinDetail.inventoryItemID,
              locationID: checkinDetail.locationID,
              projectID: checkinDetail.projectID,
            } as DeviceEntityDetail);

            if (checkinDetail.firstAndLastName) {
              removeCondition =
                removeCondition +
                ' AND firstAndLastName = "' +
                checkinDetail.firstAndLastName +
                '"';
            }
            let removeQuery =
              "DELETE from DeviceEvacuations WHERE " + removeCondition;
            this.dbQuery(removeQuery);
          }

          resolve(res);
        })
        .catch((error) => {
          reject(error);
        });
    });
  };
  insertCheckOutDetails_Guest = (data, cond: any = {}) => {
    const userCheckInDetailID = cond.userCheckInDetailID;

    return new Promise((resolve, reject) => {
      const { dataCols, dataVals } =
        this.convertObjectToColValPlaceholders(data);
      let condition = "deviceGuestUserCheckinDetailId = " + userCheckInDetailID;
      let query =
        "UPDATE DeviceGuestUserCheckinDetails SET " +
        dataCols.join(" = ?,") +
        " = ? WHERE " +
        condition;

      this.dbQuery(query, dataVals)
        .then(async (res: any) => {
          //Get checkin details
          const checinDetailQuery =
            "SELECT * FROM DeviceGuestUserCheckinDetails WHERE " + condition;
          // If user checkout then remove it from Evacuation list
          const checkinDetails: any = await this.dbQuery(checinDetailQuery);

          if (checkinDetails && checkinDetails.rows.length > 0) {
            const checkinDetail = this.convertToObject(checkinDetails.rows);

            let removeCondition = this.appendEntityCondition({
              inventoryItemID: checkinDetail.inventoryItemID,
              locationID: checkinDetail.locationID,
              projectID: checkinDetail.projectID,
            } as DeviceEntityDetail);

            const firstAndLastName =
              checkinDetail.guestFirsName +
              " " +
              (checkinDetail.guestMiddleName
                ? checkinDetail.guestMiddleName + " "
                : "") +
              checkinDetail.guestLastName;
            removeCondition =
              removeCondition +
              ' AND firstAndLastName = "' +
              firstAndLastName +
              '"';
            let removeQuery =
              "DELETE from DeviceEvacuations WHERE " + removeCondition;
            this.dbQuery(removeQuery);
          }

          resolve(res);
        })
        .catch((error) => {
          reject(error);
        });
    });
  };

  /********************************************************************************/
  /*****************************Get Offline Data For Post**************************/
  /********************************************************************************/

  shouldOnlyUseInOfflineMode = () => {
    const signOffQuery =
      "SELECT COUNT(signOffDetailId) as total_result FROM SignOffDetails";
    const checkinQuery =
      'SELECT COUNT(deviceUserCheckinDetailId)  as total_result FROM DeviceUserCheckinDetails WHERE isOfflineDone = true OR isOfflineDone = "true"';
    const guestCheckinQuery =
      'SELECT COUNT(deviceGuestUserCheckinDetailId)  as total_result FROM DeviceGuestUserCheckinDetails WHERE isOfflineDone = true OR isOfflineDone = "true"';

    return new Promise((resolve) => {
      this.dbQuery(signOffQuery)
        .then((res: any) => {
          const signOffRes = this.convertToObject(res.rows);
          if (signOffRes && signOffRes.total_result > 0) {
            resolve(true);
          } else {
            this.dbQuery(checkinQuery)
              .then((res1: any) => {
                const checkinRes = this.convertToObject(res1.rows);
                if (checkinRes && checkinRes.total_result > 0) {
                  resolve(true);
                } else {
                  this.dbQuery(guestCheckinQuery)
                    .then((res2: any) => {
                      const guestCheckinRes = this.convertToObject(res2.rows);
                      if (guestCheckinRes && guestCheckinRes.total_result > 0) {
                        resolve(true);
                      } else {
                        resolve(false);
                      }
                    })
                    .catch((error) => {
                      resolve(false);
                    });
                }
              })
              .catch((error) => {
                resolve(false);
              });
          }
        })
        .catch((error) => {
          debugger;
        });
    });
  };

  getAllFormSubmittedFiles = () => {
    return new Promise((resolve) => {
      const query = "SELECT * FROM ImageVideoFiles";
      this.dbQuery(query, [])
        .then((res: any) => {
          if (res.rows?.length > 0) {
            resolve(this.convertToArray(res.rows));
          } else {
            resolve([]);
          }
        })
        .catch((error) => {
          resolve([]);
        });
    });
  };

  getOfflineSubmittedFormData = (formSubmitDataId) => {
    return new Promise((resolve) => {
      const query =
        "SELECT * FROM FormSubmitData WHERE formSubmitDataId = " +
        formSubmitDataId;
      this.dbQuery(query, [])
        .then((res: any) => {
          if (res.rows?.length > 0) {
            resolve(this.convertToObject(res.rows));
          } else {
            resolve(null);
          }
        })
        .catch((error) => {
          resolve(null);
        });
    });
  };

  getOfflineSignoffDetails = () => {
    return new Promise((resolve) => {
      const query = "SELECT * FROM SignOffDetails";
      this.dbQuery(query, [])
        .then((res: any) => {
          if (res.rows?.length > 0) {
            resolve(this.convertToArray(res.rows));
          } else {
            resolve([]);
          }
        })
        .catch((error) => {
          resolve([]);
        });
    });
  };

  getOfflineUserCheckinDetails = () => {
    return new Promise((resolve) => {
      const query =
        "SELECT * FROM DeviceUserCheckinDetails WHERE " +
        this.emptyCond("userCheckInDetailID") +
        ' AND (isOfflineDone = true OR isOfflineDone = "true")';
      this.dbQuery(query, [])
        .then((res: any) => {
          if (res.rows?.length > 0) {
            resolve(this.convertToArray(res.rows));
          } else {
            resolve([]);
          }
        })
        .catch((error) => {
          resolve([]);
        });
    });
  };

  getOfflineGuestCheckinDetails = () => {
    return new Promise((resolve) => {
      const query =
        'SELECT * FROM DeviceGuestUserCheckinDetails WHERE isOfflineDone = true OR isOfflineDone = "true"';
      this.dbQuery(query, [])
        .then((res: any) => {
          if (res.rows?.length > 0) {
            resolve(this.convertToArray(res.rows));
          } else {
            resolve([]);
          }
        })
        .catch((error) => {
          resolve([]);
        });
    });
  };

  getOfflineUserCheckoutDetails = () => {
    return new Promise((resolve) => {
      const query =
        'SELECT * FROM DeviceUserCheckinDetails WHERE (isOfflineDone = true OR isOfflineDone = "true")  AND (checkOutDate IS NOT NULL AND checkOutDate != "" AND checkOutDate != "' +
        StaticDataService.userDefaultDate +
        '")';
      this.dbQuery(query, [])
        .then((res: any) => {
          if (res.rows?.length > 0) {
            resolve(this.convertToArray(res.rows));
          } else {
            resolve([]);
          }
        })
        .catch((error) => {
          resolve([]);
        });
    });
  };

  getOfflineGuestCheckoutDetails = () => {
    return new Promise((resolve) => {
      const query =
        'SELECT * FROM DeviceGuestUserCheckinDetails WHERE (isOfflineDone = true OR isOfflineDone = "true") AND (checkOutDate IS NOT NULL AND checkOutDate != "" AND checkOutDate != "' +
        StaticDataService.userDefaultDate +
        '")';
      this.dbQuery(query, [])
        .then((res: any) => {
          if (res.rows?.length > 0) {
            resolve(this.convertToArray(res.rows));
          } else {
            resolve([]);
          }
        })
        .catch((error) => {
          resolve([]);
        });
    });
  };

  replaceImageNameInFormData = (submittedFormData, uploadedFiles) => {
    if (submittedFormData) {
      try {
        submittedFormData.formattedSections?.map((section) => {
          section.answerData?.map((questionAsnwerObj) => {
            if (section.isAccidentReportSection) {
              if (questionAsnwerObj.answerData.accidentAttachmentFileId) {
                questionAsnwerObj.answerData["accidentAttachmentFileName"] =
                  uploadedFiles[
                    "imageVideoFileId_" +
                      questionAsnwerObj.answerData.accidentAttachmentFileId
                  ];

                delete questionAsnwerObj.answerData.accidentAttachmentFileId;
              }
              if (questionAsnwerObj.arAnswerData.accidentAttachmentFileId) {
                questionAsnwerObj.arAnswerData["accidentAttachmentFileName"] =
                  uploadedFiles[
                    "imageVideoFileId_" +
                      questionAsnwerObj.arAnswerData.accidentAttachmentFileId
                  ];
                delete questionAsnwerObj.arAnswerData.accidentAttachmentFileId;
              }
            } else {
              if (questionAsnwerObj.answerData.imageVideoFileId) {
                questionAsnwerObj.answerData["imageVideoFileName"] =
                  uploadedFiles[
                    "imageVideoFileId_" +
                      questionAsnwerObj.answerData.imageVideoFileId
                  ];
                delete questionAsnwerObj.answerData.imageVideoFileId;
              }
            }
          });
        });
      } catch (error) {}

      try {
        submittedFormData.accidentReportQuestionAnswers?.map(
          (questionAsnwerObj) => {
            if (questionAsnwerObj.accidentAttachmentFileId) {
              questionAsnwerObj["accidentAttachmentFileName"] =
                uploadedFiles[
                  "imageVideoFileId_" +
                    questionAsnwerObj.accidentAttachmentFileId
                ];
              delete questionAsnwerObj.accidentAttachmentFileId;
            }
          }
        );
      } catch (error) {}

      try {
        submittedFormData.questionAnswers?.map((questionAsnwerObj) => {
          if (questionAsnwerObj.imageVideoFileId) {
            questionAsnwerObj["imageVideoFileName"] =
              uploadedFiles[
                "imageVideoFileId_" + questionAsnwerObj.imageVideoFileId
              ];
            delete questionAsnwerObj.imageVideoFileId;
          }
          if (questionAsnwerObj.accidentAttachmentFileId) {
            questionAsnwerObj["accidentAttachmentFileName"] =
              uploadedFiles[
                "imageVideoFileId_" + questionAsnwerObj.accidentAttachmentFileId
              ];
            delete questionAsnwerObj.accidentAttachmentFileId;
          }
        });
      } catch (error) {}
    }
  };

  async prepareJsonFileForPost(deviceId, offlineApiService) {
    let postJsonFileData = {
      deviceID: deviceId,
      personalModeSignOffDetails: [],
      checkInDetails: [],
      checkInDetails_Guest: [],
      checkOutDetails: [],
      checkOutDetails_Guest: [],
    };
    let isDataAvailableForPost = false;

    return new Promise(async (resolve, reject) => {
      const uploadAllFormOfflineFile = async () => {
        // getAllFormSubmittedFiles
        const allFiles: any = await this.getAllFormSubmittedFiles();
        debugger;

        if (allFiles && allFiles.length > 0) {
          let convertedFileCount = 0;
          const formData = new FormData();
          allFiles.forEach(async (fileData: any) => {
            const offlineFileName = fileData.fileName;
            const offlineFileDirectory =
              this.filehandlerService.offlineFilesDirectory() +
              StaticDataService.offlineFilesFolderName +
              "/" +
              offlineFileName;

            const response = await fetch(
              Capacitor.convertFileSrc(offlineFileDirectory)
            );
            debugger;
            const blob = await response.blob();
            formData.append(
              "files",
              blob,
              fileData.imageVideoFileId + "|" + offlineFileName
            );
            convertedFileCount++;
            if (convertedFileCount === allFiles.length) {
              onAllBinaryToFileCoverted(formData);
            }

            // this.utilService
            //   .dataUriToFile(
            //     fileData.binaryFile,
            //     fileData.fileName,
            //     fileData.mimeType
            //   )
            //   .then((fileObj: any) => {
            //     if (fileObj) {
            //       formData.append(
            //         "files",
            //         fileObj,
            //         fileData.imageVideoFileId + "|" + fileData.fileName
            //       );
            //     }
            //     convertedFileCount++;
            //     if (convertedFileCount === allFiles.length) {
            //       onAllBinaryToFileCoverted(formData);
            //     }
            //   });
          });
        } else {
          getSignOffDetails();
        }
      };

      // Get all offline files for submitted form and
      const onAllBinaryToFileCoverted = (formData) => {
        offlineApiService.uploadMultipleFiles(formData).subscribe(
          (response: any) => {
            debugger;
            if (response.Result) {
              const uploadedFiles = response.Result;
              let uploadedFilesObj = {};
              if (uploadedFiles) {
                uploadedFiles.map((uploadedFileData) => {
                  const originalFileName = uploadedFileData.originalFileName;
                  const newFileName = uploadedFileData.newFileName;

                  const originalFileNameParts = originalFileName.split("|");
                  if (
                    originalFileNameParts &&
                    originalFileNameParts.length > 0
                  ) {
                    const imageVideoFileId = originalFileNameParts[0];
                    uploadedFilesObj["imageVideoFileId_" + imageVideoFileId] =
                      newFileName;
                  }
                });
              }

              getSignOffDetails(uploadedFilesObj);
            } else {
              getSignOffDetails();
            }
          },
          (error) => {
            debugger;
          }
        );
      };

      // getSignOffDetails
      const getSignOffDetails = async (uploadedFiles = {}) => {
        const signOffDetails: any = await this.getOfflineSignoffDetails();
        debugger;

        let signOffDetailsList = [];

        if (signOffDetails && signOffDetails.length > 0) {
          const addToSignOffDetailsList = (dataObj) => {
            const signOffObjectToBePost = {
              userId: dataObj.userId || "",
              activityIndividualID: dataObj.activityIndividualID || "",
              documentVersionID: dataObj.documentVersionID || "",
              formVersionID: dataObj.formVersionID || 0,
              locationID: dataObj.locationID || 0,
              projectID: dataObj.projectID || 0,
              inventoryItemID: dataObj.inventoryItemID || 0,
              latitude: dataObj.latitude || "",
              longitude: dataObj.longitude || "",
              documentID: dataObj.documentID || 0,
              userSignaturePhotoFileName: "",
              userSignaturePhotoBinaryFile: "",
              userSignaturePhoto:
                uploadedFiles[
                  "imageVideoFileId_" +
                    dataObj.userSignaturePhotoImageVideoFileId
                ] || "",
              digitalInkSignatureFileName: "",
              digitalInkSignatureBinaryFile: "",
              digitalInkSignature:
                uploadedFiles[
                  "imageVideoFileId_" +
                    dataObj.digitalInkSignatureImageVideoFileId
                ] || "",
              formAnswerData: dataObj.submittedFormData || "",
              signOffDate: dataObj.signOffDate || "",
            };
            signOffDetailsList.push(signOffObjectToBePost);

            if (signOffDetailsList.length === signOffDetails.length) {
              postJsonFileData.personalModeSignOffDetails = signOffDetailsList;
              isDataAvailableForPost = true;
              getUserCheckinDetails(uploadedFiles);
            }
          };

          signOffDetails.map((dataObj) => {
            if (dataObj.formSubmitDataId) {
              this.getOfflineSubmittedFormData(dataObj.formSubmitDataId).then(
                (submittedFormData: any) => {
                  this.replaceImageNameInFormData(
                    submittedFormData,
                    uploadedFiles
                  );
                  dataObj.submittedFormData = submittedFormData;
                  addToSignOffDetailsList(dataObj);
                }
              );
            } else {
              addToSignOffDetailsList(dataObj);
            }
          });
        } else {
          getUserCheckinDetails(uploadedFiles);
        }
      };

      // getUserCheckinDetails
      const getUserCheckinDetails = async (uploadedFiles) => {
        const checkinDetails: any = await this.getOfflineUserCheckinDetails();
        debugger;

        if (checkinDetails && checkinDetails.length > 0) {
          let checkinDetailsList = [];

          const addToCheckinDetailList = (obj) => {
            checkinDetailsList.push({
              userId: obj.userId || "",
              companyID: obj.companyID || 0,
              userPhotoFileName: "",
              userPhotoBinaryFile: "",
              userPhoto:
                uploadedFiles[
                  "imageVideoFileId_" + obj.userPhotoImageVideoFileId
                ] || "",
              locationID: obj.locationID || 0,
              projectID: obj.projectID || "",
              inventoryItemID: obj.inventoryItemID || "",
              checkInLatitude: obj.checkInLatitude || "",
              checkInLongitude: obj.checkInLongitude || "",
              digitalInkSignatureFileName: "",
              digitalInkSignatureBinaryFile: "",
              digitalInkSignature:
                uploadedFiles[
                  "imageVideoFileId_" + obj.digitalInkSignatureImageVideoFileId
                ] || "",
              userSignaturePhotoFileName: "",
              userSignaturePhotoBinaryFile: "",
              userSignaturePhoto:
                uploadedFiles[
                  "imageVideoFileId_" + obj.userSignaturePhotoImageVideoFileId
                ] || "",
              checkInDate: obj.checkInDate || "",
              formAnswerData: obj.formAnswerData || "",
              offlineUserCheckInDetailID: obj.deviceUserCheckinDetailId,
            });
            if (checkinDetails.length === checkinDetailsList.length) {
              postJsonFileData.checkInDetails = checkinDetailsList;
              isDataAvailableForPost = true;
              getGuestCheckinDetails(uploadedFiles);
            }
          };

          checkinDetails.map((checkinDetailObj) => {
            if (checkinDetailObj.formSubmitDataId) {
              this.getOfflineSubmittedFormData(
                checkinDetailObj.formSubmitDataId
              ).then((submittedFormData: any) => {
                this.replaceImageNameInFormData(
                  submittedFormData,
                  uploadedFiles
                );
                checkinDetailObj.formAnswerData = submittedFormData;
                addToCheckinDetailList(checkinDetailObj);
              });
            } else {
              addToCheckinDetailList(checkinDetailObj);
            }
          });
        } else {
          getGuestCheckinDetails(uploadedFiles);
        }
      };

      // getGuestCheckinDetails
      const getGuestCheckinDetails = async (uploadedFiles) => {
        const checkinDetails: any = await this.getOfflineGuestCheckinDetails();
        debugger;

        if (checkinDetails && checkinDetails.length > 0) {
          let checkinDetailsList = [];

          const addToCheckinDetailList = (obj) => {
            checkinDetailsList.push({
              companyID: obj.companyID || 0,
              userPhotoFileName: "",
              userPhotoBinaryFile: "",
              userPhoto:
                uploadedFiles[
                  "imageVideoFileId_" + obj.userPhotoImageVideoFileId
                ] || "",
              locationID: obj.locationID || 0,
              projectID: obj.projectID || 0,
              inventoryItemID: obj.inventoryItemID || 0,
              checkInLatitude: obj.checkInLatitude || "",
              checkInLongitude: obj.checkInLongitude || "",
              isGuestReturning: obj.isGuestReturning || false,
              guestPhone: obj.guestPhone || "",
              guestFirsName: obj.guestFirsName || "",
              guestMiddleName: obj.guestMiddleName || "",
              guestLastName: obj.guestLastName || "",
              guestPhotoFileName: "",
              guestPhotoBinaryFile: "",
              guestPhoto:
                uploadedFiles[
                  "imageVideoFileId_" + obj.guestPhotoImageVideoFileId
                ] || "",
              digitalInkSignatureFileName: "",
              digitalInkSignatureBinaryFile: "",
              digitalInkSignature:
                uploadedFiles[
                  "imageVideoFileId_" + obj.digitalInkSignatureImageVideoFileId
                ] || "",
              userSignaturePhotoFileName: "",
              userSignaturePhotoBinaryFile: "",
              userSignaturePhoto:
                uploadedFiles[
                  "imageVideoFileId_" + obj.userSignaturePhotoImageVideoFileId
                ] || "",
              checkInDate: obj.checkInDate || "",
              formAnswerData: obj.formAnswerData || "",
              offlineUserCheckInDetailID: obj.deviceGuestUserCheckinDetailId,
            });
            if (checkinDetails.length === checkinDetailsList.length) {
              postJsonFileData.checkInDetails_Guest = checkinDetailsList;
              isDataAvailableForPost = true;
              getUserCheckoutDetails();
            }
          };

          checkinDetails.map((checkinDetailObj) => {
            if (checkinDetailObj.formSubmitDataId) {
              this.getOfflineSubmittedFormData(
                checkinDetailObj.formSubmitDataId
              ).then((submittedFormData: any) => {
                this.replaceImageNameInFormData(
                  submittedFormData,
                  uploadedFiles
                );
                checkinDetailObj.formAnswerData = submittedFormData;
                addToCheckinDetailList(checkinDetailObj);
              });
            } else {
              addToCheckinDetailList(checkinDetailObj);
            }
          });
        } else {
          getUserCheckoutDetails();
        }
      };

      // getUserCheckinDetails
      const getUserCheckoutDetails = async () => {
        const checkoutDetails: any = await this.getOfflineUserCheckoutDetails();
        debugger;
        if (checkoutDetails && checkoutDetails.length > 0) {
          let checkoutDetailsList = [];
          checkoutDetails.map((obj) => {
            checkoutDetailsList.push({
              userCheckInDetailID: obj.userCheckInDetailID || 0,
              userId: obj.userId || "",
              companyID: obj.companyID || 0,
              checkOutLatitude: obj.checkOutLatitude || "",
              checkOutLongitude: obj.checkOutLongitude || "",
              checkOutDate: obj.checkOutDate || "",
              locationID: obj.locationID || 0,
              projectID: obj.projectID || 0,
              inventoryItemID: obj.inventoryItemID || 0,
              offlineUserCheckInDetailID: obj.deviceUserCheckinDetailId,
            });
          });
          postJsonFileData.checkOutDetails = checkoutDetailsList;
          isDataAvailableForPost = true;
          getGuestCheckoutDetails();
        } else {
          getGuestCheckoutDetails();
        }
      };

      // getGuestCheckinDetails
      const getGuestCheckoutDetails = async () => {
        const checkoutDetails: any =
          await this.getOfflineGuestCheckoutDetails();
        debugger;
        if (checkoutDetails && checkoutDetails.length > 0) {
          let checkoutDetailsList = [];
          checkoutDetails.map((obj) => {
            checkoutDetailsList.push({
              userCheckInDetailID: obj.userCheckInDetailID || 0,
              locationID: obj.locationID || 0,
              projectID: obj.projectID || 0,
              inventoryItemID: obj.inventoryItemID || 0,
              userId: obj.userId || "",
              companyID: obj.companyID || 0,
              guestPhone: obj.guestPhone || "",
              guestFirsName: obj.guestFirsName || "",
              guestMiddleName: obj.guestMiddleName || "",
              guestLastName: obj.guestLastName || "",
              checkOutLatitude: obj.checkOutLatitude || "",
              checkOutLongitude: obj.checkOutLongitude || "",
              checkOutDate: obj.checkOutDate || "",
              offlineUserCheckInDetailID: obj.deviceGuestUserCheckinDetailId,
            });
          });
          postJsonFileData.checkOutDetails_Guest = checkoutDetailsList;
          isDataAvailableForPost = true;
          onJsonFileDataInsertionComplete();
        } else {
          onJsonFileDataInsertionComplete();
        }
      };

      // When all operation done for offline json file post insertion
      const onJsonFileDataInsertionComplete = () => {
        if (isDataAvailableForPost) {
          resolve(postJsonFileData);
        } else {
          resolve(null);
        }
      };

      uploadAllFormOfflineFile();
    });
  }
}
