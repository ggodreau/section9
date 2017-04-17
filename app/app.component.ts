import {Component} from 'angular2/core';
import {PostService} from './post.service';
import {HTTP_PROVIDERS} from 'angular2/http';
import {OnInit} from 'angular2/core';

@Component({
    selector: 'my-app',
    template: `
        <h1>PPHP</h1>
        <div *ngIf="isLoading">
            <i class="fa fa-spinner fa-spin fa-3x"></i>
        </div>
        <div align="center">
            <i class="fa fa-cog fa-spin fa-3x fa-fw"></i>
        </div>
    `,
    providers: [PostService, HTTP_PROVIDERS]
})

export class AppComponent implements OnInit {
    isLoading = true;

    constructor(private _postService: PostService){
        this._postService.createPost()
    }

    ngOnInit(){
        this._postService.getPosts()
        .subscribe(
            this.isLoading = false;
            posts => console.log(posts[0].id);
        );
    }
}
