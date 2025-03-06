import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Helloworld';
  message : string ="HEllo from bridgelabz";
  imageURL: string="assets/logoBridge.jpg";
  openBridgelabzSite() : void{
      window.open("https://www.bridgelabz.com", "_blank")
  }
}

