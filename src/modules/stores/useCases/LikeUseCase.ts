import { AppError } from "../../../shared/errors/AppError";
import { LikeRepository } from "../infra/db/prisma/repositories/LikeRepository";

export class LikeUseCase {

  async execute(userId: number) {
    if (!userId) {
      throw new AppError({message: 'Erro ao like', title: 'Erro'}, 400)
    }

    const likeRepository = new LikeRepository()

    const response = await likeRepository.register(userId)

    return response
  }
}