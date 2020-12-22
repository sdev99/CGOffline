import {AttachmentItem} from './attachmentItem';
import {FormItem} from './formItem';
import {LocationItem} from './locationItem';

export class SignOffFormDetail {
    entityList: [LocationItem];
    formData: FormItem;
    formAttachments: [AttachmentItem];
}
