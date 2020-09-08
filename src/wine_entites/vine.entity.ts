import {
  Column,
  CreateDateColumn, DeleteDateColumn,
  Entity,
  PrimaryColumn,
  PrimaryGeneratedColumn, UpdateDateColumn,
} from 'typeorm/index';

@Entity('vines')
export class Vine {
  @PrimaryColumn({
    type: 'varchar',
    width: 255,
  })
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    name: 'name_rus',
    type: 'varchar',
    width: 255,
    nullable: false,
  })
  nameRus: string;

  @Column({
    name: 'name_en',
    type: 'varchar',
    width: 255,
    nullable: true,
  })
  nameEn: string;

  @Column({
    name: 'price',
    type: 'double',
    precision: 20,
    scale: 2,
    nullable: false,
  })
  price: number;

  @Column({
    name: 'price_cup',
    type: 'double',
    precision: 20,
    scale: 2,
    nullable: true,
  })
  priceCup: number;

  @Column({
    name: 'volume',
    type: 'double',
    precision: 10,
    scale: 2,
    nullable: false,
  })
  volume: number;

  @Column({
    name: 'year',
    type: 'integer',
    nullable: true,
  })
  year: number;

  @Column({
    name: 'strength',
    type: 'double',
    precision: 10,
    scale: 2,
    nullable: false,
  })
  strength: number;

  @Column({
    name: 'sort_contain',
    type: 'text',
    nullable: true,
  })
  sort_contain: string;

  @Column({ name: 'image_src', width: 255, nullable: true })
  image_src: string;

  @Column({ type: 'boolean', default: false })
  is_coravin: boolean;

  @CreateDateColumn({ default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

  @UpdateDateColumn({ default: () => 'CURRENT_TIMESTAMP' })
  updated_at: Date;

  @DeleteDateColumn()
  deleted_at?: Date;
}