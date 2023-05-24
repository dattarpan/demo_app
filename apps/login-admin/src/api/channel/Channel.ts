import { User } from "../user/User";

export type Channel = {
  blockedBy?: Array<User>;
  createdAt: Date;
  id: string;
  name: string;
  participant?: Array<User>;
  totalFileCount: number | null;
  totalImageCount: number | null;
  totalLinkCount: number | null;
  totalMessageCount: number | null;
  updatedAt: Date;
};
