import { Channel } from "../channel/Channel";
import { JsonValue } from "type-fest";

export type User = {
  blockedChannels?: Array<Channel>;
  channels?: Array<Channel>;
  createdAt: Date;
  firstName: string | null;
  id: string;
  lastName: string | null;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
