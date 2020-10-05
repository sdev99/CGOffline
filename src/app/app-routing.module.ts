import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';

const routes: Routes = [
    {path: '', redirectTo: 'choose-location', pathMatch: 'full'},
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
        path: 'checkinout-confirm',
        loadChildren: () => import('./pages/checkinout-confirm/checkinout-confirm.module').then(m => m.CheckoutConfirmPageModule)
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
        loadChildren: () => import('./pages/my-profile-changepass/my-profile-changepass.module').then(m => m.MyProfileChangepassPageModule)
    },
    {
        path: 'choose-location',
        loadChildren: () => import('./pages/choose-location/choose-location.module').then(m => m.ChooseLocationPageModule)
    },
    {
        path: 'dashboard-dm',
        loadChildren: () => import('./pages/dashboard-dm/dashboard-dm.module').then(m => m.DashboardDmPageModule)
    },
    {
        path: 'search-location',
        loadChildren: () => import('./modals/search-location/search-location.module').then(m => m.SearchLocationPageModule)
    },
    {
        path: 'signoff-photo',
        loadChildren: () => import('./pages/signoff-photo/signoff-photo.module').then(m => m.SignoffPhotoPageModule)
    },
    {
        path: 'home-exit-dm',
        loadChildren: () => import('./modals/home-exit-dm/home-exit-dm.module').then(m => m.HomeExitDmPageModule)
    },
    {
        path: 'checkinout-option-dm',
        loadChildren: () => import('./pages/checkinout-option-dm/checkinout-option-dm.module').then(m => m.CheckinoutOptionDmPageModule)
    },
    {
        path: 'checkinout-name-dm',
        loadChildren: () => import('./pages/checkinout-name-dm/checkinout-name-dm.module').then(m => m.CheckinoutNameDmPageModule)
    },
    {
        path: 'checkinout-guest-dm',
        loadChildren: () => import('./pages/checkinout-guest-dm/checkinout-guest-dm.module').then(m => m.CheckinoutGuestDmPageModule)
    },
  {
    path: 'checkinout-alreadycheckin-dm',
    loadChildren: () => import('./pages/checkinout-alreadycheckin-dm/checkinout-alreadycheckin-dm.module').then( m => m.CheckinoutAlreadycheckinDmPageModule)
  },
  {
    path: 'checkinout-photoidentity-dm',
    loadChildren: () => import('./pages/checkinout-photoidentity-dm/checkinout-photoidentity-dm.module').then( m => m.CheckinoutPhotoidentityDmPageModule)
  },
  {
    path: 'documents-dm',
    loadChildren: () => import('./pages/documents-dm/documents-dm.module').then( m => m.DocumentsDmPageModule)
  }

];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
