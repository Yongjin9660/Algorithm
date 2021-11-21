# https://programmers.co.kr/learn/courses/30/lessons/42586

def solution(progresses, speeds):
    days = []
    for i in range(len(progresses)):
        now = 100 - progresses[i]
        day = now // speeds[i]
        if now % speeds[i] != 0:
            day += 1
        days.append(day)
    answer = []
    cnt = 0
    temp = days[0]
    for i in days:
        if temp >= i:
            cnt += 1
        else:
            answer.append(cnt)
            temp = i
            cnt = 1
    if cnt != 0:
        answer.append(cnt)
    return answer