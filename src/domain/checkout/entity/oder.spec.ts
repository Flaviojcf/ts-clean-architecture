import Order from "./order";
import OrderItem from "./orderItem";

describe("Order unit tests", ()=>{

    it("should throw error when id is empty",()=>{
        
        expect(()=>{
            let order = new Order("", "123", []);

        }).toThrow("Id is required");

    })

    it("should throw error when custoimerId is empty",()=>{
        
        expect(()=>{
            let order = new Order("123", "", []);

        }).toThrow("CustomerId is required");

    })

    it("should throw error when items are not greater than 0",()=>{
        
        expect(()=>{
            let order = new Order("123", "123", []);

        }).toThrow("Items are required");

    })

    it("should calculate total",()=>{
        const item = new OrderItem("item 1", "Item 1", 100, "p1", 2);
        const item2 = new OrderItem("item 2", "Item 2", 200, "p2", 2);
        const order = new Order("o1", "c1", [item]);
    
        let total = order.total();
        expect((total)).toBe(100)

        const order2 = new Order("o1", "c1", [item, item2]);
        total = order2.total();
        expect((total)).toBe(300)

    })

    it("should throw error if the item quantity is less or equal 0",()=>{

        expect(()=>{
            const item = new OrderItem("item 1", "Item 1", 100, "p1", 0);
            const order = new Order("o1", "c1", [item]);
        }).toThrow("Quantity must be greater than 0")

    })
   
})