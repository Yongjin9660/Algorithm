# https://programmers.co.kr/learn/courses/30/lessons/17686

def solution(files):
    temp = []
    for file in files:
        head, number, tail = '', '', ''
        check = False
        for i in range(len(file)):
            if file[i].isdigit() == True:
                number += file[i]
                check = True
            elif check == False:
                head += file[i]
            else:
                tail = file[i:]
                break
        temp.append((head, number, tail))
    temp.sort(key=lambda x: (x[0].upper(), int(x[1])))
    return [''.join(t) for t in temp]