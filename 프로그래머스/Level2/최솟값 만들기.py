# https://programmers.co.kr/learn/courses/30/lessons/12941

def solution(A, B):
    A.sort()
    B.sort()
    answer = 0
    j = len(B) - 1
    for i in range(len(A)):
        answer += A[i] * B[j]
        j -= 1
    return answer