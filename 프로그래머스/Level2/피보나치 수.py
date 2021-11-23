# https://programmers.co.kr/learn/courses/30/lessons/12945

def solution(n):
    answer = []
    for i in range(n+1):
        if i==0 or i==1:
            answer.append(i)
        else:
            temp = answer[i-1] + answer[i-2]
            answer.append(temp%1234567)
    return answer[-1]