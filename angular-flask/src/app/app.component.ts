import { Component } from '@angular/core';
import { AutoHeightService } from 'ngx-owl-carousel-o/lib/services/autoheight.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'angular-flask';
  customOptions: any = {
 
    
      loop:true,
      margin:10,
      nav:true,
      responsive:{
          0:{
              items:3
          },
          600:{
              items:3
          },
          1000:{
              items:5
          }
      }
  }


}
