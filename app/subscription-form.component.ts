import { Component } from 'angular2/core';

@Component({
    selector: 'subscription-form',
    templateUrl: 'app/subscription-form.component.html'
    styles: [`
        .ng-touched.ng-invalid {
            border: 1px solid yellow;
            background-color: lightblue;
        }

        .gregstyle {
            background-color: blue;
        }
    `]
})

export class SubscriptionFormComponent {

    toConsole(x) {
        console.log(x);
    }

    submitForm(control) {
        console.log(control);
        console.log("input 1 is: ",control.value.input1);
    }
}

