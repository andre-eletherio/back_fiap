import "reflect-metadata"
import { Request, Response } from "express"
import { IController } from "../../../../../shared/infra/protocols/IController"
import { GetUserUseCase } from "../../../useCases/GetUserUseCase"

export class GetUsersController implements IController {
    async handle(request: Request, response: Response): Promise<Response> {

        const filters = request.query

        const getUserUseCase = new GetUserUseCase()
        const user = await getUserUseCase.execute(filters)

        if (user === null) {
            return response.status(204).send()
        }


        return response.status(200).send(user)
    }
}