import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import {Observer} from 'rxjs/Observer';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
import { IUser } from '../model/user';
import { TokenReg } from '../model/user';
import { ConfigService } from '../shared/config.service';


@Injectable()
export class DatingService {

  private  isLoggedIn = false;

  private headers = new Headers({'Content-Type': 'application/json'});
  
      _baseUrl: string = '';

      user: IUser;
      users: IUser[];
      tokenReg: TokenReg;

  constructor(private _http: Http, private configService: ConfigService) {
    this._baseUrl = configService.getApiURI();
   }  

   GetProfiles(): Observable<IUser[]>{
       return this._http.get(this._baseUrl + 'profile')
       .map((res: Response) => {
           return res.json() as IUser[];
       })
       .catch(this.handleError);
   }

   GetProfile(id: number): Observable<IUser>{
       return this._http.get(this._baseUrl + 'profile/' + id)
       .map((res: Response) => {
           return res.json();
       })
       .catch(this.handleError);
   }

    CreateProfile(user: IUser){
        let body = JSON.stringify(user);
        var requestOptions = new RequestOptions({method:RequestMethod.Post, headers: this.headers});
        return this._http.post(this._baseUrl + 'profile/', body, requestOptions)
                    .map(res => res.json())
                    .catch(this.handleError);
                    //   .toPromise()
                    //   .then(res => res.json().data)
                    //   .catch(this.handleError);
    }
    TokenBasedRegister(tokenReg: TokenReg){
        let body = JSON.stringify(tokenReg);
        var requestOptions = new RequestOptions({method:RequestMethod.Post, headers: this.headers});
        return this._http.post(this._baseUrl + 'account/register/',body,requestOptions)
        // .map(resp => resp.json())
        .catch(this.handleError);
    }

   UpdateProfile(id: number, user: any): Observable<void>{
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Access-Control-Allow-Origin', '*');

    return this._http.put(this._baseUrl + 'profile/' + id, JSON.stringify(user), {headers: headers})
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