import { ChannelCreateNestedManyWithoutUsersInput } from "./ChannelCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  blockedChannels?: ChannelCreateNestedManyWithoutUsersInput;
  channels?: ChannelCreateNestedManyWithoutUsersInput;
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  roles: InputJsonValue;
  username: string;
};
