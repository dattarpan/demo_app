import { UserUpdateManyWithoutChannelsInput } from "./UserUpdateManyWithoutChannelsInput";

export type ChannelUpdateInput = {
  blockedBy?: UserUpdateManyWithoutChannelsInput;
  name?: string;
  participant?: UserUpdateManyWithoutChannelsInput;
  totalFileCount?: number | null;
  totalImageCount?: number | null;
  totalLinkCount?: number | null;
  totalMessageCount?: number | null;
};
