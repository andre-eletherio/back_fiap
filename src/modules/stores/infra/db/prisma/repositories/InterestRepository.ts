import { prisma } from '../../../../../../shared/infra/db/prisma/client'
import { IInterestRepository } from '../../../../repositories/IInterestRepository'

export interface IRegisterInterestDTO {
  userId: number,
  name: string
}

export class InterestRepository implements IInterestRepository {
  async register(data: IRegisterInterestDTO) {
    const response = await prisma.interest.create({
        data
    })
    return response
  }
}