This mini project serves the purpose of understanding the following different optimization techniques.

1. memo
2. useMemo
3. useCallback

## Context re-render optimization

Optimization for the context re-renders should be done if following things are true at the same time.

1. The state in the context need to change all the time
2. The context has many consumers
3. The app is slow and laggy.

It is better to create one context per state.