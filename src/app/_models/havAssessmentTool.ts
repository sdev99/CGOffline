import { HavAnswerObject } from './havAnswerObject';
import { HavExposure } from './havExposure';

export class HavAssessmentTool {
	displayOrder?: number;
	havExposure: HavExposure;
	havQuestionAnswers: Array<HavAnswerObject>;
}
