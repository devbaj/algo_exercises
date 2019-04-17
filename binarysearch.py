import math
def binarySearch(arr,val):
    if len(arr) == 0:
        return False
    else:
        mid = trunc(len(arr)/2)
        if arr[mid] == val:
            return True
        else:
            if arr[mid] > val:
                new_arr = arr.slice(0,mid)
            elif arr[mid] < val:
                new_arr = arr.slice(mid+1, len(arr))
            else:
                return True
            return binarySearch(new_arr)