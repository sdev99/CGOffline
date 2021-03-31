import { RAhazardAswerObject } from './RAhazardAswerObject';

export class RAtaskAswerObject {
	taskAnswerId: number;
	taskAnswerTitle: string;
	taskAnswerComment: string;
	taskAnswerDisplayOrder: number;
	hazardAnswers: Array<RAhazardAswerObject>;
	constructor() {
		this.taskAnswerId = 0;
		this.taskAnswerTitle = '';
		this.taskAnswerComment = '';
		this.taskAnswerDisplayOrder = 0;
		this.hazardAnswers = [new RAhazardAswerObject()];
	}
}
