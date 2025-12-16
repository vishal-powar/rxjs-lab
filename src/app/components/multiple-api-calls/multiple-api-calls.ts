import { Component } from '@angular/core';
import { combineLatest, forkJoin, tap } from 'rxjs';
import { ApiService } from '../../services/api';

@Component({
  selector: 'app-multiple-api-calls',
  imports: [],
  templateUrl: './multiple-api-calls.html',
  styleUrl: './multiple-api-calls.scss',
})
export class MultipleApiCalls {

  constructor(private api: ApiService){}

  // 🔹 forkJoin example
  runForkJoin() {
    forkJoin({
      users: this.api.getUsers(),
      posts: this.api.getPosts()
    }).pipe(
      tap(result => console.log('[forkJoin]', result))
    ).subscribe();
  }

  // 🔹 combineLatest example
  runCombineLatest() {
    combineLatest([
      this.api.getUsers(),
      this.api.getPosts()
    ]).pipe(
      tap(([users, posts]) =>
        console.log('[combineLatest]', { users, posts })
      )
    ).subscribe();
  }
}
