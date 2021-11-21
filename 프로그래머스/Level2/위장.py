# https://programmers.co.kr/learn/courses/30/lessons/42578

def solution(clothes):
    clothes_dict = dict()
    for name, kind in clothes:
        if kind in clothes_dict:
            clothes_dict[kind].append(name)
        else:
            clothes_dict[kind] = [name]
    answer = 1
    for value in clothes_dict.values():
        answer *= (len(value) + 1)
    answer -= 1
    return answer