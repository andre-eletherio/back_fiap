import { AppError } from "../../../shared/errors/AppError";
import { UserRepository } from "../infra/db/prisma/repositories/UserRepository";

export class RegisterUserUseCase {

  async execute(email: string, password: string) {
    if (!email || !password) {
      throw new AppError({message: 'Erro ao cadastrar user', title: 'Erro'}, 400)
    }

    const userRepository = new UserRepository()

    const response = await userRepository.register({
      email,
      password
    })

    return response
  }
}