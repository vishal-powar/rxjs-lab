import { Component, OnInit } from '@angular/core';
import { filter, map, of, tap, take, debounceTime, distinctUntilChanged, Subject } from 'rxjs';

@Component({
  selector: 'app-operators',
  imports: [],
  templateUrl: './operators.html',
  styleUrl: './operators.scss',
})
export class Operators implements OnInit {

  private search$ = new Subject<string>();

  ngOnInit(): void {
    this.basicOperators();
    this.debounceExample();
  }

  // --- map, filter, take, tap ---
  basicOperators() {
    of(1, 2, 3, 4, 5).pipe(
      filter(v => v % 2 === 0),
      map(v => v * 10),
      take(2),
      tap(v => console.log('[basicOperators]', v))
    ).subscribe();
  }

  // --- debounceTime ---
  debounceExample() {
    this.search$.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      tap(value => console.log('[debounceTime]', value))
    ).subscribe();
  }

  onSearch(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.search$.next(value);
  }
}
