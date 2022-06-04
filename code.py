# Python3 code to implement iterative Binary
# Search.
 
# It returns location of x in given array arr
# if present, else returns -1
 
 
def binarySearch(arr, l, r, x):
 
    while l <= r:
 
        mid = l + (r - l) // 2

        # print(mid)
 
        # Check if x is present at mid
        if arr[mid] == x:
            return mid
 
        # If x is greater, ignore left half
        elif arr[mid] < x:
            l = mid + 1
 
        # If x is smaller, ignore right half
        else:
            r = mid - 1
 
    # If we reach here, then the element
    # was not present
    return -1
 
 
# Driver Code
arr = [6, 7, 1, 2, 3, 4, 5, 6, 3, 9]
x = 3


 
# Function call
# result = binarySearch(arr, 0, len(arr)-1, x)  #note 0 here is the index of the first element while len(arr)-1 is the index of the last element
 
# if result != -1:
#     print("Element is present at index % d" % result)
#     print(result)
# else:
#     print("Element is not present in array")


def binSearch(array, target):
    start = 0
    end = len(array) - 1
    # print(start)
    # print(end)
    while(start <= end):
        mid = start + (end - start) // 2
        # print(mid)

        if(array[mid] == target):
            return mid
        elif(array[mid] > target):
            end = mid - 1
            # print("End -> ",end)
        else:
            start = mid + 1
            # print("Start -> ",start)
    return -1

array = [2,4,6,9,10,15]
target = 15
answer = binSearch(array, target)

# print("The array first element is -> ",array[0])

# if (answer != -1):
    # print(answer)
# else:
    # print("Not found")


    # Find the min element index of an array
def midElementIndex(arr):
    low = arr[0]
    high = len(arr) - 1
    while(low < high):
        middle = low + (high - low) // 2
        if(arr[middle] < arr[middle] - 1):
            return middle
        elif(arr[middle] > arr[low] and arr[middle] > arr[high]):
            low = middle + 1
        else:
            high = middle - 1

arr = [2,4,6,9,10,15]
res = midElementIndex(arr)
print(res)