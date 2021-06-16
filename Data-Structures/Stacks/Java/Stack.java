import java.util.*;

public class Stack {
  int stack[];
  int top;
  int capacity;

  Stack(int capacity) {
    this.stack = new int[capacity];
    this.capacity = capacity;
    this.top = 0;
  }

  // adds item to end of stack
  public void push(int item) {
    stack[top] = item;
    top++;
  }

  // pops off the last item on the stack and returns it
  public int pop() {
    int item;
    top--;
    item = stack[top];
    stack[top] = 0;
    return item;
  }

  // returns the top element
  public int peek() {
    int item;
    item = stack[top - 1];
    return item;
  }

  public Stack sort(Stack stack) {
    Stack sorted = new Stack(capacity);

    while(!stack.isEmpty()) {
      int tmp = stack.pop();

      while (!sorted.isEmpty() && sorted.peek() > tmp ) {
        stack.push(sorted.pop());
      }

      sorted.push(tmp);
    }

    return sorted;
  }

  public void show() {
    for (int n : stack) {
      System.out.print(n + " ");
    }
  }

  public static void main(String[] args) {
    Stack stack = new Stack(5);
    stack.push(5);
    stack.push(9);
    stack.push(8);
    stack.push(6);
    stack.push(7);
    //System.out.println(stack.pop());
    //stack.show();
    //System.out.println(stack.peek());
    Stack sorted = sort(stack);
    while (!sorted.isEmpty()) {
      System.out.println(sorted.pop() + " ");
    }
  }
}
