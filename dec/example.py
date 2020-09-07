from functools import wraps

def a_new_decorator(a_function):

  @wraps(a_function)
  def wrapper_function():
    print('I am doing something before executing a_function')
    a_function()
    print('I am doing something after executing a_function')
  return wrapper_function

@a_new_decorator
def a_function_that_requires_a_decorator():
  print('I am the function that requires the decorator')

# a_function_that_requires_a_decorator()

print(a_function_that_requires_a_decorator.__name__)

# a_function_that_requires_a_decorator = a_new_decorator(a_function_that_requires_a_decorator)

# a_function_that_requires_a_decorator()
