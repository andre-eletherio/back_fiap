import { Like, User } from '@prisma/client'
import { prisma } from '../../../../../../shared/infra/db/prisma/client'
import { ILikeRepository } from '../../../../repositories/ILikeRepository'

export interface IGetLikesDTO {

}

export class LikeRepository implements ILikeRepository {
  async register(userId: number): Promise<Like | void> {
    const alreadyExists = await prisma.like.findFirst({
      where: { userId }
    })

    if (!alreadyExists) {
      const response = await prisma.like.create({
        data: {
          userId
        }
      })
      return response
    }
  }

  async getLikes(): Promise<User[]> {
    const likes = await prisma.like.findMany({
      include: {
        user: true
      }
    })

    const array: User[] = []

    for (let like of likes) {
      if (like.user !== null) {
        array.push(like.user)
      }
    }

    return array
  }
}