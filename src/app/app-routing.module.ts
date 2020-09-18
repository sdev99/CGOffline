import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';

const routes: Routes = [
    {path: '', redirectTo: 'login', pathMatch: 'full'},
    {
        path: 'tabs',
        loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
    },
    {
        path: 'login',
        loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule)
    },
    {
        path: 'image-annotation',
        loadChildren: () => import('./pages/image-annotation/image-annotation.module').then(m => m.ImageAnnotationPageModule)
    },
    {
        path: 'annotation-preview',
        loadChildren: () => import('./pages/annotation-preview/annotation-preview.module').then(m => m.AnnotationPreviewPageModule)
    },
    {
        path: 'forgot-password',
        loadChildren: () => import('./pages/forgot-password/forgot-password.module').then(m => m.ForgotPasswordPageModule)
    },
    {
        path: 'linksend-success',
        loadChildren: () => import('./pages/linksend-success/linksend-success.module').then(m => m.LinksendSuccessPageModule)
    },
    {
        path: 'checkin-fail',
        loadChildren: () => import('./pages/checkin-fail/checkin-fail.module').then(m => m.CheckinFailPageModule)
    },
    {
        path: 'checkin-success',
        loadChildren: () => import('./pages/checkin-success/checkin-success.module').then(m => m.CheckinSuccessPageModule)
    },
    {
        path: 'checkin-induction',
        loadChildren: () => import('./pages/checkin-induction/checkin-induction.module').then(m => m.CheckinInductionPageModule)
    },
    {
        path: 'checkin-induction-video-file',
        loadChildren: () => import('./pages/checkin-induction-video-file/checkin-induction-video-file.module').then(m => m.CheckinInductionVideoFilePageModule)
    },
    {
        path: 'checkin-induction-image-file',
        loadChildren: () => import('./pages/checkin-induction-image-file/checkin-induction-image-file.module').then(m => m.CheckinInductionImageFilePageModule)
    },
    {
        path: 'checkin-induction-rich-text',
        loadChildren: () => import('./pages/checkin-induction-rich-text/checkin-induction-rich-text.module').then(m => m.CheckinInductionRichTextPageModule)
    },
    {
        path: 'checkin-induction-form',
        loadChildren: () => import('./pages/checkin-induction-form/checkin-induction-form.module').then(m => m.CheckinInductionFormPageModule)
    },
    {
        path: 'checkin-induction-va',
        loadChildren: () => import('./pages/checkin-induction-va/checkin-induction-va.module').then(m => m.CheckinInductionVaPageModule)
    },
    {
        path: 'signoff-digitalink',
        loadChildren: () => import('./pages/signoff-digitalink/signoff-digitalink.module').then(m => m.SignoffDigitalinkPageModule)
    },
    {
        path: 'dashboard-qrscan',
        loadChildren: () => import('./pages/dashboard-qrscan/dashboard-qrscan.module').then(m => m.DashboardQrscanPageModule)
    },
    {
        path: 'activity-detail',
        loadChildren: () => import('./pages/activity-detail/activity-detail.module').then(m => m.ActivityDetailPageModule)
    },
    {
        path: 'form-cover',
        loadChildren: () => import('./pages/form-cover/form-cover.module').then(m => m.FormCoverPageModule)
    },
    {
        path: 'form-custom',
        loadChildren: () => import('./pages/form-custom/form-custom.module').then(m => m.FormCustomPageModule)
    },
    {
        path: 'form-riskassessment',
        loadChildren: () => import('./pages/form-riskassessment/form-riskassessment.module').then(m => m.FormRiskassessmentPageModule)
    },
    {
        path: 'my-profile-edit',
        loadChildren: () => import('./pages/my-profile-edit/my-profile-edit.module').then(m => m.MyProfileEditPageModule)
    },
    {
        path: 'checkout-confirm',
        loadChildren: () => import('./pages/checkout-confirm/checkout-confirm.module').then(m => m.CheckoutConfirmPageModule)
    },
    {
        path: 'form-hav',
        loadChildren: () => import('./pages/form-hav/form-hav.module').then(m => m.FormHavPageModule)
    },
    {
        path: 'form-accident-report',
        loadChildren: () => import('./pages/form-accident-report/form-accident-report.module').then(m => m.FormAccidentReportPageModule)
    },
    {
        path: 'new-account-setup',
        loadChildren: () => import('./pages/new-account-setup/new-account-setup.module').then(m => m.NewAccountSetupPageModule)
    },
    {
        path: 'terms-conditions',
        loadChildren: () => import('./pages/terms-conditions/terms-conditions.module').then(m => m.TermsConditionsPageModule)
    },
  {
    path: 'my-profile-changepass',
    loadChildren: () => import('./pages/my-profile-changepass/my-profile-changepass.module').then( m => m.MyProfileChangepassPageModule)
  },

];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
