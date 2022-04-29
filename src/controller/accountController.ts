import {AccountService} from "../service/accountService";
import {NextFunction, Request, Response} from "express";


const service = new AccountService()

class AccountController {

    async create(request: Request, res: Response, next: NextFunction) {
        try {

            const { CPF, Name } = request.body

            const response = await service.create({ CPF, Name })

            return res.status(201).json(response)

        }catch (error) {
            res.status(500).json({code: 500, message: "internal server error"})
        }
    }

    async delete(request: Request, res: Response, next: NextFunction) {
        try {

            const { id } = request.params

            await service.delete(id)

            return res.status(204).json()

        }catch (error) {
            res.status(500).json({code: 500, message: "internal server error"})
        }
    }


}

export default new AccountController()