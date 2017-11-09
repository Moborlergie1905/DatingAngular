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

  private headers = new Headers({'Content-Type': 'application/json'});
  
      _baseUrl: string = '';

  constructor(private _http: Http, private configService: ConfigService) {
    this._baseUrl = configService.getApiURI();
   }  

   CreateProfile(FirstName:string,LastName:string,Gender:string,Email:string,Password:string,Country:string,City:string,DOB:Date){
     let body = JSON.stringify({FirstName:FirstName,
                                LastName:LastName,
                                Gender:Gender,                                
                                Email:Email,
                                Password:Password,
                                Country:Country,
                                City:City,
                                DOB:DOB});
    return this._http.post(this._baseUrl + 'profile/', body, {headers: this.headers})
                     .toPromise()
                     .then(res => res.json().data as IUser)
                     .catch(this.handleError);
   }


   private handleError(error: any) {
    var applicationError = error.headers.get('Application-Error');
    var serverError = error.json();
    var modelStateErrors: string = '';

    if (!serverError.type) {
        console.log(serverError);
        for (var key in serverError) {
            if (serverError[key])
                modelStateErrors += serverError[key] + '\n';
        }
    }

    modelStateErrors = modelStateErrors = '' ? null : modelStateErrors;

    return Observable.throw(applicationError || modelStateErrors || 'Server error');
}

}
