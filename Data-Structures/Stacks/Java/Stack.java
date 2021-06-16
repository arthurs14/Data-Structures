public class Stack {
  int stack [];
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
    int item = stack[top];
    top--;
    return item;
  }

  // returns the top element
  public int peek() {
    return stack[top];
  }

  public void show() {
    for (int n : stack) {
      System.out.print(n + " ");
    }
  }

  public static void main(String[] args) {
    Stack stack = new Stack(5);
    stack.push(5);
    stack.push(6);
    stack.push(7);
    stack.show();
  }
}
