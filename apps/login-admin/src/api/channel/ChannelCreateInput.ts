import { UserCreateNestedManyWithoutChannelsInput } from "./UserCreateNestedManyWithoutChannelsInput";

export type ChannelCreateInput = {
  blockedBy?: UserCreateNestedManyWithoutChannelsInput;
  name: string;
  participant?: UserCreateNestedManyWithoutChannelsInput;
  totalFileCount?: number | null;
  totalImageCount?: number | null;
  totalLinkCount?: number | null;
  totalMessageCount?: number | null;
};
