# https://programmers.co.kr/learn/courses/30/lessons/42888

def solution(record):
    nick = dict()
    for re in record:
        arr = re.split(' ')
        if arr[0] == 'Enter' or arr[0] == 'Change':
            nick[arr[1]] = arr[2]
    answer = []
    for re in record:
        arr = re.split(' ')
        if arr[0] == 'Enter':
            answer.append(nick[arr[1]] + '님이 들어왔습니다.')
        elif arr[0] == 'Leave':
            answer.append(nick[arr[1]] + '님이 나갔습니다.')
    return answer