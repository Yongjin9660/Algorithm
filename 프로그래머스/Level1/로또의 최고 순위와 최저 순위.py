# https://programmers.co.kr/learn/courses/30/lessons/77484

def solution(lottos, win_nums):
    cnt = 0
    zero_cnt = lottos.count(0)
    for num in lottos:
        if num in win_nums:
            cnt += 1
    result = [6,6,5,4,3,2,1]
    answer = [result[cnt+zero_cnt], result[cnt]]
    return answer