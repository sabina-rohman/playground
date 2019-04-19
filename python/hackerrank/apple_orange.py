def countApplesAndOranges(s, t, a, b, apples, oranges):
    count_apples = 0
    count_oranges = 0
    sam_house = range(s,(t+1))

    for i in apples:
        if (a + i) in sam_house:
            count_apples += 1
    for i in oranges:
        if (b + i) in sam_house:
            count_oranges += 1

    return(count_apples, count_oranges)
