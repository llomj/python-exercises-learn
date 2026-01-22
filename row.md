# Questions with "What is?" that may break into 2 rows

This file contains questions starting with "What is?" that might wrap to multiple rows in the quiz view due to their length.

## Examples:

1. `What is int("2") + int("3")?`
   - ID: ~2021
   - Length: 30 characters

2. `What is "-".join(["a", "b", "c"])?`
   - ID: ~3050
   - Length: 35 characters

3. `What is sorted([3, 1, 2], reverse=True)?`
   - ID: ~4164
   - Length: 40 characters

4. `What is "hello".replace("l", "L", 1)?`
   - ID: ~2801
   - Length: 38 characters

5. `What is "hello".rpartition("l")?`
   - ID: ~2885
   - Length: 33 characters

6. `What is "hello,world".split(",")?`
   - ID: ~2931
   - Length: 34 characters

7. `What is "hello\\nworld".splitlines()?`
   - ID: ~3010
   - Length: 36 characters

8. `What is "".join(["a", "b", "c"])?`
   - ID: ~3094
   - Length: 33 characters

9. `What is "hello".center(10)?`
   - ID: ~3139
   - Length: 30 characters

10. `What is "hello".ljust(10)?`
    - ID: ~3178
    - Length: 30 characters

11. `What is "hello".rjust(10)?`
    - ID: ~3216
    - Length: 30 characters

12. `What is "hello".zfill(10)?`
    - ID: ~3254
    - Length: 30 characters

13. `What is f"Value: {5}"?`
    - ID: ~3294
    - Length: 22 characters

14. `What is pow(2, 3, 5)?`
    - ID: ~3990
    - Length: 22 characters

15. `What is divmod(10, 3)?`
    - ID: ~4081
    - Length: 22 characters

16. `What is sorted([3, 1, 2], reverse=True)?`
    - ID: ~4164
    - Length: 40 characters

17. `What is "hello" == "Hello"?`
    - ID: ~2060
    - Length: 28 characters

18. `What is "apple" < "banana"?`
    - ID: ~2100
    - Length: 28 characters

19. `What is "a" not in "xyz"?`
    - ID: ~2189
    - Length: 26 characters

20. `What is 2 ** 2 ** 3?`
    - ID: ~1720, ~3525
    - Length: 22 characters

21. `What is (2 + 3) * 4?`
    - ID: ~1682, ~3372, ~4532
    - Length: 22 characters

22. `What is 10 / 2 in Python 3?`
    - ID: ~1410, ~3398
    - Length: 28 characters

23. `What is the difference between ' and " for strings?`
    - ID: ~978
    - Length: 50 characters

24. `What is the purpose of comments in Python?`
    - ID: ~726
    - Length: 42 characters

25. `What is the difference between == and is?`
    - ID: ~7830
    - Length: 37 characters

26. `What is the syntax for if statement?`
    - ID: ~9131
    - Length: 35 characters

27. `What is the syntax for else statement?`
    - ID: ~9165
    - Length: 36 characters

28. `What is the syntax for elif statement?`
    - ID: ~9200
    - Length: 37 characters

29. `What is max(5, 3) if 5 > 3 else min(5, 3)?`
    - ID: ~9371
    - Length: 45 characters

30. `What is 'even' if 4 % 2 == 0 else 'odd'?`
    - ID: ~9404
    - Length: 42 characters

31. `What is 'positive' if 5 > 0 else 'non-positive'?`
    - ID: ~9468
    - Length: 46 characters

32. `What is 'empty' if len([]) == 0 else 'not empty'?`
    - ID: ~9532
    - Length: 50 characters

33. `What is list(range(1, 4))?`
    - ID: ~10300
    - Length: 28 characters

34. `What is list(range(0, 10, 2))?`
    - ID: ~10338
    - Length: 31 characters

35. `What is list(range(1, 6, 2))?`
    - ID: ~10372
    - Length: 30 characters

36. `What is list(range(5, 1, -1))?`
    - ID: ~10406
    - Length: 31 characters

37. `What is list(enumerate(['a', 'b', 'c']))?`
    - ID: ~11985
    - Length: 42 characters

38. `What is list(enumerate(['a', 'b'], start=1))?`
    - ID: ~12021
    - Length: 45 characters

39. `What is list(zip([1, 2], ['a', 'b']))?`
    - ID: ~12056
    - Length: 38 characters

40. `What is list(zip([1, 2], ['a', 'b', 'c']))?`
    - ID: ~12091
    - Length: 42 characters

41. `What is list(zip([1, 2, 3], ['a', 'b']))?`
    - ID: ~12123
    - Length: 42 characters

42. `What is list(zip([1], [2], [3]))?`
    - ID: ~12155
    - Length: 32 characters

43. `What is list(zip('ab', 'cd'))?`
    - ID: ~12291
    - Length: 32 characters

44. `What is [x * 2 for x in range(3)]?`
    - ID: ~12360
    - Length: 37 characters

45. `What is [x for x in range(5) if x % 2 == 0]?`
    - ID: ~12393
    - Length: 45 characters

46. `What is [x for x in range(5) if x % 2 == 1]?`
    - ID: ~12425
    - Length: 45 characters

## Notes:
- Questions longer than ~25-30 characters may wrap on smaller screens
- Questions with longer method calls or expressions are more likely to wrap
- The prefix "What is " is 8 characters, so expressions longer than ~22-27 characters may cause wrapping
- Questions with ternary operators (if/else) tend to be longer and more likely to wrap
