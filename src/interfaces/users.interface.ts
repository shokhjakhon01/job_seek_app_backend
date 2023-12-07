export interface User {
  id?: number;
  username: string;
  email: string;
  password: string;
  user_type: 'freelancer' | 'client';
  avatar?: string; 
}
