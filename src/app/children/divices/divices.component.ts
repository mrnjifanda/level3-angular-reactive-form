import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-divices',
  templateUrl: './divices.component.html',
  styleUrls: ['./divices.component.css']
})
export class DivicesComponent {

  @Input() appareils: any;
  @Output() newItemEvent = new EventEmitter<string>() ;

  addNewItem(value : string) {
    this.newItemEvent.emit(value) ;
  }
}
