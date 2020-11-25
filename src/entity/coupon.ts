import {
    Column,
    CreateDateColumn,
    Entity,
    PrimaryColumn,
    UpdateDateColumn,
  } from 'typeorm';
  
  
  @Entity()
  export class coupon {
      
    @PrimaryColumn()
    public cpnid: number;
    
    @Column({ unique: true })
    public cpnname: string;
    
    @Column()
    public discount: number;
    
    @Column()
    public location: number;
    
    @CreateDateColumn()
    public createdAt: string;
    
    @UpdateDateColumn()
    public updatedAt: string;
  }
  