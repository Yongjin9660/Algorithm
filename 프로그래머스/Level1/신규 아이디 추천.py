# https://programmers.co.kr/learn/courses/30/lessons/72410

def solution(new_id):
    new_id = new_id.lower()
    answer = ''
    for i in new_id:
        if i.isdigit() or i.isalpha() or i in ['-','_','.']:
            answer += i
    while '..' in answer:
        answer = answer.replace('..', '.')
    if answer[0] == '.' and len(answer) > 1:
        answer = answer[1:]
    elif answer[0] == '.':
        answer = ''
    if len(answer) != 0 and answer[len(answer)-1]=='.':
        answer = answer[:len(answer)-1]
    if len(answer) == 0:
        answer = 'a'
    if len(answer) >= 16:
        answer = answer[:15]
        if answer[14] == '.':
            answer = answer[:14]
    while len(answer) < 3:
        answer += answer[len(answer) - 1]
    return answer