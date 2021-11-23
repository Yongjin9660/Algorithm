# https://programmers.co.kr/learn/courses/30/lessons/12951

def solution(s):
    words = s.split(' ')
    answer = ''
    for word in words:
        for i in range(len(word)):
            if word[i].isalpha() == False:
                answer += word[i]
                continue
            if i == 0:
                answer += word[i].upper()
            else:
                answer += word[i].lower()
        answer += ' '
    return answer[:-1]