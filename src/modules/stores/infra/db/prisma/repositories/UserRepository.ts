import { User } from '@prisma/client'
import { prisma } from '../../../../../../shared/infra/db/prisma/client'
import { IUserRepository } from '../../../../repositories/IUserRepository'
import { IUser } from '../../../../useCases/UpdateUserUseCase'

export interface IRegisterUserDTO {
  email: string,
  password: string,
}

export class UserRepository implements IUserRepository {
  async register(data: IRegisterUserDTO): Promise<User> {
    const response = await prisma.user.create({
        data
    })
    return response
  }

  async setInfos(data: IUser) {
    const response = await prisma.user.update({
      where: {email: data.email},
      data
    })
    return response
  }

  async getUser(filters: any): Promise<User | null> {
    const query: any = {
      where: {
        seen: false
      },
      include: {
        interest: true
      }
    }

    if (filters.degree) {
      query.where.degree = filters.degree
    }

    if (filters.location) {
      query.where.location = filters.location
    }

    if (filters.availability) {
      query.where.availability = +(filters.availability)
    }

    console.log(query)

    const response = await prisma.user.findFirst(query)

    console.log(response)

    return response
  }

  async getUserByEmail(email: string): Promise<User | null> {
    const user = await prisma.user.findFirst({
      where: {
        email
      }
    })

    return user
  }
}