public class LinkedList {
  Node head; // head of list

  // Linked List node
  // This inner class is made static
  // so that main() can access it
  static class Node {
    int data;
    Node next;

    // Constructor
    Node (int d) {
      data = d;
      next = null;
    }
  }

  // method to insert a new node
  public static LinkedList insert(LinkedList list, int data) {
    // create a new node with given data
    Node newNode = new Node(data);
    newNode.next = null;

    // if linked list empty
    // made a new node the head
    if (list.head == null) {
      list.head = newNode;
    } else {
      // else head exists - traverse till next is null to add new node
      Node last = list.head;
      while (last.next != null) {
        last = last.next;
      }

      // inserts node at last node
      last.next = newNode;
    }

    // return the list by head
    return list;
  }

  // get nth node data
  public static int getNth(LinkedList list, int index) {
    Node current = list.head;
    int count = 0;

    while (current != null) {
      if (count == index) {
        return current.data;
      }
      count++;
      current = current.next;
    }
    // return 0 if it never finds anything
    return 0;
  }

  public static double getMedian(LinkedList list) {
    int median = 0;
    double value = 0;

    // get length of list
    int count = getCount(list);

    // check if count is even or odd
    if (count % 2 == 0) {
      int middleNumOne = getNth(list, count / 2);
      int middleNumTwo = getNth(list, (count / 2) - 1);
      value = (double) (middleNumOne + middleNumTwo) / 2;
    } else {
      median = count / 2;
      value = getNth(list, median);
    }

    return value;
  }

  // returns the amount of nodes
  public static int getCount(LinkedList list) {
    Node temp = list.head;
    int count = 0;
    while (temp != null) {
      count++;
      temp = temp.next;
    }

    return count;
  }

  // prints Linked List
  public static void printList(LinkedList list) {
    Node currNode = list.head;

    System.out.println("LinkedList: ");

    // Traverse through the LinkedList
    while (currNode != null) {
      // print data at current node
      System.out.print(currNode.data + " ");

      // Go to next node
      currNode = currNode.next;
    }
  }

  public static void main(String[] args) {
    LinkedList list = new LinkedList();

    list = insert(list, 1);
    list = insert(list, 2);
    list = insert(list, 3);
    list = insert(list, 4);
    list = insert(list, 5);
    //list = insert(list, 6);
    
    // int count = getCount(list);
    System.out.println(getMedian(list));
    // printList(list);
  }
}