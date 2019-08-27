import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
    selector: '[appDropdown]'
})
export class DropwodnDirective {
    @HostBinding('class.show') isOpen  = false;

    @HostListener('click') toogleOpen() {
        // this.isOpen = 'show';
        this.isOpen = !this.isOpen;
    }
}
