import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm/index';
import { VineInfoDto } from '../dto/vine.sell.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Vine } from '../wine_entites/vine.entity';

@Injectable()
export class VineCheckRules {
  constructor(@InjectRepository(Vine) private readonly vineRepository: Repository<Vine>) {
  }

  public async checkValidation(vineInfoDto: Array<VineInfoDto>): Promise<[boolean, number]> {
    let totalPrice = 0;
    for (const vineInfo of vineInfoDto) {
      const vineExist = await this.vineRepository.findOne(vineInfo.vineId);
      if (!vineExist) return [false, null];
      totalPrice += vineExist.price * vineInfo.quantity;
    }
    return [true, totalPrice];
  }

}