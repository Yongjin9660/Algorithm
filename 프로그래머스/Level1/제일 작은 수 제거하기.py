# https://programmers.co.kr/learn/courses/30/lessons/12935

def solution(arr):
    if arr == [10] or len(arr) == 1:
        return [-1]
    min_value = min(arr)
    arr.remove(min_value)
    return arr