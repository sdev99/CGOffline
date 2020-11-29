import {Entitydetail} from './entitydetail';
import {Induction} from './induction';
import {InductionItem} from './inductionItem';

export class CheckinDetail {
    checkInEntityDetail: Entitydetail;
    checkInInduction: Induction;
    checkInInductionItems: [InductionItem];
}
