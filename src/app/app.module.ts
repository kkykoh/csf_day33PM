import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//Lottie configurations
import { LottieComponent, provideLottieOptions } from 'ngx-lottie'
import player from 'lottie-web'

import { AppComponent } from './app.component';

@NgModule({
  declarations: [ AppComponent ],
  //import LottieComponent
  imports: [
    BrowserModule, LottieComponent
  ],
  providers: [
    //load the lottie player service
    provideLottieOptions ({
      player: () => player
    })
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
