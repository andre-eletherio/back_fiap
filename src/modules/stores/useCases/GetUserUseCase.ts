import { UserRepository } from "../infra/db/prisma/repositories/UserRepository";

export class GetUserUseCase {

  async execute(filters: any) {

    const userRepository = new UserRepository()

    const response = await userRepository.getUser(filters)

    return response
  }
}