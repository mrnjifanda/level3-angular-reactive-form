import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-sent-to-parent',
  templateUrl: './sent-to-parent.component.html',
  styleUrls: ['./sent-to-parent.component.css']
})
export class SentToParentComponent {

  @Output() newDivice = new EventEmitter<any>();

  addNewDivice(): void {

    const value = { name: 'New Air purifier', quantity: 10, status: 'available' };
    this.newDivice.emit(value);
  }

}
