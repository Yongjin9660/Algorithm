# https://programmers.co.kr/learn/courses/30/parts/12244

def solution(name):
    name = list(name)
    answer = 0
    idx = 0
    
    while True:
        answer += min(ord(name[idx]) - ord('A'), ord('Z') - ord(name[idx]) + 1)
        name[idx] = 'A'
        if name.count('A') == len(name):
            return answer
        left, right = 1, 1
        for i in range(1, len(name)):
            if name[idx-i] == 'A':
                left += 1
            else:
                break
        for i in range(1, len(name)):
            if name[idx+i] == 'A':
                right += 1
            else:
                break
        if left < right:
            answer += left
            idx -= left
        else:
            answer += right
            idx += right
    return answer