# https://programmers.co.kr/learn/courses/30/lessons/42885

def solution(people, limit):
    people.sort()
    left_idx = 0
    right_idx = len(people) - 1
    answer = 0
    while left_idx <= right_idx:
        if people[left_idx] + people[right_idx] <= limit:
            answer += 1
            left_idx += 1
            right_idx -= 1
        else:
            answer += 1
            right_idx -= 1
    return answer