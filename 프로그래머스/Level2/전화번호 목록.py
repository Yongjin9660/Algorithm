# https://programmers.co.kr/learn/courses/30/lessons/42577

def solution(phone_book):
    phone_dict = dict.fromkeys(phone_book, 1)
    for phone_number in phone_book:
        temp = ''
        for n in phone_number:
            temp += n
            if temp != phone_number and temp in phone_dict:
                return False
    return True