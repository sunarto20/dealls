import { prismaClient } from "../apps/database";
import { ResponseError } from "../apps/error/response";
import { CreateUserRequest, toUserResponse, UserResponse } from "../model/user";
import { UserValidation } from "../validation/user";
import { Validateion } from "../validation/validation";

import bcrypt from "bcrypt";

export class UserService {
  static async register(request: CreateUserRequest): Promise<UserResponse> {
    const requestData = Validateion.validate(UserValidation.REGISTER, request);

    const totalUserWithUsername = await prismaClient.user.count({
      where: {
        username: request.username,
      },
    });

    if (totalUserWithUsername != 0) {
      throw new ResponseError("Username already exist", 400);
    }

    requestData.password = await bcrypt.hash(requestData.password, 10);

    const user = await prismaClient.user.create({
      data: requestData,
    });

    return toUserResponse(user);
  }
}
