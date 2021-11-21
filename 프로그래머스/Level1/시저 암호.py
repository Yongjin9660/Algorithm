# https://programmers.co.kr/learn/courses/30/lessons/12926

def solution(s, n):
    answer = ''
    for a in s:
        if a == ' ':
            answer += a
            continue
        temp = ord(a)
        if 65 <= temp <= 90:
            temp += n
            if 65 <= temp <= 90:
                answer += chr(temp)
            else:
                answer += chr(temp - 26)
            continue
        elif 97 <= temp <= 122:
            temp += n
            if 97 <= temp <= 122:
                answer += chr(temp)
            else:
                answer += chr(temp - 26)
    return answer