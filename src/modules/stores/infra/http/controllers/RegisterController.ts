import "reflect-metadata"
import { Request, Response } from "express"
import { IController } from "../../../../../shared/infra/protocols/IController"
import { RegisterUserUseCase } from "../../../useCases/RegisterUserUseCase"

export class RegisterController implements IController {
    async handle(request: Request, response: Response): Promise<Response> {
        const {email, password} = request.body

        const registerUserUseCase = new RegisterUserUseCase()

        const ok = await registerUserUseCase.execute(email, password)

        console.log(ok)

        return response.status(200).send(ok)
    }
}