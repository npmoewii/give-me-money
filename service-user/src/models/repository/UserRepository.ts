import { AbstractRepository, EntityRepository } from 'typeorm';
import { User } from '../entities/User';

@EntityRepository(User)
export class UserRepository extends AbstractRepository<User> {
  getUser() {
    return this.repository.find();
  }
}

