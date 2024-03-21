import Customer from "../../customer/entity/customer";
import Order from "../entity/order";
import OrderItem from "../entity/orderItem";
import OrderService from "./order.service";

describe("Order service unit tests",()=>{

    it("should place an order", ()=>{

        const customer = new Customer("customer1", "Customer 1");

        const item = new OrderItem("item1", "Item 1", 10, "p1", 1);

        const order = OrderService.placeOrder(customer, [item]);

        expect(customer.rewardPoints).toBe(5);
        expect(order.total()).toBe(10);
    });
    

    it("should get total of all orders", ()=>{
        
        const orderItem = new OrderItem("item1", "Item 1", 100, "p1", 1);
        const orderItem2 = new OrderItem("item2", "Item 2", 200, "p2", 2);

        const order = new Order("order1", "cliente1", [orderItem])
        const order2 = new Order("order2", "cliente2", [orderItem2])

        const total = OrderService.total([order, order2]);

        expect(total).toBe(300);

    });

    it("should add reward points", ()=>{ 
        const customer = new Customer("1", "Customer 1");

        expect(customer.rewardPoints).toBe(0);

        customer.addRewardPoints(10);
        expect(customer.rewardPoints).toBe(10);

        customer.addRewardPoints(10);
        expect(customer.rewardPoints).toBe(20);
    })

});