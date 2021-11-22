# https://programmers.co.kr/learn/courses/30/lessons/64061

def solution(board, moves):
    n = len(board)
    new_board = [([0] * n) for _ in range(n)]
    for i in range(n):
        for j in range(n):
            new_board[j][i] = board[i][j]
    result = []
    answer = 0
    for move in moves:
        move -= 1
        temp = new_board[move]
        empty = True
        for i in range(n):
            if temp[i] != 0:
                empty = False
                break
        if empty == True:
            continue
        get = temp[i]
        if len(result) != 0 and result[-1] == get:
            answer += 2
            result.pop()
        else:
            result.append(get)
        temp[i] = 0
    return answer