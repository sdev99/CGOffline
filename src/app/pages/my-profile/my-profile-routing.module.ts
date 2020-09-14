import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {MyProfilePage} from './my-profile.page';

const routes: Routes = [
    {
        path: '',
        component: MyProfilePage
    },
    {
        path: 'my-profile-documents',
        loadChildren: () => import('../my-profile-documents/my-profile-documents.module').then(m => m.MyProfileDocumentsPageModule)
    },
    {
        path: 'my-profile-details',
        loadChildren: () => import('../my-profile-details/my-profile-details.module').then(m => m.MyProfileDetailsPageModule)
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class MyProfilePageRoutingModule {
}
