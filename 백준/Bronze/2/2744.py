# 대소문자 바꾸기
# https://www.acmicpc.net/problem/2744

s = input()
answer = ''
for i in s:
  if ord(i) >= 97:
    answer += i.upper()
  else:
    answer += i.lower()
  
print(answer)