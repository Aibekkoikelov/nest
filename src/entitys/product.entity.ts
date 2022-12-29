import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";


@Entity()
export class Product {

  @PrimaryGeneratedColumn()
    id: number;


  @Column()
  name: string;

  @Column()
  price: number;

  @Column()
  description: string;

  @Column()
  category: string;

  @Column()
  image: string;




}

// generate изменяет изменения в entitys и создает миграцию
// run запускает миграцию в базе данных