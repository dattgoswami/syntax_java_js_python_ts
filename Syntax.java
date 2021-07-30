import java.awt.List;
import java.io.File;
import java.io.PrintWriter;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.Collection;
import java.util.HashSet;
import java.util.LinkedList;
import java.util.Scanner;
import java.util.Set;

import javax.swing.text.html.HTMLDocument.Iterator;

// a + Math.random() * b -> Returns a random number between a and a + b,excluding a + b.
//book pg 208 method call stack important

//a random lowercase letter is
//(char)('a' + Math.random() * ('z' - 'a' + 1))

//String is a reference type variable and when we create a new string it creates a reference for that variable
//An array reference variable is used to access the elements in an array using an index.
//The declaration of an array variable does not allocate any space in memory for the array. 
//It creates only a storage location for the reference to an array. If a variable does not contain a reference to an array, the value of the variable is null.
//array creation using new keyword assigns the reference of the newly created array to the reference variable
// System.arraycopy(sourceArray, srcPos, targetArray, tarPos, length);
//When passing an array to a method, the reference of the array is passed to the method.

/*
 * Java uses pass-by-value to pass arguments to a method. There are important differences
between passing the values of variables of primitive data types and passing arrays.
■ For an argument of a primitive type, the argument’s value is passed.
■ For an argument of an array type, the value of the argument is a reference to an array; this reference value 
is passed to the method. Semantically, it can be best described as pass-by-sharing, that is, the array in the method 
is the same as the array being passed. Thus, if you change the array in the method, you will see the change outside the method.
 */
//Arrays are objects in Java (objects are introduced in Chapter 9). The JVM stores the objects in an area of memory called the 
//heap, which is used for dynamic memory allocation.

//Method calls stored on stack.

//public static void printMax(double... numbers) variable args

/*
 *  public class GenericMethodDemo {
 public static void main(String[] args ) {
		
		Integer[] integers = {1, 2, 3, 4, 5};
		String[] strings = {"London", "Paris", "New York", "Austin"};
		GenericMethodDemo.<Integer>print(integers);
		GenericMethodDemo.<String>print(strings);
	}
	public static <E> void print(E[] list) { 
		for (int i = 0; i < list.length; i++){
			System.out.print(list[i] + " "); 
			}
			
		System.out.println();
 	}
 }
 */

public class Syntax {

