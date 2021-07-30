import java.awt.List;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Iterator;
import java.util.LinkedHashMap;
import java.util.LinkedHashSet;
import java.util.LinkedList;
import java.util.Map;
import java.util.Map.Entry;
import java.util.Set;
import java.util.TreeMap;
import java.util.TreeSet;



public class ListMapsSet {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		//https://www.javatpoint.com/difference-between-arraylist-and-linkedlist
		//https://www.geeksforgeeks.org/arraylist-vs-linkedlist-java/
		//Arraylist
		  ArrayList<String> arrayList = new ArrayList<>();
	      System.out.println("Initial size of al: " + arrayList.size());

	      // add elements to the array list
	      arrayList.add("C");
	      arrayList.add("A");
	      arrayList.add("E");
	      arrayList.add("B");
	      arrayList.add("D");
	      arrayList.add("F");
	      arrayList.add(1, "A2");
	      System.out.println("Size of arrayList after additions: " + arrayList.size());

	      // display the array list
	      System.out.println("Contents of arrayList: " + arrayList);

	      // Remove elements from the array list
	      arrayList.remove("F");
	      arrayList.remove(2);
	      System.out.println("Size of al after deletions: " + arrayList.size());
	      System.out.println("Contents of arrayList: " + arrayList);
	      //arrayList.sort(null);
	      for(String s: arrayList){
	    	  System.out.println(s);
	      }
	      for(int i=0; i< arrayList.size(); i++){
	    	  System.out.println(arrayList.get(i));
	      }
	      Iterator<String> iterator = arrayList.iterator();
	      while(iterator.hasNext()){
	    	  System.out.println(iterator.next());
	      }
	      /*
	      //these 2 might not be that useful
	      int i = 0;
	      while (i < arrayList.size()) {
	    	  System.out.println(arrayList.get(i));
	    	  i++;
	      }
	      arrayList.forEach((temp)->{
	    	  System.out.println(temp);
	    	  });
	      */
	      
	      //LINKEDLIST
	      LinkedList<String> linkedList = new LinkedList<>();
	      
	      // add elements to the linked list
	      linkedList.add("F");
	      linkedList.add("B");
	      linkedList.add("D");
	      linkedList.add("E");
	      linkedList.add("C");
	      linkedList.addLast("Z");
	      linkedList.addFirst("A");
	      linkedList.add(1, "A2");
	      System.out.println("Original contents of linkedList: " + linkedList);

	      // remove elements from the linked list
	      linkedList.remove("F");
	      linkedList.remove(2);
	      System.out.println("Contents of linkedList after deletion: " + linkedList);
	      
	      // remove first and last elements
	      linkedList.removeFirst();
	      linkedList.removeLast();
	      System.out.println("linkedList after deleting first and last: " + linkedList);

	      // get and set a value
	      Object val = linkedList.get(2);
	      linkedList.set(2, (String) val + " Changed");
	      System.out.println("linkedList after change: " + linkedList);
	      //linkedList.sort(null);
	      for(String s: linkedList){
	    	  System.out.println(s);
	      }
	      for(int j=0; j< linkedList.size(); j++){
	    	  System.out.println(linkedList.get(j));
	      }
	      Iterator<String> listIterator = linkedList.iterator();
	      while(listIterator.hasNext()){
	    	  System.out.println(listIterator.next());
	      }
	      /*
	      //these 2 might not be that useful
	      int k = 0;
	      while (k < linkedList.size()) {
	    	  System.out.println(linkedList.get(k));
	    	  k++;
	      }
	      linkedList.forEach((temp)->{
	    	  System.out.println(temp);
	    	  });
			*/
	      //HashMap
	      //use Collections.synchronizedCollection synchronizedList to make things synchronized
	      HashMap<String,Integer> hashMap = new HashMap<String, Integer>();
	      // Put elements to the map
	      hashMap.put("Map", 15);
	      hashMap.put("Has", 20);
	      hashMap.put("How", 25);
	      hashMap.put("Tol", 30);
	      hashMap.put("Cre", 35);
	      //printing the LinkedHashMap
	      for(Map.Entry<String, Integer> mapEntry : hashMap.entrySet()){
		    	 System.out.print(mapEntry.getKey() + ": ");
		         System.out.println(mapEntry.getValue());
		  }
	      hashMap.replace("Tol", 50); //use this in place where you have been removing and then adding key value pairs for the counters
	      //Prints only the values not the key
		  Set<String> setOfKeysHashMap = hashMap.keySet();
		  System.out.println(setOfKeysHashMap);
		  for(String s: setOfKeysHashMap){
			  System.out.println(hashMap.get(s));
		  } 
	      // Get a set of the entries
	      Set<Entry<String, Integer>> setHMap = hashMap.entrySet();
	      // Get an iterator
	      Iterator<Entry<String, Integer>> hashMapIterator = setHMap.iterator();
	      // Display elements
	      while(hashMapIterator.hasNext()) {
	         Map.Entry<String,Integer> mapEntry = (Map.Entry<String,Integer>)hashMapIterator.next();
	         System.out.print(mapEntry.getKey() + ": ");
	         System.out.println(mapEntry.getValue());
	      }
	      //LinkedHashMap
	      //https://www.baeldung.com/java-linked-hashmap
	      LinkedHashMap<String,Integer> linkedHashMap = new LinkedHashMap<String, Integer>();
	      
