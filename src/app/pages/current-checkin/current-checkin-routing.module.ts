import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {CurrentCheckinPage} from './current-checkin.page';

const routes: Routes = [
    {
        path: '',
        component: CurrentCheckinPage
    },
    {
        path: 'checkin-workpermit',
        loadChildren: () => import('../checkin-workpermit/checkin-workpermit.module').then(m => m.CheckinWorkpermitPageModule)
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class CurrentCheckinPageRoutingModule {
}
