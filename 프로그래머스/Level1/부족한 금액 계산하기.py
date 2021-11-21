# https://programmers.co.kr/learn/courses/30/lessons/82612

def solution(price, money, count):
    s = 0
    for i in range(1, count + 1):
        s += price * i
    if s <= money:
        return 0
    return s - money