	      // Put elements to the map
	      linkedHashMap.put("Abc", 15);
	      linkedHashMap.put("Def", 20);
	      linkedHashMap.put("Ghi", 25);
	      linkedHashMap.put("Jkl", 30);
	      linkedHashMap.put("Pqr", 35);
	      //printing the LinkedHashMap
	      for(Map.Entry<String, Integer> mapEntry : linkedHashMap.entrySet()){
		    	 System.out.print(mapEntry.getKey() + ": ");
		         System.out.println(mapEntry.getValue());
		  }
	      //Prints only the values not the key
		  Set<String> setOfKeysLinkedHashMap = linkedHashMap.keySet();
		  System.out.println(setOfKeysLinkedHashMap);
		  for(String s: setOfKeysLinkedHashMap){
			  System.out.println(linkedHashMap.get(s));
		  }
	      // Get a set of the entries
	      Set<Entry<String, Integer>> set = linkedHashMap.entrySet();
	      // Get an iterator
	      Iterator<Entry<String, Integer>> linkedMapIterator = set.iterator();
	      // Display elements
	      while(linkedMapIterator.hasNext()) {
	         Map.Entry<String,Integer> mapEntry = (Map.Entry<String,Integer>)linkedMapIterator.next();
	         System.out.print(mapEntry.getKey() + ": ");
	         System.out.println(mapEntry.getValue());
	      }      
	      
	    //TreeMap
	      //use Collections.synchronizedCollection synchronizedList to make things synchronized
	      TreeMap<String,Integer> treeMap = new TreeMap<String, Integer>();
	      // Put elements into the map
	      treeMap.put("Map", 15);
	      treeMap.put("Has", 20);
	      treeMap.put("How", 25);
	      treeMap.put("Tol", 30);
	      treeMap.put("Cre", 35);
	      //printing the TreeMap
	      for(Map.Entry<String, Integer> mapEntry : treeMap.entrySet()){
		    	 System.out.print(mapEntry.getKey() + ": ");
		         System.out.println(mapEntry.getValue());
		  }
	      treeMap.replace("Tol", 50); //use this in place where you have been removing and then adding key value pairs for the counters
	      //Prints only the values not the key
		  Set<String> setOfKeysTreeMap = treeMap.keySet();
		  System.out.println(setOfKeysTreeMap);
		  for(String s: setOfKeysTreeMap){
			  System.out.println(treeMap.get(s));
		  } 
	      // Get a set of the entries
	      Set<Entry<String, Integer>> setTMap = treeMap.entrySet();
	      // Get an iterator
	      Iterator<Entry<String, Integer>> treeMapIterator = setTMap.iterator();
	      // Display elements
	      while(treeMapIterator.hasNext()) {
	         Map.Entry<String,Integer> mapEntry = (Map.Entry<String,Integer>)treeMapIterator.next();
	         System.out.print(mapEntry.getKey() + ": ");
	         System.out.println(mapEntry.getValue());
	      }
	      
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
			hashSet.removeAll(hashSet2);
			System.out.println("After removing hashSet2 from hashSet, hashSet is " + hashSet);
			hashSet.retainAll(hashSet2);//retain all common elements in hashSet as hashSet and hashSet2 has no common elements hashSet becomes empty
			System.out.println("After removing common elements in hashSet2 " + "from hashSet, hashSet is " + hashSet);
						
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
						
			//Creating a hashset directly from a list of strings
			String[] keywordString = {"abstract", "assert", "boolean", "break", "byte", "case", "catch", "char", "class", "const"};
			Set<String> keywordSet = new HashSet<>(Arrays.asList(keywordString)); //Arrays.asList() method is what makes this thing possible 
			Set<String> keywordSet1 = new LinkedHashSet<>(Arrays.asList(keywordString));
			ArrayList<String> keywordSet2 = new ArrayList<>(Arrays.asList(keywordString));
	      
	}

}
