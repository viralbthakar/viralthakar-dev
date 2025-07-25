---
author: Viral Thakar
pubDatetime: 2025-07-25T11:45:00Z
modDatetime: 2025-07-26T13:28:00Z
title: Daily Python Ping
slug: daily-python-ping
featured: true
draft: false
tags:
  - python
description:
    A daily Python ping to practice and improve coding skills.
---

Here is the latest update for the Daily Python Ping:
## Table of Contents

## July 26, 2025
Write a python script to check if a number is prime.
```python
# Function to check if a number is prime
def is_prime(n):
    if n <= 1:
        return False
    # Using Trial Division method to check for primality
    for i in range(2, int(n**0.5) + 1):
      if n % i == 0:
        return False
    return True
```
Here is the example usage:
```python
print(is_prime(5))
print(is_prime(10))
```
This will output:
```
True
False
```

To read more about the Trial Division method, you can refer to the Wikipedia article on [Primality Test](https://en.wikipedia.org/wiki/Primality_test#Complexity) and [Trial Division](https://en.wikipedia.org/wiki/Trial_division).

## July 25, 2025
Write a python script to reverse a string.
```python
# Function to reverse a string
def reverse_string(s):
    return s[::-1]
```
Here is the example usage:
```python
print(reverse_string("Hello, World!"))
```
This will output:
```
!dlroW ,olleH
```