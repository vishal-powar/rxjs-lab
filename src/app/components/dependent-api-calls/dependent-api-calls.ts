import { Component } from '@angular/core';
import { concatMap, exhaustMap, mergeMap, Subject, switchMap, tap } from 'rxjs';
import { ApiService } from '../../services/api';

@Component({
	selector: 'app-dependent-api-calls',
	imports: [],
	templateUrl: './dependent-api-calls.html',
	styleUrl: './dependent-api-calls.scss',
})
export class DependentApiCalls {
	private userId$ = new Subject<number>();
	private counter = 1;

	constructor(private api: ApiService) {
		this.switchMapExample();
		this.mergeMapExample();
		this.concatMapExample();
		this.exhaustMapExample();
	}

	emitUser() {
		console.log('Emitted userId:', this.counter);
		this.userId$.next(this.counter++);
	}

	// switchMap
	switchMapExample() {
		this.userId$.pipe(
			switchMap(id => this.api.getUserPosts(id)),
			tap(res => console.log('[switchMap]', res))
		).subscribe();
	}

	// mergeMap
	mergeMapExample() {
		this.userId$.pipe(
			mergeMap(id => this.api.getUserPosts(id)),
			tap(res => console.log('[mergeMap]', res))
		).subscribe();
	}

	// concatMap
	concatMapExample() {
		this.userId$.pipe(
			concatMap(id => this.api.getUserPosts(id)),
			tap(res => console.log('[concatMap]', res))
		).subscribe();
	}

	// exhaustMap
	exhaustMapExample() {
		this.userId$.pipe(
			exhaustMap(id => this.api.getUserPosts(id)),
			tap(res => console.log('[exhaustMap]', res))
		).subscribe();
	}

	chainedDependentCalls() {
		this.api.getUser(1).pipe(

			// API 1 → API 2
			switchMap(user => {
				console.log('[User]', user);
				return this.api.getOrdersByUser(user.id);
			}),

			// API 2 → API 3
			switchMap(orders => {
				const firstOrderId = orders[0]?.id;
				console.log('[Orders]', orders);
				return this.api.getOrderDetails(firstOrderId);
			}),

			tap(orderDetails =>
				console.log('[Order Details]', orderDetails)
			)

		).subscribe();
	}

}
