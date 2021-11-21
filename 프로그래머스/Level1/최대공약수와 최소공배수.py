# https://programmers.co.kr/learn/courses/30/lessons/12940

def solution(n, m):
    min_num = min(n, m)
    gcd = -1
    for i in range(min_num, 0,-1):
        if n % i == 0 and m % i == 0:
            gcd = i
            break
    return [gcd, gcd * (n // gcd) * (m // gcd)]