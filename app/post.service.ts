import { Http } from 'angular2/http';
import { Observable } from 'rxjs/observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { Injectable } from 'angular2/core';
import { Post } from './post';

// test change

@Injectable()
export class PostService{

//    private _url = "http://jsonplaceholder.typicode.com/posts";

    private _url = "https://api.github.com/users/";
    private _user = "octocat";

    constructor(private _http: Http){
    }
    
<<<<<<< HEAD
    getPosts() : Promise<Post[]> {
        return this._http.get("http://jsonplaceholder.typicode.com/posts")
            .map(res => res.json())
            .toPromise();
=======
    getPosts() : Observable<Post[]> {
        return this._http.get(this._url + this._user)
            .map(res => res.json());
>>>>>>> exercise

    }

    createPost(post: Post){
        return this._http.post(this._url, JSON.stringify(post))
            .map(res => res.json());
    }
}
