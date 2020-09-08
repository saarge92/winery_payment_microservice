import { Controller } from '@nestjs/common';
import { SellService } from '../services/sell.service';
import { GrpcMethod } from '@nestjs/microservices';
import { VineSellDto } from '../dto/vine.sell.dto';
import { Observable, of } from 'rxjs';

@Controller()
export class SellController {
  constructor(private readonly sellService: SellService) {
  }

  @GrpcMethod('VineSellService', 'sellVines')
  public async sellVines(sellData: VineSellDto): Promise<Observable<string>> {
    const charge = await this.sellService.buyVine(sellData);
    return of(charge.id);
  }
}