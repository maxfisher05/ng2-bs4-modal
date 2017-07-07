import {Component, ViewChild, ViewEncapsulation} from '@angular/core';
import {Router} from '@angular/router';
import {ModalComponent} from '../src/ng2-bs4-modal/components/modal';

@Component({
    selector: 'modal-demo-component',
    templateUrl: 'demo/modal-demo.component.html',
    styles: [
        `.ng-valid[required] {
            border-left: 5px solid #5cb85c; /* green */
        }`,
        `.ng-invalid {
            border-left: 5px solid #d9534f; /* red */
        }`,
        `.header-style {
            color: #fff;
            background-color: #128477;
        }`
    ],
    encapsulation: ViewEncapsulation.None
})
export class ModalDemoComponent {

    @ViewChild('modal')
    modal: ModalComponent;
    items: string[] = ['item1', 'item2', 'item3'];
    selected: string;
    output: string;
    model: Person = new Person();

    index: number = 0;
    backdropOptions = [true, false, 'static'];

    animation: boolean = true;
    keyboard: boolean = true;
    backdrop: string | boolean = true;

    constructor(private router: Router) {
    }

    closed() {
        this.output = '(closed) ' + this.selected;
    }

    dismissed() {
        this.output = '(dismissed)';
    }

    opened() {
        this.output = '(opened)';
    }

    navigate() {
        this.router.navigateByUrl('/hello');
    }

    open() {
        this.modal.open();
    }
}

export class Person {
    firstName: string;
    lastName: string;
}