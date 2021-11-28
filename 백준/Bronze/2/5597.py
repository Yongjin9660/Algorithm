# 과제 안내신 분..?
# https://www.acmicpc.net/problem/5597

stu = [i for i in range(1, 31)]

for _ in range(28):
  temp = int(input())
  stu.remove(temp)

print(min(stu))
print(max(stu))