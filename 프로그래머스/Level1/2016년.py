def solution(a, b):
    months = [0,31,29,31,30,31,30,31,31,30,31,30,31]
    days = ['FRI', 'SAT', 'SUN', 'MON', 'TUE', 'WED', 'THU']
    total_days = sum(months[1 : a]) + b - 1
    answer = days[total_days % 7]
    return answer