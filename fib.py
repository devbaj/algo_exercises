# Fibonacci starting at 0
def fib_at_zero(n):
    if n < 2:
        return n
    return fib_at_zero(n-1) + fib_at_zero(n-2)


# Fibonacci starting at 1
def fib_at_one(n):
    if n == 1:
        return 0
    elif n == 2:
        return 1
    return fib_at_one(n-1) + fib_at_one(n-2)

print(fib_at_zero(0))
print(fib_at_zero(1))
print(fib_at_zero(2))
print(fib_at_zero(3))
print(fib_at_zero(4))
print("*"*80)
print(fib_at_one(1))
print(fib_at_one(2))
print(fib_at_one(3))
print(fib_at_one(4))
print(fib_at_one(5))
