export class FormItem {
    formID: number;
    formVersionID: number;
    formType: string;
    isDigitalSignOff: boolean;
    isSignatureSignOff: boolean;
    isPhotoSignOff: boolean;
    formTitle: string;
    formVersionNo: number;
    formattedDescription: string;
    formattedInstructions: string;
    isReviewal: boolean;
    reviewerId: string;
    isSystemReviewer: boolean;
    isEmailReviewer: boolean;
    isSmsReviewer: boolean;
    isRejected: boolean;
    rejectedBy: string;
    rejectedDate: string;
    formattedRejectedDate: string;
    rejectedReason: string;
    timeDifference: string;
}
