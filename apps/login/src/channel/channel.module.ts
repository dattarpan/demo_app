import { Module } from "@nestjs/common";
import { ChannelModuleBase } from "./base/channel.module.base";
import { ChannelService } from "./channel.service";
import { ChannelController } from "./channel.controller";
import { ChannelResolver } from "./channel.resolver";

@Module({
  imports: [ChannelModuleBase],
  controllers: [ChannelController],
  providers: [ChannelService, ChannelResolver],
  exports: [ChannelService],
})
export class ChannelModule {}
