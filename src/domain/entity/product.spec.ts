import Product from "./product";

describe("Product unit tests", ()=>{

    it("should throw error when id is empty",()=>{
        
        expect(()=>{
            const product = new Product("", "Product 1", 100);

        }).toThrow("Id is required");

    })

    it("should throw error when price is less than 0",()=>{
        
        expect(()=>{
            const product = new Product("123", "Product 1", -1);

        }).toThrow("Price must be grater than 0");

    })

    it("should change name",()=>{
        
        const product = new Product("123", "Product 1", 0);
        product.changeName("Product 2")

        expect(product.name).toBe("Product 2");
    })

    it("should change price",()=>{
        
        const product = new Product("123", "Product 1", 0);
        product.changePrice(150)

        expect(product.price).toBe(150);
    })
   
})