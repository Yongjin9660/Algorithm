# https://programmers.co.kr/learn/courses/30/lessons/17683

def replaceStr(s):
    return s.replace('C#', 'c').replace('D#', 'd').replace('F#', 'f').replace('G#', 'g').replace('A#', 'a')

def getMin(start, end):
    startArr = start.split(':')
    endArr = end.split(':')
    return 60 * (int(endArr[0]) - int(startArr[0])) + int(endArr[1]) - int(startArr[1])

def getTotalMelody(melody, time):
    melodyLen = len(melody)
    n = time // melodyLen
    res = time % melodyLen
    return melody * n + melody[:res]

def solution(m, musicinfos):
    m = replaceStr(m)
    answer = []
    for info in musicinfos:
        arr = info.split(',')
        playMin = getMin(arr[0], arr[1])
        if m in getTotalMelody(replaceStr(arr[3]), playMin):
            answer.append((arr[2], playMin))
    if len(answer) == 0:
        return '(None)'
    answer.sort(key=lambda x:x[1], reverse=True)
    return answer[0][0]