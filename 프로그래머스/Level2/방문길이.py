# https://programmers.co.kr/learn/courses/30/lessons/49994

def solution(dirs):
    history = dict()
    now = (0, 0)
    for dir in dirs:
        x, y = now
        if dir == 'U':
            if y + 1 <= 5:
                now = (x, y + 1)
                if (x,y,x,y+1) not in history:
                    history[(x,y,x,y+1)] = True
        elif dir == 'D':
            if y - 1 >= -5:
                now = (x, y - 1)
                if (x,y-1,x,y) not in history:
                    history[(x,y-1,x,y)] = True
        elif dir == 'R':
            if x + 1 <= 5:
                now = (x + 1, y)
                if (x,y,x+1,y) not in history:
                    history[(x,y,x+1,y)] = True
        elif dir == 'L':
            if x - 1 >= -5:
                now = (x - 1, y)
                if (x-1,y,x,y) not in history:
                    history[(x-1,y,x,y)] = True
    return len(history)