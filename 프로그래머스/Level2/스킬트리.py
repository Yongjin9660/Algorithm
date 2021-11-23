# https://programmers.co.kr/learn/courses/30/lessons/49993

def solution(skill, skill_trees):
    answer = 0
    for s in skill_trees:
        temp = ''
        for i in s:
            if i in skill:
                temp += i
        if skill.find(temp) == 0:
            answer += 1
    return answer