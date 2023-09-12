import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent {

  @HostBinding('class.is-open')
  isOpen = false;

  title: string = 'Current title';

  toggle(title: string) {

    // if (this.isOpen === true) {
    //   this.isOpen = false;
    // } else {
    //   this.isOpen = true;
    // }
    
    this.title = title;
    this.isOpen = !this.isOpen;
  }

}
