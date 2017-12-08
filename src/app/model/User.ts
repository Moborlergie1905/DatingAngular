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