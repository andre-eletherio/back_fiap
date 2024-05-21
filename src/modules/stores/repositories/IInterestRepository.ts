import { Interest } from "@prisma/client";
import { IRegisterInterestDTO } from "../infra/db/prisma/repositories/InterestRepository";

export interface IInterestRepository {
    register(data: IRegisterInterestDTO): Promise<Interest>
}
