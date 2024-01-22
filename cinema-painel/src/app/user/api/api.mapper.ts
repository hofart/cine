import { UserModel } from "../models/UserModel";
import { UserModelDTO } from "./dto/UserModel.dto";

export function userListMapper(users: UserModelDTO[]): UserModel[] {
  return users.map((user) => UserModel.fromDTO(user))
}
