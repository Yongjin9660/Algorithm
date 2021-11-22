# https://programmers.co.kr/learn/courses/30/lessons/17681

def solution(n, arr1, arr2):
    answer = []
    for i in range(n):
        temp1 = bin(arr1[i])[2:]
        temp2 = bin(arr2[i])[2:]
        if len(temp1) < n:
            temp1 = (n - len(temp1)) * '0' + temp1
        if len(temp2) < n:
            temp2 = (n - len(temp2)) * '0' + temp2
        row = ''
        for j in range(n):
            if temp1[j] == '1' or temp2[j] == '1':
                row += '#'
            else:
                row += ' '
        answer.append(row)
    return answer