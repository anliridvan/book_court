import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-button',
    template: `<button [ngClass]="btnClass">{{ label }}</button>`
})
export class ButtonComponent {
    @Input() label: string = '';
    @Input() btnClass: string = 'btn-primary';
}