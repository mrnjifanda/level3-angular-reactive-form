import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-age',
  templateUrl: './age.component.html',
  styleUrls: ['./age.component.css']
})
export class AgeComponent implements OnInit{

  age: number = 10;

  @Input() appareils!: Array<any>;
  @Output() SendAge = new EventEmitter<number>();

  ngOnInit(): void {

    this.SendAge.emit(this.age);

    console.log(this.appareils);
    
  }

}
