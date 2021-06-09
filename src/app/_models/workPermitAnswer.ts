export class WorkPermitAnswer {
	userWorkPermitID: number;
	workPermitId: number;
	scoreAchieved: number;
	totalScore: number;
	whoDefinesDateType?: string;
	hasExpiresOn?: boolean;
	expiresOnDate?: string;
	hasExpiresAfter?: boolean;
	durationValue?: number;
	durationTypeID?: number;
	constructor(data) {
		this.userWorkPermitID = data.userWorkPermitID || 0;
		this.workPermitId = data.workPermitId || 0;
		this.scoreAchieved = data.scoreAchieved || 0;
		this.totalScore = data.totalScore || 0;
		this.whoDefinesDateType = data.whoDefinesDateType || 'PreDefined';
		this.hasExpiresOn = data.hasExpiresOn || false;
		this.expiresOnDate = data.expiresOnDate || '';
		this.hasExpiresAfter = data.hasExpiresAfter || false;
		this.durationValue = data.durationValue || 0;
		this.durationTypeID = data.durationTypeID || 0;
	}
}
