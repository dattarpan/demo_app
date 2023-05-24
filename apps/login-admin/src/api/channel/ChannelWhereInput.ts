import { UserListRelationFilter } from "../user/UserListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type ChannelWhereInput = {
  blockedBy?: UserListRelationFilter;
  id?: StringFilter;
  name?: StringFilter;
  totalFileCount?: IntNullableFilter;
  totalImageCount?: IntNullableFilter;
  totalLinkCount?: IntNullableFilter;
  totalMessageCount?: IntNullableFilter;
};
