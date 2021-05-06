import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class ObservablesService {
	private mySubjects = {};

	intialiseFirstTime(key) {
		if (!this.mySubjects[key]) {
			this.mySubjects[key] = new Subject<any>();
		}
		return this.mySubjects[key];
	}

	publishSomeData(key, data = {}) {
		this.intialiseFirstTime(key).next(data);
	}

	getObservable(key): Subject<any> {
		return this.intialiseFirstTime(key);
	}

	removeObservable(key): void {
		this.intialiseFirstTime(key).unsubscribe();
		this.mySubjects[key] = null;
	}
}
