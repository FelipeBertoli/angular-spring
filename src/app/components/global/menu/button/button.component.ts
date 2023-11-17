import { Component, Input } from '@angular/core';

@Component({
  selector: 'menu-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})

export class ButtonComponent {
    @Input() label: string = '';
}
