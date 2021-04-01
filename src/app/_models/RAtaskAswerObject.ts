import { RAhazardAswerObject } from './RAhazardAswerObject';

export class RAtaskAswerObject {
	taskAnswerId: number;
	taskAnswerTitle: string;
	taskAnswerComment: string;
	taskAnswerDisplayOrder: number;
	hazardAnswers: Array<RAhazardAswerObject>;
	isRequired: boolean;
	constructor() {
		this.isRequired = true;
		const randId = Math.floor(Math.random() * 25 + 65);
		this.taskAnswerId = randId;
		this.taskAnswerTitle = '';
		this.taskAnswerComment = '';
		this.taskAnswerDisplayOrder = 1;
		this.hazardAnswers = [new RAhazardAswerObject()];
	}
}
