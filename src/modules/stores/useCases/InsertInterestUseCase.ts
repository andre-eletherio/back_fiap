import { AppError } from "../../../shared/errors/AppError";
import { IRegisterInterestDTO, InterestRepository } from "../infra/db/prisma/repositories/InterestRepository";

export class InsertInterestUseCase {

  async execute(userId: number, interests: string[]) {

    if (!interests) {
      throw new AppError({message: "Erro interesses", title: "Erro interesses"}, 400)
    }

    const interestRepository = new InterestRepository()

    for (let interest of interests) {
      const ok: IRegisterInterestDTO = {
        userId,
        name: interest
      }

      await interestRepository.register(ok)
    }
  }
}