import { User } from '../entities/User';

export interface RequestWithUser extends Request {
  user: User;
}
