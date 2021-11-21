# https://programmers.co.kr/learn/courses/30/lessons/43165

def solution(numbers, target):
    answer = 0
    n = len(numbers)
    stack = [(numbers[0], 0), (-1 * numbers[0], 0)]
    while stack:
        temp, idx = stack.pop()
        if idx < n - 1:
            stack.append((temp + numbers[idx + 1], idx+1))
            stack.append((temp - numbers[idx + 1], idx + 1))
        else:
            if temp == target:
                answer += 1
    return answer