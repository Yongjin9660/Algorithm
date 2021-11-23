# https://programmers.co.kr/learn/courses/30/lessons/12924

def solution(n):
    answer = 1
    numbers = [i for i in range(1, n)]
    for i in range(len(numbers) - 1):
        for j in range(i+1, len(numbers)):
            temp_sum = sum(numbers[i : j])
            if n == temp_sum:
                answer += 1
                break
            if n < temp_sum:
                break
    return answer