from random import randint



def play_cow_game(hidden_word):
    count = 0
    while True:
        user_word = input("Enter your number: ")
        #count = is_cow_bull(user_word,hidden_word)
        cow_count,bull_count = is_cow_bull(user_word,hidden_word)
        count += 1
        if cow_count == 4:
            print(f"You won. {count} attempts were taken.")
            break
        else:
            print(f"{cow_count} cow, {bull_count} bull")





def is_cow_bull(user_word,hidden_word):
    cow_count = 0
    bull_count = 0
    for i, c in enumerate(user_word):
        if c == hidden_word[i]:
            cow_count += 1
        elif c in hidden_word:
            bull_count += 1
    return (cow_count,bull_count)


if __name__ == "__main__":
    hidden_word = str(randint(1000, 9999))
    play_cow_game(hidden_word)