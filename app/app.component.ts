import {Component} from 'angular2/core';
import {PostService} from './post.service';
import {GitService} from './github.service';
import {HTTP_PROVIDERS} from 'angular2/http';
import {OnInit} from 'angular2/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/forkJoin';
import { SubscriptionFormComponent } from './subscription-form.component';

@Component({
    selector: 'my-app',
    styles: [`
        .avatar {
            border : 2px solid black;
            height: 50px;
            width: 50px;
            border-radius: 10px;
        }
    `],
    template: `
        <h1>PPHP</h1>
        <input type="text" [value]="userInput" (input)="userInput = $event.target.value"/>
        <div>{{ userInput }}</div>
        <input 
            type="button"
            (click)="submit()"
            value="Get User"
        >
        <subscription-form></subscription-form>
        <div>{{ user.avatar_url }}</div>
        <div *ngFor="#follower of followers">
            <div class="media-left">
                <img class=avatar src="{{follower.avatar_url}}">
            </div>
            <div class="media-body">
                {{follower.login}}
            </div>
        </div>
    `,
    providers: [PostService, HTTP_PROVIDERS, GitService]
})

export class AppComponent implements OnInit {
    followers = [];
    user = "";
//    userInput = "octocat";
    userInput = "agnathan";
    title = "myTitle";
    
    constructor(
        private _postService: PostService,
        private _gitService: GitService
    ){
        this._postService.createPost()
    }

    submit(){
        Observable.forkJoin(
            this._gitService.getUser(this.userInput),
            this._gitService.getFollowers(this.userInput)
        ).subscribe(res => {
            this.followers = res[1],
            this.user = res[0]
        });
    }
    
    ngOnInit(){
        Observable.forkJoin(
            this._gitService.getUser(this.userInput),
            this._gitService.getFollowers(this.userInput)
        ).subscribe(res => { 
            this.followers = res[1],
            this.user = res[0]
            }
        );
    }
}
