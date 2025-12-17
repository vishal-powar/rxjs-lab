# RxJS -- Dependent API Calls (Phase 3)

This phase focuses on **dependent API calls**, where one asynchronous
operation depends on the result of another. This is the most critical
RxJS concept for real-world Angular applications and interviews.

------------------------------------------------------------------------

## Why This Phase Is Important

Most production bugs and interview rejections happen due to incorrect
use of: - switchMap - mergeMap - concatMap - exhaustMap

These operators control **cancellation**, **ordering**, and
**concurrency**.

------------------------------------------------------------------------

## Operators Covered

### switchMap

Cancels the previous inner observable when a new value is emitted.

``` ts
source$.pipe(
  switchMap(value => apiCall(value))
);
```

**Key behavior** - Cancels in-flight requests - Only latest request
matters

**Use cases** - Search APIs - Typeahead - Route parameter changes

**Think** \> "Only care about the latest value"

------------------------------------------------------------------------

### mergeMap

Runs all inner observables in parallel without cancellation.

``` ts
source$.pipe(
  mergeMap(value => apiCall(value))
);
```

**Key behavior** - No cancellation - Concurrent execution

**Use cases** - Fire-and-forget actions - Independent background
requests

**Think** \> "Let everything run"

------------------------------------------------------------------------

### concatMap

Queues inner observables and executes them sequentially.

``` ts
source$.pipe(
  concatMap(value => apiCall(value))
);
```

**Key behavior** - Maintains order - Waits for completion

**Use cases** - Ordered operations - Step-by-step workflows

**Think** \> "Order matters"

------------------------------------------------------------------------

### exhaustMap

Ignores new emissions while an inner observable is running.

``` ts
source$.pipe(
  exhaustMap(value => apiCall(value))
);
```

**Key behavior** - Ignores new values - No cancellation

**Use cases** - Form submissions - Button clicks

**Think** \> "Ignore until finished"

------------------------------------------------------------------------

## Comparison Table

  Operator     Cancels   Order   Concurrency   Best For
  ------------ --------- ------- ------------- ----------------------
  switchMap    Yes       No      1             Search, latest value
  mergeMap     No        No      Many          Parallel tasks
  concatMap    No        Yes     1             Sequential steps
  exhaustMap   No        N/A     1             Prevent duplicates

------------------------------------------------------------------------

## Typical Dependent API Example

``` ts
getUserId$.pipe(
  switchMap(id => getUserDetails(id))
).subscribe();
```

------------------------------------------------------------------------

## Interview Talking Points

> switchMap is my default for dependent API calls because it cancels
> stale requests. I use mergeMap for parallel execution, concatMap when
> order matters, and exhaustMap to prevent duplicate triggers like form
> submissions.

------------------------------------------------------------------------

## Key Takeaways

-   Choose mapping operators intentionally
-   Cancellation prevents race conditions
-   Ordering prevents data inconsistency
-   exhaustMap protects against duplicate actions

------------------------------------------------------------------------

## Next Phase

Search and cancellation using: - Subject - debounceTime - switchMap
