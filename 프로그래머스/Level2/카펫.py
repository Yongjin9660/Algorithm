# https://programmers.co.kr/learn/courses/30/lessons/42842

def solution(brown, yellow):
    def brown_number(a, b):
        return 2 * a + 2 * (b - 2)
    total = brown + yellow
    possible_set = set()
    for i in range(1, int(total ** (1/2)) + 1):
        if total % i == 0:
            possible_set.add(i)
    for a in possible_set:
        if brown == brown_number(a, total//a):
            if a >= total // a:
                return [a, total // a]
            return [total // a, a]