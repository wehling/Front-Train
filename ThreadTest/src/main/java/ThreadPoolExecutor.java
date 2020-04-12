import java.util.concurrent.BlockingQueue;
import java.util.concurrent.RejectedExecutionHandler;
import java.util.concurrent.ThreadFactory;
import java.util.concurrent.TimeUnit;

public class ThreadPoolExecutor {
    /**
     *  根据参数创建ThreadPoolExecutor
     * @param corePoolSize 线程池维护线程的最少数量
     * @param maximumPoolSize 总线程池中的最大线程数
     * @param keepAliveTime 线程池维护线程所允许的空闲时间
     * @param unit keepAliveTime的单位
     * @param workQueue 线程池所使用的缓冲队列
     * @param threadFactory 线程工厂
     * @param handler 线程池对任务的处理策略
     */
    public ThreadPoolExecutor(int corePoolSize,
                              int maximumPoolSize,
                              long keepAliveTime,
                              TimeUnit unit,
                              BlockingQueue<Runnable> workQueue,
                              ThreadFactory threadFactory,
                              RejectedExecutionHandler handler) {
    }

}

