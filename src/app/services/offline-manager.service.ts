import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { UtilService } from './util.service';
import { StaticDataService } from './static-data.service';
import { DeviceOfflineDetailViewModels } from '../_models/offline/DeviceOfflineDetailViewModels';
import { DeviceArchivedWorkPermitDetail } from '../_models/offline/DeviceArchivedWorkPermitDetail';
import { DeviceArchivedDocumentDetail } from '../_models/offline/DeviceArchivedDocumentDetail';
import { DeviceCompanyUserDetail } from '../_models/offline/DeviceCompanyUserDetail';
import { DeviceEntityData } from '../_models/offline/DeviceEntityData';
import { DeviceUserDetail } from '../_models/offline/DeviceUserDetail';
import { DeviceUserQualificationDetail } from '../_models/offline/DeviceUserQualificationDetail';
import { DeviceGuestUserDetail } from '../_models/offline/DeviceGuestUserDetail';
import { DeviceAvailableDocumentDetail } from '../_models/offline/DeviceAvailableDocumentDetail';
import { DeviceAvailableFormDetail } from '../_models/offline/DeviceAvailableFormDetail';
import { DeviceArchivedFormDetail } from '../_models/offline/DeviceArchivedFormDetail';
import { DeviceAvailableWorkPermitDetail } from '../_models/offline/DeviceAvailableWorkPermitDetail';
import { DeviceLiveWorkPermitDetail } from '../_models/offline/DeviceLiveWorkPermitDetail';
import { DeviceFormDetail } from '../_models/offline/DeviceFormDetail';
import { DeviceFormAttachmentDetail } from '../_models/offline/DeviceFormAttachmentDetail';
import { DeviceEvacuationDetail } from '../_models/offline/DeviceEvacuationDetail';
import { DeviceUserCheckInQualificationDetail } from '../_models/offline/DeviceUserCheckInQualificationDetail';
import { DeviceLocationDetail } from '../_models/offline/DeviceLocationDetail';
import { DeviceProjectDetail } from '../_models/offline/DeviceProjectDetail';
import { DeviceInventoryItemDetail } from '../_models/offline/DeviceInventoryItemDetail';
import { DeviceUserCheckinDetail } from '../_models/offline/DeviceUserCheckinDetail';
import { DeviceCheckInInductionDetail } from '../_models/offline/DeviceCheckInInductionDetail';
import { DeviceCheckInInductionItemDetail } from '../_models/offline/DeviceCheckInInductionItemDetail';
import { DeviceGuestUserCheckinDetail } from '../_models/offline/DeviceGuestUserCheckinDetail';
import { DeviceCheckInGuestInductionDetail } from '../_models/offline/DeviceCheckInGuestInductionDetail';
import { DeviceCheckInGuestInductionItemDetail } from '../_models/offline/DeviceCheckInGuestInductionItemDetail';
import { DeviceCompanyUserGroupDetail } from '../_models/offline/DeviceCompanyUserGroupDetail';
import { DeviceHAVManufacturerDetail } from '../_models/offline/DeviceHAVManufacturerDetail';
import { DeviceHAVTypeDetail } from '../_models/offline/DeviceHAVTypeDetail';
import { DeviceHAVModelDetail } from '../_models/offline/DeviceHAVModelDetail';
import { DeviceRiskItemDetail } from '../_models/offline/DeviceRiskItemDetail';
import { DeviceHazardItemDetail } from '../_models/offline/DeviceHazardItemDetail';
import { SharedDataService } from './shared-data.service';

declare var window: any;

@Injectable({
	providedIn: 'root',
})
export class OfflineManagerService {
	private dbInstance: SQLiteObject;
	readonly db_name: string = 'compliancegenie.db';
	readonly db_table: string = 'userTable';

	constructor(private platform: Platform, private sqlite: SQLite, private sharedDataService: SharedDataService) {
		this.dbSetUp();
	}

