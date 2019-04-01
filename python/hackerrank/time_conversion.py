def timeConversion(s):
    is_am = s[-2:] == 'AM'
    is_12 = s[:2] == '12'
    s = s[:-2]
    if is_am:
        if is_12:
            time_part_broken = s.split(':')
            time_part_broken[0] = '00'
            return ':'.join(time_part_broken)
        else:
            return s
    else:
        if is_12:
            return s
        else:
            time_part_broken = s.split(':')
            hour = int(time_part_broken[0])
            hour = hour + 12
            time_part_broken[0] = str(hour)
            return ':'.join(time_part_broken)

    # if is_am:
    #     return s[:-2]
    # elif is_am and is_12:
    #     time_part = s[:-2]
    #     time_part_broken = time_part.split(':')
    #     time_part_broken[0] = '00'
    #     return ':'.join(time_part_broken)
    # elif not is_am and is_12:
    #     time_part = s[:-2]
    #     return time_part
    # else:
    #     time_part = s[:-2]
    #     time_part_broken = time_part.split(':')
    #     hour = int(time_part_broken[0])
    #     hour = hour + 12
    #     time_part_broken[0] = str(hour)
    #     return ':'.join(time_part_broken)