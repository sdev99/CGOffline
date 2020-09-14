import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TabsPage} from './tabs.page';

const routes: Routes = [
    {
        path: '',
        component: TabsPage,
        children: [
            {
                path: 'dashboard',
                loadChildren: () => import('../pages/dashboard/dashboard.module').then(m => m.DashboardPageModule),
            },
            {
                path: 'current-checkin',
                loadChildren: () => import('../pages/current-checkin/current-checkin.module').then(m => m.CurrentCheckinPageModule)
            },

            {
                path: 'my-profile',
                loadChildren: () => import('../pages/my-profile/my-profile.module').then(m => m.MyProfilePageModule)
            },

            {
                path: '',
                redirectTo: '/tabs/my-profile/my-profile-documents',
                pathMatch: 'full'
            }
        ]
    },
    // {
    //     path: '',
    //     redirectTo: 'my-profile',
    //     pathMatch: 'full'
    // }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TabsPageRoutingModule {
}
