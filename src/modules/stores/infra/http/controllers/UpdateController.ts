import "reflect-metadata"
import { Request, Response } from "express"
import { IController } from "../../../../../shared/infra/protocols/IController"
import { UpdateUserUseCase } from "../../../useCases/UpdateUserUseCase"
import { InsertInterestUseCase } from "../../../useCases/InsertInterestUseCase"

export class UpdateController implements IController {
    async handle(request: Request, response: Response): Promise<Response> {
        const {degree, description, email, name, password, phone, role, seen, interests, availability, location} = request.body

        const data = {degree, description, email, name, password, phone, role, seen, availability, location}

        const updateUserUseCase = new UpdateUserUseCase()
        const insertInterestUseCase = new InsertInterestUseCase()

        const user = await updateUserUseCase.execute(data)

        const interestResponse = await insertInterestUseCase.execute(user.id, interests)

        return response.status(200).send(user)
    }
}