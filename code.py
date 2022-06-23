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
# print(res)


# REMOVE EVEN NUMBERS FROM A LIST(APPROACH 1)
def removeEven(lst):
    oddNum = []
    for i in lst:
        if(i % 2 == 0):
            pass
        else:
            oddNum.append(i)
    return oddNum

result = removeEven([119, 15, 196, 55])
print(result)

# REMOVE EVEN NUMBERS FROM A LIST(APPROACH 2)
# newList = [expression(i) for i in oldList if filter(i)]
def remove_even(lst):
    # List comprehension to iter aover List and add to new list if not even
    return [number for number in lst if number % 2 != 0]

# print(remove_even([3, 2, 41, 3, 34]))


# listItems = [1, 3, 4, 5]
# listItems2 = [2, 6, 7, 8]
# listItems.sort()
# listItems2.sort()
# mergeLists = listItems + listItems2
# mergeLists.sort()
# print(mergeLists)

def sortList():
    lst = [2,4,3,6,5,1]
    startIndex = 0
    endIndex = len(lst) - 1

    while(startIndex < endIndex):
        swap(lst, startIndex, endIndex)
        startIndex=+1
        endIndex=-1
    return lst

newList = []
def swap(newList, startIndex, endIndex):
    temp = newList[startIndex]
    newList[startIndex] = newList[endIndex]
    newList[endIndex] = temp

ans = sortList()
# print(ans)

def merge_arrays(lst1, lst2):
    ind1 = 0  # Creating 2 new variable to track the 'current index'
    ind2 = 0
    # While both indeces are less than the length of their lists
    while ind1 < len(lst1) and ind2 < len(lst2):
        # If the current element of list1 is greater
        # than the current element of list2
        if(lst1[ind1] > lst2[ind2]):
            # insert list2's current index to list1
            lst1.insert(ind1, lst2[ind2])
            ind1 += 1  # increment indices
            ind2 += 1
        else:
            ind1 += 1

    if ind2 < len(lst2):  # Append whatever is left of list2 to list1
        lst1.extend(lst2[ind2:])
    return lst1


# print(merge_arrays([4, 5, 6], [-2, -1, 0, 7]))


def sortedMergedList(list1, list2):
    newList = list1 + list2
    newList.sort()
    return newList

# print(sortedMergedList([4, 5, 6], [-2, -1, 0, 7]))

class Sample():
    pass