# hmbsort
hardmode bogosort, for high-performance production applications

## how it works
works like the standard bogosort, except lower numbers are weighted to be shuffled higher in the array and vice versa.

in other words, in an array of 10 numbers, 1 is more likely to be at the end, while 10 is more likely to be at the beginning.

## why?
bogosort is too easy for my computer

## benchmarks
```
+----+---------------+
|  n | sort time (s) |
+----+---------------+
|  1 | 0.0000s       |
|  2 | 0.0000s       |
|  3 | 0.0001s       |
|  4 | 0.0005s       |
|  5 | 0.0026s       |
|  6 | 0.0253s       |
|  7 | 0.3655s       |
|  8 | 1.8563s       |
|  9 | 59.6963s      |
| 10 | i don't know. | it started an hour ago and it's still running.
+----+---------------+
```
