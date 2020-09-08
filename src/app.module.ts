import { Module } from '@nestjs/common';
import { SellService } from './services/sell.service';
import { SellController } from './controllers/sell.controller';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StripeModule } from 'nestjs-stripe';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
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
  providers: [SellService],
})
export class AppModule {
}
