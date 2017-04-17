import { Http } from 'angular2/http';
import { Observable } from 'rxjs/observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { Injectable } from 'angular2/core';
import { Post } from './post';

@Injectable()
export class PostService{

    private _url = "http://jsonplaceholder.typicode.com/posts";

    constructor(private _http: Http){
    }
    
    getPosts() : Promise<Post[]> {
        return this._http.get("http://jsonplaceholder.typicode.com/posts")
            .map(res => res.json())
            .toPromise();

    }

    createPost(post: Post){
        return this._http.post(this._url, JSON.stringify(post))
            .map(res => res.json());
    }
}
