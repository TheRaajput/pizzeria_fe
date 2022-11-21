export interface Auth {
  token: string;
  data: AuthData;
}

export interface AuthData {
  user_id: string;
  name: string;
  email: string;
  contact_number: string;
}
