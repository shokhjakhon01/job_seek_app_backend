import { EntityRepository, Repository } from 'typeorm';
import { Service } from 'typedi';
import { UserCategoryEntity } from '@/entities/userCategory.entity';
import { HttpException } from '@/exceptions/HttpException';
import { IUserCategory } from '@/interfaces/userCategory.interface';

@Service()
@EntityRepository()
export class UserCategoryService extends Repository<UserCategoryEntity> {
  public async findAllUserCategory(): Promise<IUserCategory[]> {
    const userCategory: IUserCategory[] = await UserCategoryEntity.find();
    return userCategory;
  }

  public async findUserCategoryById(categoryId: number): Promise<IUserCategory> {
    const findUserCategory: IUserCategory = await UserCategoryEntity.findOne(categoryId);
    if (!findUserCategory) throw new HttpException(404, 'User category not found');
    return findUserCategory;
  }
}
