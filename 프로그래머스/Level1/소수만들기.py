# https://programmers.co.kr/learn/courses/30/lessons/12977

from itertools import combinations

def solution(nums):
    def isPrime(n):
        for i in range(2, n):
            if n % i == 0:
                return False
        return True
    answer = 0
    for a, b, c in list(combinations(nums, 3)):
        temp_sum = a + b + c
        if isPrime(temp_sum) == True:
            answer += 1
    return answer