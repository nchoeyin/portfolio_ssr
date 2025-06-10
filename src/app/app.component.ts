import { afterNextRender, Component, ElementRef, ViewChild } from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { HttpCacheComponent } from "./http-cache/http-cache.component";

@Component({
  selector: 'app-root',
  imports: [RouterModule, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio_ssr';

  @ViewChild('content') contentRef!: ElementRef;

  constructor() {
    afterNextRender(() => {
      // console.log('Content reference:', this.contentRef); 
      const contentHeight = this.contentRef.nativeElement.offsetHeight;
      console.log('Content height:', contentHeight);
    });
      // This will run after the next render cycle, ensuring that the DOM is ready.
    // console.log('AppComponent constructor called');
    // console.log('Window object:', window);
  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    // console.log('AppComponent initialized');
    // console.log('Window object:', window);
    console.log('Content reference:', this.contentRef); 
  }
}
