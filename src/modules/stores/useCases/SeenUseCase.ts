import { UserRepository } from "../infra/db/prisma/repositories/UserRepository";

export class SeenUseCase {

  async execute(email: string) {

    const userRepository = new UserRepository()

    const response = await userRepository.setInfos({
      seen: true,
      email
    })

    return response
  }
}