	public dbSetUp() {
		if (UtilService.isLocalHost()) {
			this.dbInstance = window.openDatabase(this.db_name, '1.0', 'My WebSQL Database', 2 * 1024 * 1024);
			this.createTables();
		} else {
			this.platform.ready().then(() => {
				this.sqlite
					.create({
						name: this.db_name,
						location: 'default',
					})
					.then((sqLite: SQLiteObject) => {
						this.dbInstance = sqLite;
						this.createTables();
					})
					.catch((error) => alert(JSON.stringify(error)));
			});
		}
	}

	dbQuery = (sql: any, values?: any) => {
		return new Promise((resolve, reject) => {
			if (!UtilService.isLocalHost()) {
				this.dbInstance.executeSql(sql, values).then(
					(response: any) => {
						resolve(response);
					},
					(err) => {
						reject(err);
					}
				);
			} else {
				this.dbInstance.transaction((tx) => {
					tx.executeSql(
						sql,
						[],
						(tx, results) => {
							resolve(results);
						},
						(tx, err) => {
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
					columnsList.push(item.name + ' ' + item.type);
				});

				let query = 'CREATE TABLE IF NOT EXISTS ' + data.table_name + ' (' + columnsList.join(', ') + ')';

				this.dbQuery(query, {}).then(
					(response: any) => {},
					(err) => {
						console.error(data.table_name + ' Unable to execute sql: ', err);
					}
				);
			}
		});
	};

	/**
	 *
	 * @param table DB table name
	 * @param data Data objects to be inserted
	 * @param condition Insert data if condition not match
	 */
	insertData = (table, data = {}, condition = {}) => {
		let dataCols = [];
		let dataVals = [];
		Object.keys(data).map((colName) => {
			const val = data[colName];
			if (val != null) {
				dataCols.push(colName);
				if (UtilService.isArray(val)) {
					dataVals.push('"' + JSON.stringify(val) + '"');
				} else if (typeof val === 'string') {
					dataVals.push('"' + val + '"');
				} else {
					dataVals.push(val);
				}
			}
		});

		let condCols = [];
		Object.keys(condition).map((colName) => {
			const val = condition[colName];
			if (val != null) {
				let condState = colName + ' = ';
				if (typeof val === 'string') {
					condState = condState + '"' + val + '"';
				} else {
					condState = condState + '' + val;
				}
				condCols.push(condState);
			}
		});
		let query = 'INSERT INTO ' + table + ' (' + dataCols.join(',') + ') select ' + dataVals.join(',') + '';
		if (condCols.length > 0) {
			query = query + ' WHERE NOT EXISTS(SELECT 1 FROM ' + table + ' WHERE ' + condCols.join(' AND ') + ')';
		}

		return this.dbQuery(query, []);
	};

	insertOfflineData = async (offlineData: DeviceOfflineDetailViewModels, callBack) => {
		// deviceDetailData
		const deviceDetailData = offlineData.deviceDetailData;
		const condition: any = { companyID: deviceDetailData.companyID, deviceID: deviceDetailData.deviceID };
		await this.insertData('DeviceDetails', deviceDetailData, condition);

		// deviceEntityData
		const deviceEntityData = offlineData.deviceEntityData;
		if (deviceEntityData) {
			for (let index = 0; index < deviceEntityData.length; index++) {
				const value: DeviceEntityData = deviceEntityData[index];
				const condition: any = { deviceEntityID: value.deviceEntityID, deviceID: value.deviceID };
				await this.insertData('DeviceEntities', value, condition);
			}
		}

		// deviceUserList
		const deviceUserList = offlineData.deviceUserList;
		if (deviceUserList) {
			for (let index = 0; index < deviceUserList.length; index++) {
				const value: DeviceUserDetail = deviceUserList[index];
				const condition: any = { userId: value.userId, companyID: value.companyID };
				await this.insertData('DeviceUsers', value, condition);
			}
		}

		// deviceUserQualificationList
		const deviceUserQualificationList = offlineData.deviceUserQualificationList;
		if (deviceUserQualificationList) {
			for (let index = 0; index < deviceUserQualificationList.length; index++) {
				const value: DeviceUserQualificationDetail = deviceUserQualificationList[index];
				const condition: any = {};
				await this.insertData('DeviceUserQualifications', value, condition);
			}
		}

		// deviceGuestUserList
		const deviceGuestUserList = offlineData.deviceGuestUserList;
		if (deviceGuestUserList) {
			for (let index = 0; index < deviceGuestUserList.length; index++) {
				const value: DeviceGuestUserDetail = deviceGuestUserList[index];
				const condition: any = { guestPhone: value.guestPhone };
				await this.insertData('DeviceGuestUsers', value, condition);
			}
		}

		// deviceAvailableDocumentList
		const deviceAvailableDocumentList = offlineData.deviceAvailableDocumentList;
		if (deviceAvailableDocumentList) {
			for (let index = 0; index < deviceAvailableDocumentList.length; index++) {
				const value: DeviceAvailableDocumentDetail = deviceAvailableDocumentList[index];
				const condition: any = {
					documentID: value.documentID,
					folderID: value.folderID,
					documentVersionID: value.documentVersionID,
				};
				if (value.locationID > 0) {
					condition.locationID = value.locationID;
				} else if (value.projectID > 0) {
					condition.projectID = value.projectID;
				} else if (value.inventoryItemID > 0) {
					condition.inventoryItemID = value.inventoryItemID;
				}
				await this.insertData('DeviceAvailableDocuments', value, condition);
			}
		}

		// deviceArchivedDocumentList
		const deviceArchivedDocumentList = offlineData.deviceArchivedDocumentList;
		if (deviceArchivedDocumentList) {
			for (let index = 0; index < deviceArchivedDocumentList.length; index++) {
				const value: DeviceArchivedDocumentDetail = deviceArchivedDocumentList[index];
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
				await this.insertData('DeviceArchivedDocuments', value, condition);
			}
		}

		// deviceAvailableFormList
		const deviceAvailableFormList = offlineData.deviceAvailableFormList;
		if (deviceAvailableFormList) {
			for (let index = 0; index < deviceAvailableFormList.length; index++) {
				const value: DeviceAvailableFormDetail = deviceAvailableFormList[index];
				const condition: any = {
					formID: value.formID,
					formFolderID: value.formFolderID,
					formVersionID: value.formVersionID,
				};
				if (value.locationID > 0) {
					condition.locationID = value.locationID;
				} else if (value.projectID > 0) {
					condition.projectID = value.projectID;
				} else if (value.inventoryItemID > 0) {
					condition.inventoryItemID = value.inventoryItemID;
				}
				await this.insertData('DeviceAvailableForms', value, condition);
			}
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
				await this.insertData('DeviceArchivedForms', value, condition);
			}
		}

		// deviceAvailableWorkPermitList
		const deviceAvailableWorkPermitList = offlineData.deviceAvailableWorkPermitList;
		if (deviceAvailableWorkPermitList) {
			for (let index = 0; index < deviceAvailableWorkPermitList.length; index++) {
				const value: DeviceAvailableWorkPermitDetail = deviceAvailableWorkPermitList[index];
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
				await this.insertData('DeviceAvailableWorkPermits', value, condition);
			}
		}

		// deviceLiveWorkPermitList
		const deviceLiveWorkPermitList = offlineData.deviceLiveWorkPermitList;
		if (deviceLiveWorkPermitList) {
			for (let index = 0; index < deviceLiveWorkPermitList.length; index++) {
				const value: DeviceLiveWorkPermitDetail = deviceLiveWorkPermitList[index];
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
				await this.insertData('DeviceLiveWorkPermits', value, condition);
			}
		}

		// deviceArchivedWorkPermitList
		const deviceArchivedWorkPermitList = offlineData.deviceArchivedWorkPermitList;
		if (deviceArchivedWorkPermitList) {
			for (let index = 0; index < deviceArchivedWorkPermitList.length; index++) {
				const value: DeviceArchivedWorkPermitDetail = deviceArchivedWorkPermitList[index];
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
				await this.insertData('DeviceArchivedWorkPermits', value, condition);
			}
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
				await this.insertData('DeviceFormDetails', value, condition);
			}
		}

		// deviceFormAttachmentList
		const deviceFormAttachmentList = offlineData.deviceFormAttachmentList;
		if (deviceFormAttachmentList) {
			for (let index = 0; index < deviceFormAttachmentList.length; index++) {
				const value: DeviceFormAttachmentDetail = deviceFormAttachmentList[index];

				const condition: any = {
					formID: value.formID,
					documentID: value.documentID,
				};

				await this.insertData('DeviceFormAttachments', value, condition);
			}
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
				await this.insertData('DeviceEvacuations', value, condition);
			}
		}

