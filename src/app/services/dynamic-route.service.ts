import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthGuard } from '../helpers/auth.guard';

@Injectable({
	providedIn: 'root',
})
export class DynamicRouteService {
	constructor(private router: Router) {}
	addDynamicRoute(dynamicPath, component, canActivateAuth = false): void {
		const appRoutes = [...this.router.config];
		let alreadyAdded = false;
		appRoutes.map((route) => {
			if (route.path === dynamicPath) {
				alreadyAdded = true;
			}
		});
		const canActivate = [];
		if (canActivateAuth) {
			canActivate.push(AuthGuard);
		}
		if (!alreadyAdded) {
			const route = { path: dynamicPath, component, canActivate };
			appRoutes.push(route);
			this.router.resetConfig(appRoutes);
		}
	}
}
