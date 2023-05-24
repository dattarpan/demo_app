import { ChannelUpdateManyWithoutUsersInput } from "./ChannelUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  blockedChannels?: ChannelUpdateManyWithoutUsersInput;
  channels?: ChannelUpdateManyWithoutUsersInput;
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  roles?: InputJsonValue;
  username?: string;
};