		// deviceUserCheckInQualificationList
		const deviceUserCheckInQualificationList = offlineData.deviceUserCheckInQualificationList;
		if (deviceUserCheckInQualificationList) {
			for (let index = 0; index < deviceUserCheckInQualificationList.length; index++) {
				const value: DeviceUserCheckInQualificationDetail = deviceUserCheckInQualificationList[index];

				const condition: any = {
					qualificationID: value.qualificationID,
				};

				await this.insertData('DeviceUserCheckInQualifications', value, condition);
			}
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
				await this.insertData('DeviceLocations', value, condition);
			}
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
				await this.insertData('DeviceProjects', value, condition);
			}
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
				await this.insertData('DeviceInventoryItems', value, condition);
			}
		}

		// deviceUserCheckinDetailList
		const deviceUserCheckinDetailList = offlineData.deviceUserCheckinDetailList;
		if (deviceUserCheckinDetailList) {
			for (let index = 0; index < deviceUserCheckinDetailList.length; index++) {
				const value: DeviceUserCheckinDetail = deviceUserCheckinDetailList[index];
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
				await this.insertData('DeviceUserCheckinDetails', value, condition);
			}
		}

		// deviceCheckInInductionList
		const deviceCheckInInductionList = offlineData.deviceCheckInInductionList;
		if (deviceCheckInInductionList) {
			for (let index = 0; index < deviceCheckInInductionList.length; index++) {
				const value: DeviceCheckInInductionDetail = deviceCheckInInductionList[index];
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
				await this.insertData('DeviceCheckInInductions', value, condition);
			}
		}

		// deviceCheckInInductionItemList
		const deviceCheckInInductionItemList = offlineData.deviceCheckInInductionItemList;
		if (deviceCheckInInductionItemList) {
			for (let index = 0; index < deviceCheckInInductionItemList.length; index++) {
				const value: DeviceCheckInInductionItemDetail = deviceCheckInInductionItemList[index];
				const condition: any = {
					checkInInductionID: value.checkInInductionID,
					checkInInductionItemID: value.checkInInductionItemID,
					documentID: value.documentID,
					formID: value.formID,
				};
				await this.insertData('DeviceCheckInInductionItems', value, condition);
			}
		}

		// deviceGuestUserCheckinDetailList
		const deviceGuestUserCheckinDetailList = offlineData.deviceGuestUserCheckinDetailList;
		if (deviceGuestUserCheckinDetailList) {
			for (let index = 0; index < deviceGuestUserCheckinDetailList.length; index++) {
				const value: DeviceGuestUserCheckinDetail = deviceGuestUserCheckinDetailList[index];
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
				await this.insertData('DeviceGuestUserCheckinDetails', value, condition);
			}
		}

		// deviceCheckInGuestInductionList
		const deviceCheckInGuestInductionList = offlineData.deviceCheckInGuestInductionList;
		if (deviceCheckInGuestInductionList) {
			for (let index = 0; index < deviceCheckInGuestInductionList.length; index++) {
				const value: DeviceCheckInGuestInductionDetail = deviceCheckInGuestInductionList[index];
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
				await this.insertData('DeviceCheckInGuestInductions', value, condition);
			}
		}

		// deviceCheckInGuestInductionItemList
		const deviceCheckInGuestInductionItemList = offlineData.deviceCheckInGuestInductionItemList;
		if (deviceCheckInGuestInductionItemList) {
			for (let index = 0; index < deviceCheckInGuestInductionItemList.length; index++) {
				const value: DeviceCheckInGuestInductionItemDetail = deviceCheckInGuestInductionItemList[index];

				const condition: any = {
					checkInInductionGuestID: value.checkInInductionGuestID,
					checkInInductionGuestItemID: value.checkInInductionGuestItemID,
					documentID: value.documentID,
					formID: value.formID,
				};

				await this.insertData('DeviceCheckInGuestInductionItems', value, condition);
			}
		}

		// deviceCompanyUserList
		const deviceCompanyUserList = offlineData.deviceCompanyUserList;
		if (deviceCompanyUserList) {
			for (let index = 0; index < deviceCompanyUserList.length; index++) {
				const value: DeviceCompanyUserDetail = deviceCompanyUserList[index];
				const condition: any = {
					userId: value.userId,
				};
				await this.insertData('DeviceCompanyUsers', value, condition);
			}
		}

		// deviceCompanyUserGroupList
		const deviceCompanyUserGroupList = offlineData.deviceCompanyUserGroupList;
		if (deviceCompanyUserGroupList) {
			for (let index = 0; index < deviceCompanyUserGroupList.length; index++) {
				const value: DeviceCompanyUserGroupDetail = deviceCompanyUserGroupList[index];
				const condition: any = {
					userGroupID: value.userGroupID,
				};
				await this.insertData('DeviceCompanyUserGroups', value, condition);
			}
		}

		// deviceHAVManufacturerList
		const deviceHAVManufacturerList = offlineData.deviceHAVManufacturerList;
		if (deviceHAVManufacturerList) {
			for (let index = 0; index < deviceHAVManufacturerList.length; index++) {
				const value: DeviceHAVManufacturerDetail = deviceHAVManufacturerList[index];
				const condition: any = {
					companyID: value.companyID,
					havManufacturerID: value.havManufacturerID,
				};
				await this.insertData('DeviceHAVManufacturers', value, condition);
			}
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
				await this.insertData('DeviceHAVTypes', value, condition);
			}
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
				await this.insertData('DeviceHAVModels', value, condition);
			}
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
				await this.insertData('DeviceRiskItems', value, condition);
			}
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
				await this.insertData('DeviceHazardItems', value, condition);
			}
		}

		callBack && callBack();
	};

	appendEntityCondition = () => {
		if (this.sharedDataService.dedicatedModeLocationUse?.projectID) {
			return 'projectID = ' + this.sharedDataService.dedicatedModeLocationUse?.projectID;
		} else if (this.sharedDataService.dedicatedModeLocationUse?.locationID) {
			return 'locationID = ' + this.sharedDataService.dedicatedModeLocationUse?.locationID;
		} else if (this.sharedDataService.dedicatedModeLocationUse?.inventoryItemID) {
			return 'inventoryItemID = ' + this.sharedDataService.dedicatedModeLocationUse?.inventoryItemID;
		}
	};
	/****Get data from db*****/

	getAssignedEnitities() {
		return new Promise((resolve, reject) => {
			const query = 'SELECT * FROM DeviceEntities';
			this.dbQuery(query, [])
				.then((res: any) => {
					if (res.rows?.length > 0) {
						resolve(res.rows);
					} else {
						reject(new Error('No entities found'));
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
			const query = 'SELECT * FROM DeviceDetails';
			this.dbQuery(query, [])
				.then((res: any) => {
					if (res.rows?.length > 0) {
						resolve(res.rows[0]);
					} else {
						resolve(null);
					}
				})
				.catch((error) => {
					reject(error);
				});
		});
	}

	getAvailableDocuments(folderId) {
		return new Promise((resolve, reject) => {
			let condition = this.appendEntityCondition();
			if (folderId) {
				condition = condition + ' AND folderID=' + folderId;
			}
			const query = 'SELECT * FROM DeviceAvailableDocuments' + (condition ? ' WHERE ' + condition : '');
			this.dbQuery(query, [])
				.then((res: any) => {
					if (res.rows?.length > 0) {
						resolve(res.rows);
					} else {
						resolve([]);
					}
				})
				.catch((error) => {
					reject(error);
				});
		});
	}

	getArchivedDocuments() {
		return new Promise((resolve, reject) => {
			let condition = this.appendEntityCondition();

			const query = 'SELECT * FROM DeviceArchivedDocuments' + (condition ? ' WHERE ' + condition : '');
			this.dbQuery(query, [])
				.then((res: any) => {
					if (res.rows?.length > 0) {
						resolve(res.rows);
					} else {
						resolve([]);
					}
				})
				.catch((error) => {
					reject(error);
				});
		});
	}
}
