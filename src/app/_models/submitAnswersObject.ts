import { FormAnswerObject } from './formAnswerObject';
import { HavAnswerObject } from './havAnswerObject';
import { HavExposure } from './havExposure';
import { WorkPermitAnswer } from './workPermitAnswer';
import { ArAnswerObject } from './arAnswerObject';
import { RiskAssessmentAnswerObject } from './riskAssessmentAnswerObject';

export class SubmitAnswersObject {
	formId: number;
	formVersionId: number;
	formTypeId: number;
	userId: string;
	companyId: number;
	selectedLanguageID: number;
	questionAnswers?: Array<FormAnswerObject>;
	hAVQuestionAnswers?: Array<HavAnswerObject>;
	accidentReportQuestionAnswers?: Array<ArAnswerObject>;
	riskAssessmentAnswers?: Array<RiskAssessmentAnswerObject>;
	hAVExposure?: HavExposure;
	workPermitAnswer?: WorkPermitAnswer;
	formattedSections?: any;
	workPermitDetails?: any;
	accidentReport?: any;
	riskAssessmentAnswerDetails?: any;
}