	public static void main(String[] args) {
		System.out.println("here");
		Scanner input = new Scanner(System.in);
		double value = input.nextDouble();
		int num = input.nextInt();	
		//next() reads a string that ends before a whitespace character.	
		//nextLine() reads a line of text (i.e., a string ending with the Enter key pressed).
		final double PI = 3.14159; //declare a constant
		//variable types
		//byte, short, int, long
		//float, double
		//char
		
		//(type)exp e.g. (int)exp
		
		//Types of Errors
		//Syntax errors or compile errors occur during compilation.
		//Runtime errors are errors that cause a program to terminate abnormally.
		//Logic errors occur when a program does not perform the way it was intended to.
		
		//^ exclusive or logical exclusion
		
		/*status can be character as well => case 'a'
		switch (status) {
		case 0: 
		//do something
		break;
		case 1: 
		//do something
		break;
		default: 
		//do something else
		}*/
		
		//Generates random single-digit integer
		//(int)(Math.random() * 10);

		//The break keyword immediately ends the innermost loop, which contains the break.
		//The continue keyword only ends the current iteration
		
		//https://stackoverflow.com/questions/40480/is-java-pass-by-reference-or-pass-by-value ans 3 is best, it passes by value not by reference
		/*Java does manipulate objects by reference, and all object variables are references. 
		However, Java doesn't pass method arguments by reference; it passes them by value.*/
		//Liang
		/*When you pass an array argument to a method, you are actually passing the reference of
		the array; that is, the called method can modify the elements in the caller’s original array.*/
		/*All parameters are passed to methods using pass-by-value. For a parameter of a primitive
		type, the actual value is passed; for a parameter of a reference type, the reference
		for the object is passed.*/
		
		/*Math.exp(1) returns 2.71828
		Math.log(Math.E) returns 1.0
		Math.log10(10) returns 1.0
		Math.pow(2, 3) returns 8.0
		Math.sqrt(4) returns 2.0*/
		/** x is rounded up to its nearest integer. This integer is
		* returned as a double value. */
		//ceil
		/** x is rounded down to its nearest integer. This integer is
		* returned as a double value. */
		//floor
		/** x is rounded to its nearest integer. If x is equally close
		* to two integers, the even one is returned as a double. */
		//rint
		//Math. ceil(), floor(), rint(), round(), max(), min(), abs()
		/*
		Math.ceil(2.1) returns 3.0
		Math.floor(2.1) returns 2.0
		Math.rint(2.1) returns 2.0
		Math.rint(-2.0) returns –2.0
		Math.rint(-2.1) returns -2.0
		Math.rint(2.5) returns 2.0
		Math.rint(3.5) returns 4.0
		Math.round(2.6f) returns 3 // Returns int
		Math.round(2.0) returns 2 // Returns long
		Math.round(-2.0f) returns -2
		Math.max(2, 3) returns 3
		Math.max(2.5, 3) returns 3.0
		Math.min(2.5, 3.6) returns 2.5
		Math.abs(-2) returns 2
		Math.abs(-2.1) returns 2.1*/

		/*Method abstraction is achieved by separating the use of a method from its implementation.
		The client can use a method without knowing how it is implemented. The
		details of the implementation are encapsulated in the method and hidden from the
		client who invokes the method. This is known as information hiding or
		encapsulation.*/

		int[] array = new int[10];
		int[][] matrix = new int[5][4];
		//matrix.length = rows
		//matrix[0].length = columns
		//string functions
		/*+equals(s1: String): boolean - Returns true if this string is equal to string s1.
		+equalsIgnoreCase(s1: String): boolean - Returns true if this string is equal to string s1 case insensitive.
		+compareTo(s1: String): int - Returns an integer greater than 0, equal to 0, or less than 0
		to indicate whether this string is greater than, equal to, or less than s1.
		+compareToIgnoreCase(s1: String): int - Same as compareTo except that the comparison is case insensitive.
		+regionMatches(index: int, s1: String, s1Index: int, len: int): boolean - Returns true if the specified subregion of this string exactly
		matches the specified subregion in string s1.
		+regionMatches(ignoreCase: boolean, index: int, s1: String, s1Index: int, len: int): boolean - Same as the preceding method except that you can specify
		whether the match is case sensitive.
		+startsWith(prefix: String): boolean Returns true if this string starts with the specified prefix.
		+endsWith(suffix: String): boolean Returns true if this string ends with the specified suffix. */
		//s.charAt(index)
		//s1.concat(s2);
		//+substring(beginIndex: int): String
		//+substring(beginIndex: int, endIndex: int): String
		/*
		+toLowerCase(): String Returns a new string with all characters converted to lowercase.
		+toUpperCase(): String Returns a new string with all characters converted to uppercase.
		+trim(): String Returns a new string with blank characters trimmed on both sides.
		+replace(oldChar: char, newChar: char): String - Returns a new string that replaces all matching characters in this
		string with the new character.
		+replaceFirst(oldString: String, newString: String): String - Returns a new string that replaces the first matching substring in this string 
		with the new substring.
		+replaceAll(oldString: String, newString: String): String - Returns a new string that replaces all matching substrings in this
		string with the new substring.	
		+split(delimiter: String): String[] - Returns an array of strings consisting of the substrings split by the delimiter.*/
		//"Java is fun".matches("Java.*")
		/*
		+indexOf(ch: char): int
		+indexOf(ch: char, fromIndex: int): int
		+indexOf(s: String): int	
		+indexOf(s: String, fromIndex: int): int		
		+lastIndexOf(ch: int): int		
		+lastIndexOf(ch: int, fromIndex: int): int		
		+lastIndexOf(s: String): int	
		+lastIndexOf(s: String, fromIndex: int): int
		*/
		
		//".toCharArray();
		
		/*
		+valueOf(c: char): String	
		+valueOf(data: char[]): String		
		+valueOf(d: double): String		
		+valueOf(f: float): String		
		+valueOf(i: int): String		
		+valueOf(l: long): String		
		+valueOf(b: boolean): String		
		*/
		
		/*
		+Character(value: char)
		+charValue(): char
		+compareTo(anotherCharacter: Character): int
		+equals(anotherCharacter: Character): boolean
		+isDigit(ch: char): boolean	
		+isLetter(ch: char): boolean
		+isLetterOrDigit(ch: char): boolean
		+isLowerCase(ch: char): boolean	
		+isUpperCase(ch: char): boolean		
		+toLowerCase(ch: char): char		
		+toUpperCase(ch: char): char		
		*/
		
		/*	
		The StringBuilder class is similar to StringBuffer except that the methods for modifying		
		buffer in StringBuffer are synchronized. Use StringBuffer if it may be accessed		
		by multiple tasks concurrently. Using StringBuilder is more efficient if it is accessed by a		
		single task. 		
		*/
		//====================From 8th edition=====================================
		/*
		+append(data: char[]): StringBuilder
		+append(s: String): StringBuilder
		+delete(startIndex: int, endIndex: int): StringBuilder
		+deleteCharAt(index: int): StringBuilder
		+insert(offset: int, s: String): StringBuilder - Inserts a string into this builder at the position offset.
		+reverse(): StringBuilder
		 */
		/*
		+toString(): String
		+capacity(): int
		+charAt(index: int): char
		+length(): int
		+setLength(newLength: int): void
		+substring(startIndex: int): String - Returns a substring starting at startIndex.
		+substring(startIndex: int, endIndex: int): String - Returns a substring from startIndex to endIndex-1.
		+trimToSize(): void
		 */
		//Integer.parseInt(value)	
		
		//Writing to a new file after creating it
		//PrintWriter pw = new PrintWriter(new File("abc.csv")); //creates file
		//pw.write(sb.toString());
		//pw.close();	
		//for (String line1 : Files.readAllLines(Paths.get("abc.csv"))) { //read all lines from this csv file
		//Ch 11: Inheritance AND Polymorphism
		//Ch 13: Exception Handling
		//Ch 14: Abstract Classes and Interfaces
		//Ch 16: Event Driven Programming
		//Ch 17: Creating GUI
		//Ch 18: Binary I/O
		//10th Edition Liang 
		//Ch 19 onwards:
		//Ch 20 and 21 are most important which you refer to everytime 
		/*
		+iterator(): Iterator<E> - Returns an iterator for the elements in this collection.
		+add(o: E): boolean
		+addAll(c: Collection<? extends E>): boolean
		+clear(): void - Removes all the elements from this collection.
		+contains(o: Object): boolean
		+containsAll(c: Collection<?>): boolean
		+equals(o: Object): boolean
		+hashCode(): int
		+isEmpty(): boolean
		+remove(o: Object): boolean
		+removeAll(c: Collection<?>): boolean - Removes all the elements in c from this collection
		+retainAll(c: Collection<?>): boolean
		+size(): int
		+toArray(): Object[]
		 */
		/*
		+hasNext(): boolean
		+next(): E
		+remove(): void - Removes the last element obtained using the next method.
		 */
		ArrayList<String> collection1 = new ArrayList<>();
		collection1.add("New York");
		collection1.add("Atlanta");
		//pg 763 10th edition map of collection container of Java
		ArrayList<Integer> arrayList = new ArrayList<Integer>();
		arrayList.add(1); // 1 is autoboxed to new Integer(1)
		arrayList.add(2);
		arrayList.add(3);
		arrayList.add(1);
		arrayList.add(4);
		arrayList.add(0, 10);
		arrayList.add(3, 30);
		System.out.println("A list of integers in the array list:");
		System.out.println(arrayList);
		LinkedList<Object> linkedList = new LinkedList<>(arrayList);
		linkedList.add(1, "red");
		linkedList.removeLast();
		linkedList.addFirst("green");
		System.out.println(linkedList);
		//Ch 21: Sets Maps pg 797
		//Sets: HashSet, LinkedHashSet, or TreeSet
		//HashSet
		/*Set<String> hashSet = new HashSet<>();
		hashSet.add("London");
		hashSet.add("Paris");
		hashSet.add("New York");
		hashSet.add("San Francisco");
		hashSet.add("Beijing");
		hashSet.add("New York");
		System.out.println(hashSet);
		hashSet.remove("London");
					
		for (String s: hashSet) {
			System.out.println(s.toUpperCase() + " ");
		}
					
		System.out.println(hashSet.size() + " elements in set");
		Set<String> hashSet2 = new HashSet<>();
		// Add strings to hashSet2
		hashSet2.add("London");
		hashSet2.add("Shanghai");
		hashSet2.add("Paris");
		System.out.println("\nIs Taipei in set2? " + hashSet2.contains("Taipei"));
		hashSet.addAll(hashSet2);*/
//		hashSet.removeAll(hashSet2);
//		System.out.println("After removing hashSet2 from hashSet, hashSet is " + hashSet);
//		hashSet.retainAll(hashSet2);//retain all common elements in hashSet as hashSet and hashSet2 has no common elements hashSet becomes empty
//		System.out.println("After removing common elements in hashSet2 " + "from hashSet, hashSet is " + hashSet);
					
		//LinkedHashSet	
		/*Set<String> linkedHashSet = new LinkedHashSet<>();
		// Add strings to the linkedHashSet
		linkedHashSet.add("London");
		linkedHashSet.add("Paris");
		linkedHashSet.add("New York");
		linkedHashSet.add("San Francisco");
		linkedHashSet.add("Beijing");
		linkedHashSet.add("New York");
		System.out.println(linkedHashSet);
					
		for (Object element: linkedHashSet){
			System.out.print(((String) element).toLowerCase() + " ");
		}*/

		//TreeSet
		/*TreeSet<String> treeSet = new TreeSet<>(hashSet);
		System.out.println("Sorted tree set: " + treeSet);*/
		// Use the methods in SortedSet interface
//		System.out.println("first(): " + treeSet.first());
//		System.out.println("last(): " + treeSet.last());
//		System.out.println("headSet(\"New York\"): " +
//		treeSet.headSet("New York"));
//		System.out.println("tailSet(\"New York\"): " +
//		treeSet.tailSet("New York"));
//		// Use the methods in NavigableSet interface
//		System.out.println("lower(\"P\"): " + treeSet.lower("P"));
//		System.out.println("higher(\"P\"): " + treeSet.higher("P"));
//		System.out.println("floor(\"P\"): " + treeSet.floor("P"));
//		System.out.println("ceiling(\"P\"): " + treeSet.ceiling("P"));
//		System.out.println("pollFirst(): " + treeSet.pollFirst());
//		System.out.println("pollLast(): " + treeSet.pollLast());
//		System.out.println("New tree set: " + treeSet);
					
					
		//Creating a hashset directly from a list of strings
//		String[] keywordString = {"abstract", "assert", "boolean", "break", "byte", "case", "catch", "char", "class", "const"};
//		Set<String> keywordSet = new HashSet<>(Arrays.asList(keywordString)); //Arrays.asList() method is what makes this thing possible 
//		Set<String> keywordSet = new LinkedHashSet<>(Arrays.asList(keywordString));
//		ArrayList<String> keywordSet = new ArrayList<>(Arrays.asList(keywordString));
					
		//Maps: HashMap, LinkedHashMap, TreeMap
	/*
	+clear(): void - Removes all entries from this map.
	+containsKey(key: Object): boolean - Returns true if this map contains an entry for the specified key.
	+containsValue(value: Object): boolean - Returns true if this map maps one or more keys to the specified value.
	+isEmpty(): boolean - Returns true if this map contains no entries.
	+size(): int - Returns the number of entries in this map.
	+keySet(): Set<K> - Returns a set consisting of the keys in this map.
	+put(key: K, value: V): V - Puts an entry into this map.
	+putAll(m: Map<? extends K,? extends V>): void - Adds all the entries from m to this map.
	+remove(key: Object): V - Removes the entries for the specified key.
	+entrySet(): Set<Map.Entry<K,V>> - 	Returns a set consisting of the entries in this map.
	+values(): Collection<V> - Returns a collection consisting of the values in this map.	
	+get(key: Object): V - Returns the value for the specified key in this map.
	 */
		
	/*
	+getKey(): K - Returns the key from this entry.
	+getValue(): V - Returns the value from this entry.
	+setValue(value: V): void - Replaces the value in this entry with a new value.
	 */
		
	/*Map<String, Integer> hashMap = new HashMap<>();
	hashMap.put("Smith", 30);
	hashMap.put("Anderson", 31);
	hashMap.put("Lewis", 29);
	hashMap.put("Cook", 29);
	System.out.println("Display entries in HashMap");
	System.out.println(hashMap + "\n");
	Map<String, Integer> treeMap = new TreeMap<>(hashMap);
	System.out.println("Display entries in ascending order of key");
	System.out.println(treeMap);
	// Create a LinkedHashMap
	Map<String, Integer> linkedHashMap = new LinkedHashMap<>(16, 0.75f, true);
	linkedHashMap.put("Smith", 30);
	linkedHashMap.put("Anderson", 31);
	linkedHashMap.put("Lewis", 29);
	linkedHashMap.put("Cook", 29);
	// Display the age for Lewis
	System.out.println("\nThe age for " + "Lewis is " +
	linkedHashMap.get("Lewis"));
	System.out.println("Display entries in LinkedHashMap");
	System.out.println(linkedHashMap);*/

	/*String text = "Good,morning,Have,a,good,class,Have,a";
	// Create a TreeMap to hold words as key and count as value
	Map<String, Integer> map = new TreeMap<>();
	String[] words = text.split(",");
		
	for (int i = 0; i < words.length; i++) {
		String key = words[i].toLowerCase();
		if (key.length() > 0) {
			if (!map.containsKey(key)) {
				map.put(key, 1);
			}else {
				int value = map.get(key);
				value++;
				map.put(key, value);
			}
		}
	}
	System.out.println(map);
	Set<Map.Entry<String, Integer>> entrySet = map.entrySet();
	for (Map.Entry<String, Integer> entry: entrySet){
		System.out.println(entry.getValue() + "\t" + entry.getKey());
	}*/
		

		
		//this might be less useful can be removed
					// Add numbers 0, 1, 2, ..., N - 1 to the array list
				/*	ArrayList<Integer> list = new ArrayList<Integer>();
					for (int i = 0; i < N; i++){
						list.add(i);
					}
					Collections.shuffle((java.util.List<?>) list); // Shuffle the array list
					// Create a hash set, and test its performance
					Collection<Integer> set1 = new HashSet(list);
					System.out.println("Member test time for hash set is " +
					getTestTime(set1) + " milliseconds");
					System.out.println("Remove element time for hash set is " +
					getRemoveTime(set1) + " milliseconds");
					// Create a linked hash set, and test its performance
					Collection<Integer> set2 = new LinkedHashSet<>(list);
					System.out.println("Member test time for linked hash set is " +
					getTestTime(set2) + " milliseconds");
					System.out.println("Remove element time for linked hash set is "+ getRemoveTime(set2) + " milliseconds");
					// Create a tree set, and test its performance
					Collection<Integer> set3 = new TreeSet<>(list);
					System.out.println("Member test time for tree set is " +
					getTestTime(set3) + " milliseconds");
					System.out.println("Remove element time for tree set is " +
					getRemoveTime(set3) + " milliseconds");
					// Create an array list, and test its performance
					Collection<Integer> list1 = new ArrayList<>(list);
					System.out.println("Member test time for array list is " +
					getTestTime(list1) + " milliseconds");
					System.out.println("Remove element time for array list is " +
					getRemoveTime(list1) + " milliseconds");
					// Create a linked list, and test its performance
					Collection<Integer> list2 = new LinkedList<>(list);
					System.out.println("Member test time for linked list is " +
					getTestTime(list2) + " milliseconds");
					System.out.println("Remove element time for linked list is " +
					getRemoveTime(list2) + " milliseconds");*/
		
	}
		//Collection
	/*		public static long getTestTime(Collection<Integer> c) {
			long startTime = System.currentTimeMillis();
			// Test if a number is in the collection
			for (int i = 0; i < N; i++){
				c.contains((int)(Math.random() * 2 * N));
			}
			return System.currentTimeMillis() - startTime;
		}
		public static long getRemoveTime(Collection<Integer> c) {
			long startTime = System.currentTimeMillis();
			for (int i = 0; i < N; i++){
				c.remove(i);
			}
			return System.currentTimeMillis() - startTime;
		}*/
}