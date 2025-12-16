# RxJS -- Multiple API Calls (Phase 2)

This section demonstrates how to handle multiple HTTP calls in Angular
using RxJS. It focuses on running APIs in parallel and reacting to
multiple streams.

------------------------------------------------------------------------

## Operators Covered

### forkJoin

Runs multiple observables in parallel and emits once when all
observables complete.

``` ts
forkJoin({
  users: getUsers(),
  posts: getPosts()
});
```

**Use cases** - Initial page load - Dashboard data loading - Independent
API calls

**Key behavior** - Emits only once - Waits for all observables to
complete - Fails if any observable errors

------------------------------------------------------------------------

### combineLatest

Emits whenever any observable emits, after all observables have emitted
at least once.

``` ts
combineLatest([users$, posts$]);
```

**Use cases** - Reactive UI updates - Filters and sorting - Dependent UI
state

**Key behavior** - Emits multiple times - Reacts to changes in any
stream - Requires all streams to emit at least once

------------------------------------------------------------------------

## forkJoin vs combineLatest

  forkJoin               combineLatest
  ---------------------- ----------------------
  Emits once             Emits multiple times
  Waits for completion   Reactive
  Best for API calls     Best for UI logic
  Non-reactive           Reactive

------------------------------------------------------------------------

## Typical Examples

``` ts
forkJoin({
  users: this.api.getUsers(),
  posts: this.api.getPosts()
}).subscribe();
```

``` ts
combineLatest([
  this.api.getUsers(),
  this.api.getPosts()
]).subscribe();
```

------------------------------------------------------------------------

## Interview Talking Point

> I use forkJoin when I need all API responses before rendering the UI,
> and combineLatest when the UI must react to changes from multiple
> observable sources.

------------------------------------------------------------------------

## Key Takeaways

-   forkJoin is ideal for parallel API execution
-   combineLatest is ideal for reactive streams
-   Choosing the right operator prevents unnecessary API calls
