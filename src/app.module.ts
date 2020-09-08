import { Module } from '@nestjs/common';
import { SellService } from './services/sell.service';
import { SellController } from './controllers/sell.controller';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Vine } from './wine_entites/vine.entity';
import { StripeModule } from 'nestjs-stripe';
import { VineCheckRules } from './services/vine.check.service';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    TypeOrmModule.forFeature([
      Vine,
    ]),
    StripeModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        apiKey: configService.get('STRIPE_PUBLIC_KEY'),
        apiVersion: '2020-08-27',
      }),
    }),
    ConfigModule,
  ],
  controllers: [SellController],
  providers: [SellService, VineCheckRules],
})
export class AppModule {
}
