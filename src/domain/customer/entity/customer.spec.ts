import Address from "../value-object/address";
import Customer from "./customer"

describe("Customer unit tests", ()=>{

    it("should throw error when id is empty",()=>{
        
        expect(()=>{
            let customer = new Customer("", "John");

        }).toThrow("Id is required");

    })

    it("should throw error when name is empty",()=>{
        
        expect(()=>{
            let customer = new Customer("123", "");

        }).toThrow("Name is required");

    })

    it("should change name",()=>{
        
        //Arrange
        const customer = new Customer("123", "John");

        //Act
        customer.changeName("Jane");

        //Assert
        expect(customer.name).toBe("Jane");

    })

    it("should activate customer",()=>{
        
        //Arrange
        const customer = new Customer("1", "John1");
        const address = new Address("Street 1", 123, "53300-030", "Olinda");
        customer.Address = address;

        //Act
        customer.activate();

        //Assert
        expect(customer.isActive()).toBe(true);

    })

    it("should throw error when addres is undefined when you activate a customer",()=>{
        
        expect(()=>{
            const customer = new Customer("1", "John1");
            customer.activate();
        }).toThrow("Address is mandatory to activate a customer")

    })

    it("should dactivate customer",()=>{
        
        //Arrange
        const customer = new Customer("1", "John1");

        //Act
        customer.deactivate();

        //Assert
        expect(customer.isActive()).toBe(false);

    })

})