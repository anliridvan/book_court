import { Directive, HostListener } from '@angular/core';

@Directive({ selector: '[appClick]' })
export class ClickDirective {
    @HostListener('click', ['$event']) onClick(event: Event) {
        console.log('Element clicked!', event);
    }
}