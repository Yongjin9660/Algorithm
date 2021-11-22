# https://programmers.co.kr/learn/courses/30/lessons/17682

def solution(dartResult):
    score = []
    idx = 0
    result_len = len(dartResult)
    while idx < result_len:
        first_star = False
        star = False
        minus = False
        temp = 0
        current = dartResult[idx:idx+2]
        if current == '10':
            cur_score = int(current)
            option = dartResult[idx + 2]
            temp += 3
        else:
            cur_score = int(current[0])
            option = current[1]
            temp += 2
        if idx + temp < result_len:
            if dartResult[idx + temp] == '*':
                if len(score) == 0:
                    first_star = True
                else:
                    star = True
                temp += 1
            elif dartResult[idx + temp] == '#':
                minus = True
                temp += 1
                    
        if option == 'S':
            cur_score **= 1
        elif option == 'D':
            cur_score **= 2
        elif option == 'T':
            cur_score **= 3
        if first_star == True:
            cur_score *= 2
        elif star == True:
            score[-1] *= 2
            cur_score *= 2
        elif minus == True:
            cur_score *= -1
        score.append(cur_score)
        idx += temp
    return sum(score)