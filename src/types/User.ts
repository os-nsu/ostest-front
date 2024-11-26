import { MinimizedGroup } from './Group';

export interface User {
  id: number;
  username: string;
  firstName: string;
  secondName: string;
  group: MinimizedGroup;
}
