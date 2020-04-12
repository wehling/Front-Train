import java.util.LinkedList;
import java.util.List;

public class ProductPool {
    // 存储所有的产品的集合，生产者在这个集合中添加元素；消费者消费产品，从这个集合中取出元素
    private List<Product> productList;
    // 产品池中产品的最大数量
    private int maxSize = 0;

    public ProductPool(int maxSize){
        // 对产品进行实例化
        this.productList = new LinkedList<Product>();
        // 限定产品的最大数值
        this.maxSize = maxSize;
    }

    /**
     * 生产者将生产好的产品放入产品池
     * @param product
     */
    public synchronized void push(Product product){
        // 判断是否还需要再生产产品
        if (this.productList.size()==maxSize){
            try {
                this.wait();
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }
        // 将产品添加到集合中
        this.productList.add(product);
        // 通知其他人，有产品可以消费了
        this.notifyAll();

    }

    /**
     * 消费者从商品池中取出一件商品消费
     * @return
     */
    public synchronized Product pop() {
        // 判断是否还有商品再去消费
        if (this.productList.size() == 0){
            try {
                this.wait();
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }
        // 从商品池中取出一件商品
        Product removeProduct = this.productList.remove(0);
        // 通知其他人，我取出了一件商品
        this.notifyAll();
        return removeProduct;
    }

}
