import { Channel as TChannel } from "../api/channel/Channel";

export const CHANNEL_TITLE_FIELD = "name";

export const ChannelTitle = (record: TChannel): string => {
  return record.name || String(record.id);
};
