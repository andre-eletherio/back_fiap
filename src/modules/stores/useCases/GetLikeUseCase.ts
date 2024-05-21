import { LikeRepository } from "../infra/db/prisma/repositories/LikeRepository";

export class GetLikeUseCase {

  async execute() {

    const likeRepository = new LikeRepository()

    const response = await likeRepository.getLikes()

    return response
  }
}