def party_time(hour, min):
    hour_pos = ((hour / 12) * 360) + (((1 / 12) * (min / 60)) * 360)
    min_pos = (min / 60) * 360
    angle = min_pos - hour_pos
    if abs(angle) > 180 and abs(angle) < 360:
        angle = angle - 360
    elif abs(angle) == 360:
        return 0
    return abs(angle)

def what_is_time(time):
    timeList = time.split(":")
    hour = timeList[0]
    min = timeList[1]
    hourInt = int(hour)
    minInt = int(min)
    return party_time(hourInt, minInt)

print(what_is_time("12:00"))
print(what_is_time("1:22"))
print(what_is_time("5:27"))
print(what_is_time("9:54"))