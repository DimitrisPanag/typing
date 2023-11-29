import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { faker } from '@faker-js/faker';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {

  randomText = faker.lorem.sentence();
  textLength ='';

  onInputInteract(target: EventTarget){
    const value = (<HTMLInputElement>target).value;
    this.textLength = value;
  }
}
