import {Component, Input, OnInit} from '@angular/core';
import {FormControlName, FormGroup} from '@angular/forms';
import {UtilService} from '../../services/util.service';
import {EnumService} from '../../services/enum.service';
import {SharedDataService} from '../../services/shared-data.service';

@Component({
    selector: 'app-custom-questions-container',
    templateUrl: './custom-questions-container.component.html',
    styleUrls: ['./custom-questions-container.component.scss'],
})
export class CustomQuestionsContainerComponent implements OnInit {
    UtilService = UtilService;
    EnumService = EnumService;

    @Input() sectionIndex: number;
    @Input() sectionId: number;
    @Input() formGroup: FormGroup;
    @Input() questions: Array<any>;
    @Input() questionElementIds: Array<string>;
    @Input() isSubmitted: boolean;
    @Input() isSectionDuplicate: boolean;

    constructor(
        public sharedDataService: SharedDataService,
        public utilService: UtilService,
    ) {
    }

    ngOnInit() {
    }

    shouldShowError(question) {
        if (question.selectedAnswerTypeId === EnumService.CustomAnswerType.SingleChoiceSet ||
            question.selectedAnswerTypeId === EnumService.CustomAnswerType.MultipleChoiceSet) {
            return true;
        }
        return true;
        // return false;
    }

    isError(question, questionIndex) {
        const controlName = UtilService.CustomFCName(this.sectionId, question.questionId, this.isSectionDuplicate, question[EnumService.QuestionLogic.ActionTypeForForm.Duplicate]);
        return (this.isSubmitted && !this.formGroup.controls[controlName].valid);
    }
}
