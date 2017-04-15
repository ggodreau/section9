import { Http } from 'angular2/http';
import 'rxjs/add/operator/map';

export class PostService{

    private _url = "http://jsonplaceholder.typicode.com/posts";

    constructor(private _http: Http){
    }
    
    getPosts(){
        return this._http.get("http://jsonplaceholder.typicode.com/posts")
            .map(res => res.json());

    }

    createPost(post){
        return this._http.post(this._url, JSON.stringify(post))
            .map(res => res.json());
    }
}