import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet , FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Helloworld';
  message : string ="HEllo from bridgelabz";
  imageURL: string="assets/logoBridge.jpg";
  userName: string = ""; 
  openBridgelabzSite() : void{
      window.open("https://www.bridgelabz.com", "_blank")
  }
}

