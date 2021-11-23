# https://programmers.co.kr/learn/courses/30/lessons/12953

from math import gcd

def solution(arr):
    if len(arr) == 1:
        return arr[0]
    answer = arr[0]
    for i in range(1, len(arr)):
        temp_gcd = gcd(answer, arr[i])
        answer = temp_gcd * (answer // temp_gcd) * (arr[i] // temp_gcd)
    return answer