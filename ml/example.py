#!/usr/bin/env python3

import numpy as np

list1 = [1, 2, 3, 4]
one_dimensional_array = np.array(list1)


c = one_dimensional_array + 6


list2 = [[1,2,3], 
         [4,5,6]]

arr2 = np.array(list2, dtype='int')

f = arr2[:1, :2]

print(f)