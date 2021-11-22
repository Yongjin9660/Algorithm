# https://programmers.co.kr/learn/courses/30/lessons/42889

def solution(N, stages):
    temp = []
    len_stages = len(stages)
    for i in range(1, N + 1):
        cnt = stages.count(i)
        if cnt == 0:
            fail = 0
        else:
            fail = cnt / len_stages
        temp.append((i, fail))
        len_stages -= cnt    
    temp.sort(key=lambda x:x[1], reverse=True)
    answer = []
    for a, b in temp:
        answer.append(a)
    return answer