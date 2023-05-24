import { SortOrder } from "../../util/SortOrder";

export type ChannelOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  totalFileCount?: SortOrder;
  totalImageCount?: SortOrder;
  totalLinkCount?: SortOrder;
  totalMessageCount?: SortOrder;
  updatedAt?: SortOrder;
};
