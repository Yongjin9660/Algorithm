# https://programmers.co.kr/learn/courses/30/lessons/67256

def solution(numbers, hand):
    def findDis(number, direc):
        x1, y1 = pos[str(number)]
        x2, y2 = direc
        return abs(x1-x2) + abs(y1-y2)
    
    pos = {'1':(1,1), '2':(1,2), '3':(1,3), 
           '4':(2,1), '5':(2,2), '6':(2,3), 
           '7':(3,1), '8':(3,2), '9':(3,3),
           '*':(4,1), '0':(4,2), '#':(4,3),
          }
    
    left_pos = pos['*']
    right_pos = pos['#']
    answer = ''
    for number in numbers:
        if number in [1,4,7]:
            answer += 'L'
            left_pos = pos[str(number)]
        elif number in [3,6,9]:
            answer += 'R'
            right_pos = pos[str(number)]
        else:
            left_dis = findDis(number, left_pos)
            right_dis = findDis(number, right_pos)
            if left_dis > right_dis:
                answer += 'R'
                right_pos = pos[str(number)]
            elif left_dis < right_dis:
                answer += 'L'
                left_pos = pos[str(number)]
            else:
                if hand == 'right':
                    answer += 'R'
                    right_pos = pos[str(number)]
                else:
                    answer += 'L'
                    left_pos = pos[str(number)]
    return answer