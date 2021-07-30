import java.awt.List;
import java.io.File;
import java.io.IOException;
import java.io.PrintWriter;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collection;
import java.util.Collections;
import java.util.HashMap;
import java.util.HashSet;
import java.util.LinkedHashMap;
import java.util.LinkedHashSet;
import java.util.LinkedList;
import java.util.Map;
import java.util.Scanner;
import java.util.Set;
import java.util.TreeMap;
import java.util.TreeSet;

import javax.swing.text.html.HTMLDocument.Iterator;
	
public class SomeSyntax {
		static final int N = 50000;
		public static void main(String[] args) throws IOException {
			Scanner input = new Scanner(System.in);
//			double value = input.nextDouble();
//			int num = input.nextInt();	
			final double PI = 3.14159; //declare a constant		
			int[] array = new int[10];
			int[][] matrix = new int[5][4];
			ArrayList<String> collection1 = new ArrayList<>();
			collection1.add("New York");
			collection1.add("Atlanta");
			ArrayList<Integer> arrayList = new ArrayList<Integer>();
			arrayList.add(1); // 1 is autoboxed to new Integer(1)
			arrayList.add(2);
			arrayList.add(3);
			arrayList.add(1);
			arrayList.add(4);
			arrayList.add(0, 10);
			arrayList.add(3, 30);
			ArrayList<Integer> arrayList_lc = new ArrayList<Integer>();
			Collections.sort(arrayList_lc);//to sort an array list of integers 
			System.out.println("A list of integers in the array list:");
			System.out.println(arrayList);
			LinkedList<Object> linkedList = new LinkedList<>(arrayList);
			linkedList.add(1, "red");
			linkedList.removeLast();
			linkedList.addFirst("green");
			System.out.println(linkedList);			
			//HashSet
			Set<String> hashSet = new HashSet<>();
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
			hashSet.addAll(hashSet2);
//			hashSet.removeAll(hashSet2);
//			System.out.println("After removing hashSet2 from hashSet, hashSet is " + hashSet);
//			hashSet.retainAll(hashSet2);//retain all common elements in hashSet as hashSet and hashSet2 has no common elements hashSet becomes empty
//			System.out.println("After removing common elements in hashSet2 " + "from hashSet, hashSet is " + hashSet);
			
			//LinkedHashSet
			
			Set<String> linkedHashSet = new LinkedHashSet<>();
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
			}

			//TreeSet

			TreeSet<String> treeSet = new TreeSet<>(hashSet);
			System.out.println("Sorted tree set: " + treeSet);
			// Use the methods in SortedSet interface
			System.out.println("first(): " + treeSet.first());
			System.out.println("last(): " + treeSet.last());
			System.out.println("headSet(\"New York\"): " +
			treeSet.headSet("New York"));
			System.out.println("tailSet(\"New York\"): " +
			treeSet.tailSet("New York"));
			// Use the methods in NavigableSet interface
			System.out.println("lower(\"P\"): " + treeSet.lower("P"));
			System.out.println("higher(\"P\"): " + treeSet.higher("P"));
			System.out.println("floor(\"P\"): " + treeSet.floor("P"));
			System.out.println("ceiling(\"P\"): " + treeSet.ceiling("P"));
			System.out.println("pollFirst(): " + treeSet.pollFirst());
			System.out.println("pollLast(): " + treeSet.pollLast());
			System.out.println("New tree set: " + treeSet);
			
			
			//Creating a hashset directly from a list of strings
			String[] keywordString = {"abstract", "assert", "boolean", "break", "byte", "case", "catch", "char", "class", "const"};
			Set<String> keywordSet = new HashSet<>(Arrays.asList(keywordString)); //Arrays.asList() method is what makes this thing possible 
			Set<String> keywordSet_1 = new LinkedHashSet<>(Arrays.asList(keywordString));
			ArrayList<String> keywordSet_2 = new ArrayList<>(Arrays.asList(keywordString));
			
			//Maps: HashMap, LinkedHashMap, TreeMap
			Map<String, Integer> hashMap = new HashMap<>();
			hashMap.put("Smith", 30);
			hashMap.put("Anderson", 31);
			hashMap.put("Lewis", 29);
			hashMap.put("Cook", 29);
			//hashMap.getOrDefault("Andrew", 35); //if andrew is not found in the map then you need to display 35
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
			System.out.println(linkedHashMap);

			String text = "Good,morning,Have,a,good,class,Have,a";
			// Create a TreeMap to hold words as key and count as value
			Map<String, Integer> map = new TreeMap<>();
			String[] words = text.split(",");
			
			for (int i = 0; i < words.length; i++) {
				String key = words[i].toLowerCase();
				if (key.length() > 0) {
					if (!map.containsKey(key)) {
						map.put(key, 1);
					}else {
						int val = map.get(key);
						val++;
						map.put(key, val);
					}
				}
			}
			System.out.println(map);
			Set<Map.Entry<String, Integer>> entrySet = map.entrySet();
			for (Map.Entry<String, Integer> entry: entrySet){
				System.out.println(entry.getValue() + "\t" + entry.getKey());
			}

			HashMap<String,HashMap<String,Integer>> map_2 = new HashMap<String,HashMap<String,Integer>>();

			
			//file creation and write csv written from string builder 
			StringBuilder sb = new StringBuilder();
			PrintWriter pw = new PrintWriter(new File("filename.csv"));
			pw.write(sb.toString());
			pw.close();
			
		
			}
			
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