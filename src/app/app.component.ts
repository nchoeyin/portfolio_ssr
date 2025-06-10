import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpCacheComponent } from "./http-cache/http-cache.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HttpCacheComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio_ssr';

  @ViewChild('content') contentRef!: ElementRef;

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    // console.log('AppComponent initialized');
    // console.log('Window object:', window);
    console.log('Content reference:', this.contentRef); 
  }
}
