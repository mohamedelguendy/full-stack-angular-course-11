import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-service',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './service.html',
  styleUrls: ['./service.css']
})
export class Service {
  name = 'My First App Service';
  description = 'This is a service variable.';
}
