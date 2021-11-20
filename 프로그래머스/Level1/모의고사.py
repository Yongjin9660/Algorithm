# https://programmers.co.kr/learn/courses/30/lessons/42840

def solution(answers):
    answer = []
    
    answer_1 = [1,2,3,4,5]
    answer_2 = [2,1,2,3,2,4,2,5]
    answer_3 = [3,3,1,1,2,2,4,4,5,5]
    
    score_a = 0
    score_b = 0
    score_c = 0
    idx_1 = 0
    idx_2 = 0
    idx_3 = 0
    
    for i in range(len(answers)): 
        if answer_1[idx_1] == answers[i]:
            score_a += 1
        if answer_2[idx_2] == answers[i]:
            score_b += 1
        if answer_3[idx_3] == answers[i]:
            score_c += 1
        idx_1 = (idx_1 + 1) % 5
        idx_2 = (idx_2 + 1) % 8
        idx_3 = (idx_3 + 1) % 10
    max_score = max(score_a, score_b, score_c)
    if max_score == score_a:
        answer.append(1)
    if max_score == score_b:
        answer.append(2)
    if max_score == score_c:
        answer.append(3)
    return answer