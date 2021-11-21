# https://programmers.co.kr/learn/courses/30/lessons/42839

from itertools import permutations

def solution(numbers):
    def isPrime(n):
        if n in (0, 1):
            return False
        for i in range(2, n):
            if n % i == 0:
                return False
        return True
    
    prime_set = set()
    number_list = list(numbers)
    for i in range(1, len(number_list) + 1):
        for numbers in list(permutations(number_list, i)):
            temp_num = ''
            for a in numbers:
                temp_num += a
            temp_num = int(temp_num)
            if isPrime(temp_num):
                prime_set.add(temp_num)
    return len(prime_set)