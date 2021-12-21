# 신용카드 판별
# https://www.acmicpc.net/problem/14726

T = int(input())
for _ in range(T):
    card = input()
    total = 0
    for i, num in enumerate(card):
        if i % 2 == 0:
            tmp = int(num) * 2
            if tmp >= 10:
                total += tmp // 10 + tmp % 10
            else:
                total += tmp
        else:
            total += int(num)
    if total % 10 == 0:
        print('T')
    else:
        print('F')