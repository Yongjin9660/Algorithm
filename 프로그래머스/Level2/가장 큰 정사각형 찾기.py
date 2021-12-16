# https://programmers.co.kr/learn/courses/30/lessons/12905?language=python3

def solution(board):
    row = len(board)
    col = len(board[0])
    for i in range(1, row):
        for j in range(1, col):
            if(board[i][j] != 0):
                board[i][j] = min(board[i-1][j-1], board[i][j-1], board[i-1][j]) + 1
    size = 0
    for arr in board:
        size = max(size, max(arr))
    return size ** 2