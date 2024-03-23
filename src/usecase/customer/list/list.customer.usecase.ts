import Customer from "../../../domain/customer/entity/customer";
import CustomerRepositoryInterface from "../../../domain/customer/repository/customer-repository-interface";
import { InputListCustomerDto, OutputListCustomerDto } from "./list.customer.dto";

export default class ListCustomerUseCase {

    private _customerRepository: CustomerRepositoryInterface;

    constructor(customerRepository:CustomerRepositoryInterface) {
        this._customerRepository = customerRepository
    }

    async execute(input: InputListCustomerDto): Promise<OutputListCustomerDto> {
        const customers = await this._customerRepository.findAll();

        return OutputMapper.toOutput(customers);

    }
}


class OutputMapper {
    static toOutput(customer:Customer[]): OutputListCustomerDto {
        return {
            customers: customer.map((customer) => ({
                id: customer.id,
                name:customer.name,
                address: {
                    street:customer.Address.street,
                    city:customer.Address.city,
                    number:customer.Address.number,
                    zip:customer.Address.zip
                }
            }))
        }
    }
}