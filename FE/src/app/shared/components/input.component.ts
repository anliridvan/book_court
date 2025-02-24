import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-input',
    template: `<input [type]="type" [placeholder]="placeholder" />`
})
export class InputComponent {
    @Input() type: string = 'text';
    @Input() placeholder: string = '';
}