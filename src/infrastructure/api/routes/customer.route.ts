import express, {Request, Response  } from "express";
import CreateCustomerUseCase from '../../../usecase/customer/create/create.customer.usecase';
import CustomerRepository from '../../customer/repository/sequelize/customer.repository';

export const customerRoute = express.Router();

customerRoute.post("/", async (req: Request, res: Response) => {

    const usecase = new CreateCustomerUseCase(new CustomerRepository());

    try {

        const customerDto = {
            name: req.body.name,
            address: {
                street: req.body.addres.street,
                city: req.body.addres.city,
                number: req.body.addres.number,
                zip: req.body.addres.zip,
            }
        }

        const output = await usecase.execute(customerDto);

        res.send(output);
    }
    catch (err) {
        res.status(500).send(err);
    }
})