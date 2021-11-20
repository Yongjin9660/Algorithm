# https://programmers.co.kr/learn/courses/30/lessons/42576

def solution(participant, completion):
    dic = dict()
    
    for parti in participant:
        if parti in dic:
            dic[parti] += 1
        else:
            dic[parti] = 1
    for com in completion:
        dic[com] -= 1
    
    for key in dic:
        if dic[key] != 0:
            return key