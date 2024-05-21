import "reflect-metadata"
import { Request, Response } from "express"
import { IController } from "../../../../../shared/infra/protocols/IController"
import { LikeUseCase } from "../../../useCases/LikeUseCase"
import { SeenUseCase } from "../../../useCases/SeenUseCase"

export class LikeController implements IController {
    async handle(request: Request, response: Response): Promise<Response> {
        const {userId, like, email} = request.body

        const seenUseCase = new SeenUseCase()
        await seenUseCase.execute(email)

        if (like) {
            const likeUseCase = new LikeUseCase()
            const ok = likeUseCase.execute(userId)
        }

        return response.status(200).send('ok')
    }
}