print("Hello Python!")

bicycles = ['trek', 'cannondale', 'redline', 'specialized']
print(bicycles)
print(bicycles[0])
print(bicycles[0].title())
print(bicycles[-1]) #returns last item

motorcycles = ['honda', 'yamaha', 'suzuki']
print(motorcycles)
motorcycles.append('ducati') 
print(motorcycles)

motorcycles = ['honda', 'yamaha', 'suzuki']
motorcycles.insert(0, 'ducati') 
print(motorcycles)

motorcycles = ['honda', 'yamaha', 'suzuki']
print(motorcycles)
del motorcycles[0] 
print(motorcycles)

popped_motorcycle = motorcycles.pop() 
print(motorcycles)
print(popped_motorcycle)

first_owned = motorcycles.pop(0)

motorcycles = ['honda', 'yamaha', 'suzuki']
motorcycles.remove('honda')
print(motorcycles)

cars = ['bmw', 'audi', 'toyota', 'subaru'] 
cars.sort()
print(cars)
print(sorted(cars)) #temporary sorting

cars.reverse()
len(cars)

magicians = ['alice', 'david', 'carolina'] 
for magician in magicians:
	print(magician)

for value in range(1,5):
    print(value)

numbers = list(range(1,6))
print(numbers)

even_numbers = list(range(2,11,2))
print(even_numbers)

squares = []
for value in range(1,11): 
	square = value**2
	#squares.append(value**2)
	squares.append(square)

print(squares)

digits = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
print(min(digits))
print(max(digits))
print(sum(digits))


squares = [value**2 for value in range(1,11)]
print(squares)

players = ['charles', 'martina', 'michael', 'florence', 'eli']
print(players[0:3])


print(players[1:4])

print(players[:4])

print(players[2:])

print(players[-3:])

for player in players[:3]:
       print(player.title())

my_foods = ['pizza', 'falafel', 'carrot cake'] 
friend_foods = my_foods[:]

# This doesn't work: 
friend_foods = my_foods

dimensions = (200, 50) 
print(dimensions[0]) 
print(dimensions[1])

dimensions = (200, 50)
for dimension in dimensions:
	print(dimension)

print("Original dimensions:") 
for dimension in dimensions:
	print(dimension)
dimensions = (400, 100) 
print("\nModified dimensions:")
for dimension in dimensions:
	print(dimension)

cars = ['audi', 'bmw', 'subaru', 'toyota']
for car in cars:
	if car == 'bmw':
		print(car.upper())
	else:
		print(car.title())

requested_toppings = ['mushrooms', 'onions', 'pineapple'] 
'mushrooms' in requested_toppings

banned_users = ['andrew', 'carolina', 'david']
user = 'marie'
if user not in banned_users:
	print(user.title() + ", you can post a response if you wish.")

age = 12
if age < 4:
	price = 0 
elif age < 18:
	price = 5 
else:
	price = 10

alien_0 = {'color': 'green', 'points': 5}
print(alien_0['color'])
print(alien_0['points'])

user_0 = {'username': 'efermi','first': 'enrico','last': 'fermi',}
for key, value in user_0.items():
	print("\nKey: " + key)
	print("Value: " + value)

favorite_languages = {'jen': ['python', 'ruby'],'sarah': ['c'],'edward': ['ruby', 'go'],'phil': ['python', 'haskell'],}
for name, languages in favorite_languages.items():
	print("\n" + name.title() + "'s favorite languages are:")
	for language in languages: 
		print("\t" + language.title())

users = {
    'aeinstein': {
        'first': 'albert',
        'last': 'einstein',
        'location': 'princeton',
        }, 
        'mcurie': {
           'first': 'marie',
           'last': 'curie',
           'location': 'paris',
           },
         }
