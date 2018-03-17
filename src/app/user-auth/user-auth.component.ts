import { Component, OnDestroy, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-user-auth',
  templateUrl: './user-auth.component.html',
  styleUrls: ['./user-auth.component.scss']
})
export class UserAuthComponent implements OnInit, OnDestroy {

    constructor(private renderer: Renderer2) {
        this.renderer.addClass(document.body, 'center-content');
    }

  ngOnInit() {
  }

  ngOnDestroy() {
      this.renderer.removeClass(document.body, 'center-content');
  }

}
