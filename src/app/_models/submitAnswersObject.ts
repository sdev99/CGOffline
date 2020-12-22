import {FormAnswerObject} from './formAnswerObject';
import {HavAnswerObject} from './havAnswerObject';
import {HavExposure} from './havExposure';
import {WorkPermitAnswer} from './workPermitAnswer';
import {ArAnswerObject} from './arAnswerObject';
import {RiskAssessmentAnswerObject} from './riskAssessmentAnswerObject';

export class SubmitAnswersObject {
    formId: number;
    formVersionId: number;
    formTypeId: number;
    userId: string;
    companyId: number;
    questionAnswers?: Array<FormAnswerObject>;
    havQuestionAnswers?: Array<HavAnswerObject>;
    accidentReportQuestionAnswers?: Array<ArAnswerObject>;
    riskAssessmentAnswers?: Array<RiskAssessmentAnswerObject>;
    havExposure?: HavExposure;
    workPermitAnswer?: WorkPermitAnswer;
}
