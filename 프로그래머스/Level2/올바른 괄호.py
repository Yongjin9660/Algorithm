# https://programmers.co.kr/learn/courses/30/lessons/12909

def solution(s):
    stack = []
    for i in s:
        if len(stack) == 0:
            stack.append(i)
            continue
        if stack[-1] == '(' and i == ')':
            stack.pop()
            continue
        stack.append(i)
    if len(stack) == 0:
        return True
    return False