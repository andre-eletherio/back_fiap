import { UserRepository } from "../infra/db/prisma/repositories/UserRepository";

export interface IUser {
  degree?: string,
  degreeLevel?: number,
  description?: string,
  email: string,
  name?: string,
  password?: string,
  phone?: string,
  role?: boolean,
  seen?: boolean
}

export class UpdateUserUseCase {

  async execute(data: IUser) {

    const userRepository = new UserRepository()

    const response = await userRepository.setInfos(data)

    return response
  }
}