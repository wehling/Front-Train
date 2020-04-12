public class Productor extends Thread{

    private ProductPool pool;

    public Productor(ProductPool pool) {
        this.pool = pool;
    }

    @Override
    public void run() {
        while (true){
            String name = (int)(Math.random()*100) + "号产品";
            System.out.println("生产好了一件产品：" + name);
            Product product = new Product(name);
            this.pool.push(product);
        }
    }
}
