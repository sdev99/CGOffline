import { RAcontrolMeasureAnswerObject } from './RAcontrolMeasureAnswerObject';

export class RAhazardAswerObject {
	hazardAnswerId: number;
	hazardAnswerTitle: string;
	riskRatingSeverityID: number;
	riskRatingProbabilityID: number;
	riskRatingCalculatedValue: number;
	residualRiskRatingSeverityID: number;
	residualRiskRatingProbabilityID: number;
	residualRiskRatingCalculatedValue: number;
	isMembersOfTheWorkForce: boolean;
	isMembersOfTheWorkForceUserIDs: string;
	isMembersOfTheWorkForceUserGroupIDs: string;
	isMembersOfThePublic: boolean;
	membersOfThePublicDescription: string;
	hasPersonnelExposedNotification: boolean;
	personnelExposedNotificationUserIDs: string;
	personnelExposedNotificationUserGroupIDs: string;
	hazardAnswerDisplayOrder: number;
	taskAnswerID: number;
	controlMeasureAnswers: Array<RAcontrolMeasureAnswerObject>;
	isPersonnelExposedSystemNotification: boolean;
	isPersonnelExposedEmailNotification: boolean;
	isPersonnelExposedSMSNotification: boolean;

	constructor() {
		this.hazardAnswerId = 0;
		this.hazardAnswerTitle = '';
		this.riskRatingSeverityID = 0;
		this.riskRatingProbabilityID = 0;
		this.riskRatingCalculatedValue = 0;
		this.residualRiskRatingSeverityID = 0;
		this.residualRiskRatingProbabilityID = 0;
		this.residualRiskRatingCalculatedValue = 0;
		this.isMembersOfTheWorkForce = false;
		this.isMembersOfTheWorkForceUserIDs = '';
		this.isMembersOfTheWorkForceUserGroupIDs = '';
		this.isMembersOfThePublic = false;
		this.membersOfThePublicDescription = '';
		this.hasPersonnelExposedNotification = false;
		this.personnelExposedNotificationUserIDs = '';
		this.personnelExposedNotificationUserGroupIDs = '';
		this.hazardAnswerDisplayOrder = 1;
		this.taskAnswerID = 0;
		this.controlMeasureAnswers = [];
		this.isPersonnelExposedSystemNotification = true;
		this.isPersonnelExposedEmailNotification = false;
		this.isPersonnelExposedSMSNotification = false;
	}
}
