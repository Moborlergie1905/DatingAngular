export class IUser{
      ID?: number;
      FirstName: string;
      LastName: string;
      Email: string;
      Password: string;
      Gender: string;
      DOB: Date;
      Country: string;
      City: string;
      IsActive: string;
      Province: string;
      Marital: string;
      Height: string;
      Weight: string;
      BodyType: string;
      HaveChild: string;
      WantChild: string;
      Education: string;
      Ethnicity: string;
      Religion: string;
      Occupation: string;
      Smoke: string;
      Drink: string;
      RelType: string;
      Mobile: string;
      Nick: string;        
      Desc: string;
      Age: number
}

export class TokenReg{
      Email: string;
      Password: string;
      ConfirmPassword: string;
}

export class TokenParams{
      access_token: string;
      token_type: string;
      expires_in: string;
      userName: string;
}

export class LoginAccess{
      username: string;
      password: string;
      grant_type: string;
}

export interface IDateReg{
      ID?: number;
      MinAge?: number;
      MaxAge?: number;
      Height?: string;
      Weight?: string;
      BodyType?: string;
      HaveChild?: string;
      WantChild?: string;
      City?: string;
}