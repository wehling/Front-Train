package sourceConfilct;

public class SynchronizedFunctionDemo {
    public static void main(String[] args) {
        Runnable runnable = () ->{
                while (TicketCenter.restCount > 0) {
                    soleTicket();
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

    /**
     * 同步方法
     * 静态方法：同步锁就是 类锁，当前类.class
     * 非静态方法：同步锁是 this
     */
    private synchronized static void soleTicket(){
        // 方法一，同步代码块
        // 对象锁，任意对象都可
        // synchronized ("") {
        // 类锁
        if (TicketCenter.restCount <= 0){
            return;
        }
        System.out.println(Thread.currentThread().getName() + "卖出一张票，剩余" + --TicketCenter.restCount + "张");
    }

}
