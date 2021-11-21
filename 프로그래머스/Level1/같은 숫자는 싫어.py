# https://programmers.co.kr/learn/courses/30/lessons/12906

def solution(arr):
    temp = arr[0]
    answer = [temp]
    for i in range(1, len(arr)):
        if temp == arr[i]:
            continue
        temp = arr[i]
        answer.append(temp)
    return answer