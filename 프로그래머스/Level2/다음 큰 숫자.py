# https://programmers.co.kr/learn/courses/30/lessons/12911

def solution(n):
    n_bin = bin(n)[2:]
    count1 = n_bin.count('1')
    answer = n + 1
    while True:
        temp_bin = bin(answer)[2:]
        if count1 == temp_bin.count('1'):
            break
        answer += 1
    return answer