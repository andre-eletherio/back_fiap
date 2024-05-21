import "reflect-metadata"
import { Request, Response } from "express"
import { IController } from "../../../../../shared/infra/protocols/IController"
import { GetLikeUseCase } from "../../../useCases/GetLikeUseCase"

export class GetLikeController implements IController {
    async handle(request: Request, response: Response): Promise<Response> {

        const getLikeUseCase = new GetLikeUseCase()

        const ok = await getLikeUseCase.execute()

        return response.status(200).send(ok)
    }
}