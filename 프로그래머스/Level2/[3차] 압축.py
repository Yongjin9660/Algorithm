# https://programmers.co.kr/learn/courses/30/lessons/17684

def solution(msg):
    dic = {'A':1, 'B':2,'C':3,'D':4,'E':5,'F':6,'G':7,'H':8,'I':9,'J':10,'K':11,'L':12,'M':13,'N':14,'O':15,'P':16,'Q':17,'R':18,'S':19,'T':20,'U':21,'V':22,'W':23,'X':24,'Y':25,'Z':26}
    dicLen = 26
    answer = []
    msgLen = len(msg)
    i = 0
    while i < msgLen:
        word = ''
        end = i + 1
        while end <= msgLen:
            temp = msg[i:end]
            if temp in dic:
                word = temp
                end += 1
                continue
            dicLen += 1
            dic[temp] = dicLen
            break
        i += len(word)
        answer.append(dic[word])
    return answer