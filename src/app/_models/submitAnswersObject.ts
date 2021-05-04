import { FormAnswerObject } from './formAnswerObject';
import { WorkPermitAnswer } from './workPermitAnswer';
import { ArAnswerObject } from './arAnswerObject';
import { RiskAssessmentAnswerObject } from './riskAssessmentAnswerObject';
import { HavAnswerDetail } from './havAnswerDetail';

export class SubmitAnswersObject {
	formId: number;
	formVersionId: number;
	formTypeId: number;
	userId: string;
	companyId: number;
	selectedLanguageID: number;
	questionAnswers?: Array<FormAnswerObject>;
	accidentReportQuestionAnswers?: Array<ArAnswerObject>;
	riskAssessmentAnswers?: Array<RiskAssessmentAnswerObject>;
	havAnswerDetail?: HavAnswerDetail;
	workPermitAnswer?: WorkPermitAnswer;
	formattedSections?: any;
	workPermitDetails?: any;
	accidentReport?: any;
	riskAssessmentAnswerDetails?: any;
}
