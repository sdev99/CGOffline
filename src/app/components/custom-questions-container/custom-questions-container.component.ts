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

    @Input() sectionId: number;
    @Input() formGroup: FormGroup;
    @Input() questions: Array<any>;
    @Input() questionElementIds: Array<string>;
    @Input() isSubmitted: boolean;

    constructor(
        public sharedDataService: SharedDataService,
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

    isError(question) {
        return (this.isSubmitted && !this.formGroup.controls[UtilService.FCName(question.questionId)].valid);
    }
}
