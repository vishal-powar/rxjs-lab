# RxJS -- Basic Operators (Phase 1)

This section covers the core RxJS operators that are used in almost
every Angular application. These operators are usually combined in a
single pipeline rather than used in isolation.

------------------------------------------------------------------------

## Operators Covered

### of

Creates an observable from static values.

``` ts
of(1, 2, 3)
```

**Use cases** - Creating mock streams - Testing RxJS pipelines -
Wrapping synchronous values into observables

------------------------------------------------------------------------

### filter

Emits only values that satisfy a given condition.

``` ts
filter(value => value % 2 === 0)
```

**Use cases** - Ignoring unwanted events - Conditional logic in
streams - Filtering API or form data

------------------------------------------------------------------------

### map

Transforms emitted values.

``` ts
map(value => value * 10)
```

**Use cases** - Transforming API responses - Mapping UI data -
Normalizing values

> Similar to `Array.map`, but works over time.

------------------------------------------------------------------------

### tap

Performs side effects without modifying the stream.

``` ts
tap(value => console.log(value))
```

**Use cases** - Debugging - Logging - Triggering side effects

> Avoid mutating data inside `tap`.

------------------------------------------------------------------------

### take

Completes the observable after a fixed number of emissions.

``` ts
take(2)
```

**Use cases** - Auto-unsubscribing - Preventing memory leaks - Limiting
event emissions

------------------------------------------------------------------------

## Time-Based Operator

### debounceTime

Emits a value only after a specified pause in emissions.

``` ts
debounceTime(300)
```

**Use cases** - Search inputs - Autocomplete - High-frequency user
events

Commonly combined with: - `Subject` - `distinctUntilChanged` -
`switchMap`

------------------------------------------------------------------------

## Typical Pipeline Example

``` ts
source$.pipe(
  filter(Boolean),
  debounceTime(300),
  map(value => value.trim()),
  tap(value => console.log(value)),
  take(1)
);
```

This represents a real-world Angular use case.

------------------------------------------------------------------------

## Interview Talking Points

-   These operators are pure and composable
-   They are often used together in a single `pipe`
-   They form the foundation for advanced RxJS patterns

**Interview explanation** \> I use map and filter for data
transformation, tap for debugging, take for auto-completion, and
debounceTime to control high-frequency events like user input.

------------------------------------------------------------------------

## Key Takeaways

-   RxJS deals with data over time
-   Pipes are read from top to bottom
-   Timing operators affect when values emit, not what emits
-   Master these before higher-order operators like switchMap or
    mergeMap
