arr = [20, 5, 7, 25]
element = 5
def search(arr,element):
    for i,value in enumerate(arr):
        if element == value:
            return i
    return -1    
print("Array Searched:", arr)
print("Searching for:", element)
print("Searched index=", search(arr, element))

