package sourceConfilct;

import java.util.concurrent.locks.ReentrantLock;

public class LockDemo {
    public static void main(String[] args) {

        // 实例化了一个锁对象
        ReentrantLock reentrantLock = new ReentrantLock();

        Runnable runnable = () ->{
            while (TicketCenter.restCount > 0) {
                // 对临界资源上锁
                reentrantLock.lock();
                if (TicketCenter.restCount <= 0){
                    return;
                }
                System.out.println(Thread.currentThread().getName() + "卖出一张票，剩余" + --TicketCenter.restCount + "张");
                // 对临界资源解锁
                reentrantLock.unlock();
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
