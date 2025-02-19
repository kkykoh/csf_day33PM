import { Component, OnInit } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';
import { LOTTIE } from '../../public/lottie/constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'day33pm';

  index=0

  share=false

  //Lottie file options
  options: AnimationOptions = {
    path: LOTTIE[this.index],
    
  }

  //fix one only to maintain the aspect ratio
  width='75vw'
  height='auto'

  ngOnInit(): void {
    const storedIndex = localStorage.getItem('idx');

    //if (storedIndex !==null) --> this converts it to boolean
      this.index = parseInt(storedIndex || '0' ) //-> this is saying: if the first one is correct, then no need to evaluate the 2nd condition (which is 0), if the first one is false, then default to '0'
    //if (v != null) 
        // this.index = parseInt(storedIndex)
    //else 
        //this.index=0

      this.options = {path: LOTTIE[this.index]}
      localStorage.setItem('idx',`${this.index}`)
      localStorage.setItem('date', (new Date()).toISOString())
      console.info('>>> this.index', this.index)

      console.info ('>> share', navigator.share)
      this.share = !!navigator.share
      console.info ('>> share', this.share)

//      this.share = true
  }

  shareContent(){
    navigator.share({
      title:'Fun Angular App',
      text: 'Checkout my first PWA',
      url: window.location.origin
    })
  }

  nextAnimation(){
    
    this.index = (this.index + 1) % LOTTIE.length
    
    // recreate options for the change detection to work
    this.options = {path: LOTTIE[this.index]}
    
    //save the index to local storage
    localStorage.setItem('idx',`${this.index}`)
    localStorage.setItem('date', (new Date()).toISOString())
  }


}
