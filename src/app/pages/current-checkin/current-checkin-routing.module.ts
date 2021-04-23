import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CurrentCheckinPage } from './current-checkin.page';

const routes: Routes = [
	{
		path: '',
		component: CurrentCheckinPage,
	},
	{
		path: 'checkin-workpermit',
		loadChildren: () => import('../checkin-workpermit/checkin-workpermit.module').then((m) => m.CheckinWorkpermitPageModule),
	},
	{
		path: 'folder-content-list',
		loadChildren: () => import('../folder-content-list/folder-content-list.module').then((m) => m.FolderContentListPageModule),
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class CurrentCheckinPageRoutingModule {}
