import { HavAssessmentTool } from './havAssessmentTool';

export class HavAnswerDetail {
	initialExposure?: number;
	calculatedExposure: number;
	totalExposure: number;
	havAssessmentTools: Array<HavAssessmentTool>;
}
