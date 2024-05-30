import { User } from "@prisma/client";

export type UserResponse = {
  id: number;
  username: string;
  name: string;
};

export type CreateUserRequest = {
  username: string;
  password: string;
  name: string;
};

export function toUserResponse(user: User): UserResponse {
  return {
    name: user.name,
    username: user.username,
    id: user.id,
  };
}
