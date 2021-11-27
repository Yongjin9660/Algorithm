# https://programmers.co.kr/learn/courses/30/lessons/42579

def solution(genres, plays):
    dic = dict()
    total_play = dict()
    for i in range(len(genres)):
        if genres[i] in dic:
            dic[genres[i]].append((i, plays[i]))
            total_play[genres[i]] += plays[i]
        else:
            dic[genres[i]] = [(i,plays[i])]
            total_play[genres[i]] = plays[i]
    sorted_arr = sorted(total_play.items(), key=lambda x:x[1],reverse=True)
    answer = []
    for genre, p in sorted_arr:
        temp_arr = dic[genre]
        temp_arr.sort(key=lambda x:x[1], reverse=True)
        temp_cnt = 0
        for num, pp in temp_arr:
            answer.append(num)
            temp_cnt += 1
            if temp_cnt == 2:
                break
    return answer