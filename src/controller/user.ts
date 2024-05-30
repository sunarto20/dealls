import { NextFunction, Response, Request } from "express";
import { CreateUserRequest } from "../model/user";
import { UserService } from "../services/user";

export class UserController {
  static async register(
    request: Request,
    response: Response,
    next: NextFunction
  ) {
    try {
      const req: CreateUserRequest = request.body as CreateUserRequest;
      const res = await UserService.register(req);
      response.status(201).json({
        data: res,
      });
    } catch (error) {
      next(error);
    }
  }
}
