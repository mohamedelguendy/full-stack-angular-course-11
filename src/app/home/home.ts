import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  name: string = 'Mohamed';
  age: number = 22;
  message: string = '';
  ITEMS: string[] = ["book1", "book2", "book3"];
  active: boolean = true;

  showMessage() {
    this.message = `Hello ${this.name}, you are ${this.age} years old.`;
  }
}
