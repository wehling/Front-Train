package sourceConfilct;

public class SourceConfilctDemo {
    public static void main(String[] args) {
        Runnable runnable = () ->{
            while (TicketCenter.restCount > 0) {
                System.out.println(Thread.currentThread().getName() + "卖出一张票，剩余" + --TicketCenter.restCount + "张");
            }
        };

        Thread thread1 = new Thread(runnable);
        Thread thread2 = new Thread(runnable);
        Thread thread3 = new Thread(runnable);
        Thread thread4 = new Thread(runnable);

        thread1.start();
        thread2.start();
        thread3.start();
        thread4.start();

    }
}
