import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {DashboardPage} from './dashboard.page';

const routes: Routes = [
    {
        path: '',
        component: DashboardPage,
    },
    {
        path: 'checkin-list',
        loadChildren: () => import('../checkin-list/checkin-list.module').then(m => m.CheckinListPageModule)
    },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class DashboardPageRoutingModule {
}
