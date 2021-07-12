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

declare var window: any;

@Injectable({
	providedIn: 'root',
})
export class OfflineManagerService {
	private dbInstance: SQLiteObject;
	readonly db_name: string = 'compliancegenie.db';
	readonly db_table: string = 'userTable';

	constructor(private platform: Platform, private sqlite: SQLite, private utilService: UtilService) {
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
					(response: any) => {
						console.log(data.table_name + ' Table Created ', response);
					},
					(err) => {
						console.error(data.table_name + ' Unable to execute sql: ', err);
					}
				);
			}
		});
	};

	insertData = (table, data, condition = {}) => {
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

		this.dbQuery(query, [])
			.then((res) => {})
			.catch((error) => {});
	};

	insertOfflineData = (offlineData: DeviceOfflineDetailViewModels) => {
		// deviceDetailData
		const deviceDetailData = offlineData.deviceDetailData;
		const condition: any = { companyID: deviceDetailData.companyID, deviceID: deviceDetailData.deviceID };
		this.insertData('DeviceDetails', deviceDetailData, condition);

		// deviceEntityData
		const deviceEntityData = offlineData.deviceEntityData;
		if (deviceEntityData) {
			deviceEntityData.map((value: DeviceEntityData) => {
				const condition: any = { deviceEntityID: value.deviceEntityID, deviceID: value.deviceID };
				this.insertData('DeviceEntities', value, condition);
			});
		}

		// deviceUserList
		const deviceUserList = offlineData.deviceUserList;
		if (deviceUserList) {
			deviceUserList.map((value: DeviceUserDetail) => {
				this.insertData('DeviceUsers', value);
			});
		}

		// deviceUserQualificationList
		const deviceUserQualificationList = offlineData.deviceUserQualificationList;
		if (deviceUserQualificationList) {
			deviceUserQualificationList.map((value: DeviceUserQualificationDetail) => {
				this.insertData('DeviceUserQualifications', value);
			});
		}

		// deviceGuestUserList
		const deviceGuestUserList = offlineData.deviceGuestUserList;
		if (deviceGuestUserList) {
			deviceGuestUserList.map((value: DeviceGuestUserDetail) => {
				this.insertData('DeviceGuestUsers', value);
			});
		}

		// deviceAvailableDocumentList
		const deviceAvailableDocumentList = offlineData.deviceAvailableDocumentList;
		if (deviceAvailableDocumentList) {
			deviceAvailableDocumentList.map((value: DeviceAvailableDocumentDetail) => {
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

				this.insertData('DeviceAvailableDocuments', value, condition);
			});
		}

		// deviceArchivedDocumentList
		const deviceArchivedDocumentList = offlineData.deviceArchivedDocumentList;
		if (deviceArchivedDocumentList) {
			deviceArchivedDocumentList.map((value: DeviceArchivedDocumentDetail) => {
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

				this.insertData('DeviceArchivedDocuments', value, condition);
			});
		}

		// deviceAvailableFormList
		const deviceAvailableFormList = offlineData.deviceAvailableFormList;
		if (deviceAvailableFormList) {
			deviceAvailableFormList.map((value: DeviceAvailableFormDetail) => {
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
				this.insertData('DeviceAvailableForms', value, condition);
			});
		}

		// deviceArchivedFormList
		const deviceArchivedFormList = offlineData.deviceArchivedFormList;
		if (deviceArchivedFormList) {
			deviceArchivedFormList.map((value: DeviceArchivedFormDetail) => {
				this.insertData('DeviceArchivedForms', value);
			});
		}

		// deviceAvailableWorkPermitList
		const deviceAvailableWorkPermitList = offlineData.deviceAvailableWorkPermitList;
		if (deviceAvailableWorkPermitList) {
			deviceAvailableWorkPermitList.map((value: DeviceAvailableWorkPermitDetail) => {
				this.insertData('DeviceAvailableWorkPermits', value);
			});
		}

		// deviceLiveWorkPermitList
		const deviceLiveWorkPermitList = offlineData.deviceLiveWorkPermitList;
		if (deviceLiveWorkPermitList) {
			deviceLiveWorkPermitList.map((value: DeviceLiveWorkPermitDetail) => {
				this.insertData('DeviceLiveWorkPermits', value);
			});
		}

		// deviceArchivedWorkPermitList
		const deviceArchivedWorkPermitList = offlineData.deviceArchivedWorkPermitList;
		if (deviceArchivedWorkPermitList) {
			deviceArchivedWorkPermitList.map((value: DeviceArchivedWorkPermitDetail) => {
				this.insertData('DeviceArchivedWorkPermits', value);
			});
		}

		// deviceFormDetailsList
		const deviceFormDetailsList = offlineData.deviceFormDetailsList;
		if (deviceFormDetailsList) {
			deviceFormDetailsList.map((value: DeviceFormDetail) => {
				this.insertData('DeviceFormDetails', value);
			});
		}

		// deviceFormAttachmentList
		const deviceFormAttachmentList = offlineData.deviceFormAttachmentList;
		if (deviceFormAttachmentList) {
			deviceFormAttachmentList.map((value: DeviceFormAttachmentDetail) => {
				this.insertData('DeviceFormAttachments', value);
			});
		}

		// deviceEvacuationList
		const deviceEvacuationList = offlineData.deviceEvacuationList;
		if (deviceEvacuationList) {
			deviceEvacuationList.map((value: DeviceEvacuationDetail) => {
				this.insertData('DeviceEvacuations', value);
			});
		}

		// deviceUserCheckInQualificationList
		const deviceUserCheckInQualificationList = offlineData.deviceUserCheckInQualificationList;
		if (deviceUserCheckInQualificationList) {
			deviceUserCheckInQualificationList.map((value: DeviceUserCheckInQualificationDetail) => {
				this.insertData('DeviceUserCheckInQualifications', value);
			});
		}

		// deviceLocationList
		const deviceLocationList = offlineData.deviceLocationList;
		if (deviceLocationList) {
			deviceLocationList.map((value: DeviceLocationDetail) => {
				this.insertData('DeviceLocations', value);
			});
		}

		// deviceProjectList
		const deviceProjectList = offlineData.deviceProjectList;
		if (deviceProjectList) {
			deviceProjectList.map((value: DeviceProjectDetail) => {
				this.insertData('DeviceProjects', value);
			});
		}

		// deviceInventoryItemList
		const deviceInventoryItemList = offlineData.deviceInventoryItemList;
		if (deviceInventoryItemList) {
			deviceInventoryItemList.map((value: DeviceInventoryItemDetail) => {
				this.insertData('DeviceInventoryItems', value);
			});
		}

		// deviceUserCheckinDetailList
		const deviceUserCheckinDetailList = offlineData.deviceUserCheckinDetailList;
		if (deviceUserCheckinDetailList) {
			deviceUserCheckinDetailList.map((value: DeviceUserCheckinDetail) => {
				this.insertData('DeviceUserCheckinDetails', value);
			});
		}

		// deviceCheckInInductionList
		const deviceCheckInInductionList = offlineData.deviceCheckInInductionList;
		if (deviceCheckInInductionList) {
			deviceCheckInInductionList.map((value: DeviceCheckInInductionDetail) => {
				this.insertData('DeviceCheckInInductions', value);
			});
		}

		// deviceCheckInInductionItemList
		const deviceCheckInInductionItemList = offlineData.deviceCheckInInductionItemList;
		if (deviceCheckInInductionItemList) {
			deviceCheckInInductionItemList.map((value: DeviceCheckInInductionItemDetail) => {
				this.insertData('DeviceCheckInInductionItems', value);
			});
		}

		// deviceGuestUserCheckinDetailList
		const deviceGuestUserCheckinDetailList = offlineData.deviceGuestUserCheckinDetailList;
		if (deviceGuestUserCheckinDetailList) {
			deviceGuestUserCheckinDetailList.map((value: DeviceGuestUserCheckinDetail) => {
				this.insertData('DeviceGuestUserCheckinDetails', value);
			});
		}

		// deviceCheckInGuestInductionList
		const deviceCheckInGuestInductionList = offlineData.deviceCheckInGuestInductionList;
		if (deviceCheckInGuestInductionList) {
			deviceCheckInGuestInductionList.map((value: DeviceCheckInGuestInductionDetail) => {
				this.insertData('DeviceCheckInGuestInductions', value);
			});
		}

		// deviceCheckInGuestInductionItemList
		const deviceCheckInGuestInductionItemList = offlineData.deviceCheckInGuestInductionItemList;
		if (deviceCheckInGuestInductionItemList) {
			deviceCheckInGuestInductionItemList.map((value: DeviceCheckInGuestInductionItemDetail) => {
				this.insertData('DeviceCheckInGuestInductionItems', value);
			});
		}

		// deviceCompanyUserList
		const deviceCompanyUserList = offlineData.deviceCompanyUserList;
		if (deviceCompanyUserList) {
			deviceCompanyUserList.map((value: DeviceCompanyUserDetail) => {
				this.insertData('DeviceCompanyUsers', value);
			});
		}

		// deviceCompanyUserGroupList
		const deviceCompanyUserGroupList = offlineData.deviceCompanyUserGroupList;
		if (deviceCompanyUserGroupList) {
			deviceCompanyUserGroupList.map((value: DeviceCompanyUserGroupDetail) => {
				this.insertData('DeviceCompanyUserGroups', value);
			});
		}

		// deviceHAVManufacturerList
		const deviceHAVManufacturerList = offlineData.deviceHAVManufacturerList;
		if (deviceHAVManufacturerList) {
			deviceHAVManufacturerList.map((value: DeviceHAVManufacturerDetail) => {
				this.insertData('DeviceHAVManufacturers', value);
			});
		}

		// deviceHAVTypeList
		const deviceHAVTypeList = offlineData.deviceHAVTypeList;
		if (deviceHAVTypeList) {
			deviceHAVTypeList.map((value: DeviceHAVTypeDetail) => {
				this.insertData('DeviceHAVTypes', value);
			});
		}

		// deviceHAVModelList
		const deviceHAVModelList = offlineData.deviceHAVModelList;
		if (deviceHAVModelList) {
			deviceHAVModelList.map((value: DeviceHAVModelDetail) => {
				this.insertData('DeviceHAVModels', value);
			});
		}

		// deviceRiskItemList
		const deviceRiskItemList = offlineData.deviceRiskItemList;
		if (deviceRiskItemList) {
			deviceRiskItemList.map((value: DeviceRiskItemDetail) => {
				this.insertData('DeviceRiskItems', value);
			});
		}

		// deviceHazardItemList
		const deviceHazardItemList = offlineData.deviceHazardItemList;
		if (deviceHazardItemList) {
			deviceHazardItemList.map((value: DeviceHazardItemDetail) => {
				this.insertData('DeviceHazardItems', value);
			});
		}
	};
}
