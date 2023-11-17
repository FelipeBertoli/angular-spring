import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit{
  @Input() role: string = '';
  buttonGroup:string = '';

  constructor() {
      this.buttonGroup = `<menu-button label="Botão"></menu-button>
    <menu-button label="Botão"></menu-button>
    <menu-button label="Botão"></menu-button>
    <menu-button label="Botão"></menu-button>`;

  }

  ngOnInit(): void {

  }
  
  returnButtons(role:string) {
    console.log("Olá mundo")
    const result = document.getElementById('button-group');
  }
  
  
}

