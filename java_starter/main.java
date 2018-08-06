
public class main {
    private int a = 10;
    public static void main(String[] args){
        System.out.println("main");
        int b = this.getA();
        System.out.println(b);
    }

    public int getA() {
        return a;
    }
}