# https://programmers.co.kr/learn/courses/30/lessons/42584

def solution(prices):
    answer = [0 for _ in range(len(prices))]
    stack = []

    for i, price in enumerate(prices):
        while stack and price < prices[stack[-1]]:
            temp = stack.pop()
            answer[temp] = i - temp
        stack.append(i)
    while stack:
        temp = stack.pop()
        answer[temp] = len(prices) - 1 - temp
    return answer