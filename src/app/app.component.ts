import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { faker } from '@faker-js/faker';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  randomText = faker.lorem.sentence();
  textLength ='';

  onInputInteract(target: EventTarget){
    const value = (<HTMLInputElement>target).value;
    this.textLength = value;
  }

  onComparison(randomLetter: string, enteredLetter: string){
    if(!enteredLetter){
      return 'pending';
    }
    return enteredLetter === randomLetter ? 'correct' : 'incorrect';
  }
  
}
