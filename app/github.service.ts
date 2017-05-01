import { Http } from 'angular2/http';
import { Observable } from 'rxjs/observable';
import 'rxjs/add/operator/map';
import { Injectable } from 'angular2/core';
import { User } from './user';
import 'rxjs/add/observable/forkJoin';

@Injectable()
export class GitService{

    private _url = "https://api.github.com/users/";
    private _user = "octocat";
    private _followers = "/followers";

    constructor(private _http: Http){
    }
    
    getUser() : Observable<User[]> {
        return this._http.get(this._url + this._user)
            .map(res => res.json());

    }

    getFollowers() : Observable {
        return this._http.get(this._url + this._user + this._followers)
            .map(res => res.json());
    }

}
