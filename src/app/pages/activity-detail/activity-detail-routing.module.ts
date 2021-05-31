import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { ActivityDetailPage } from './activity-detail.page';

const routes: Routes = [
	{
		path: '',
		component: ActivityDetailPage,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes), TranslateModule],
	exports: [RouterModule],
})
export class ActivityDetailPageRoutingModule {}
