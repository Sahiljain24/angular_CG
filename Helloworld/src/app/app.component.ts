import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true, 
  imports: [RouterOutlet, FormsModule], // ✅ Ensure FormsModule is imported
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Helloworld';
  message: string = "Hello from BridgeLabz";
  imageURL: string = "assets/logoBridge.jpg";
  userName: string = ""; 
  errorMessage: string = "";

  validateUserName($event:any) {
   const nameRegex = RegExp('^[A-Z][A-za-z\\s]{2,}$')
   if (nameRegex.test(this.userName)) {
    this.errorMessage=""
    return;
   }
   
    this.errorMessage="Name is incorrect";
   
  }

  openBridgelabzSite(): void {
    window.open("https://www.bridgelabz.com", "_blank");
  }
}
