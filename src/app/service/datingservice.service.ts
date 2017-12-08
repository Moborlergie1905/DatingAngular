import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import {Observer} from 'rxjs/Observer';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
import { IUser } from '../model/user';
import { ConfigService } from '../shared/config.service';

@Injectable()
export class DatingService {

  private  isLoggedIn = false;

  private headers = new Headers({'Content-Type': 'application/json'});
  
      _baseUrl: string = '';

      user: IUser;

  constructor(private _http: Http, private configService: ConfigService) {
    this._baseUrl = configService.getApiURI();
   }  

//    CreateProfile(FirstName:string,LastName:string,Gender:string,Email:string,Password:string,Country:string,City:string,DOB:Date){
//      let body = JSON.stringify({FirstName:FirstName,
//                                 LastName:LastName,
//                                 Gender:Gender,                                
//                                 Email:Email,
//                                 Password:Password,
//                                 Country:Country,
//                                 City:City,
//                                 DOB:DOB});
//     return this._http.post(this._baseUrl + 'profile/', body, {headers: this.headers})
//                      .toPromise()
//                      .then(res => res.json().data as IUser)
//                      .catch(this.handleError);
//    }
//    CreateProf(User: IUser){
//        let body = JSON.stringify(User);
//        return this._http.post(this._baseUrl + 'profile/', body, {headers: this.headers})
//                          .toPromise()
//                          .then(res => res.json().data as IUser)
//                          .catch(this.handleError);
//    }
    CreateProfile(myData: any){
    let body = JSON.stringify(myData);
    return this._http.post(this._baseUrl + 'profile/', body, {headers: this.headers})
                      .toPromise()
                      .then(res => res.json().data)
                      .catch(this.handleError);
}

   UpdateProfile(user: IUser): Observable<void>{
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Access-Control-Allow-Origin', '*');

    return this._http.put(this._baseUrl + 'profile/' + user.ID, JSON.stringify(user), {headers: header})
      .map((res: Response) => { return; })
      .catch(this.handleError);
   }

   private errHandler(){
       console.log('Error occured');
   }
   private handleError(error: Response) {
       console.error(error);
       return Observable.throw(error);    
    }    
}


