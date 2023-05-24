import { ChannelWhereInput } from "./ChannelWhereInput";
import { ChannelOrderByInput } from "./ChannelOrderByInput";

export type ChannelFindManyArgs = {
  where?: ChannelWhereInput;
  orderBy?: Array<ChannelOrderByInput>;
  skip?: number;
  take?: number;
};
