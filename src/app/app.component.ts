import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  ageFormChild!: number;
  appareils: any = [
    { name: 'Air purifier', quantity: 10, status: 'available' },
    { name: 'Alarm clock', quantity: 5, status: 'not available' },
    { name: 'Blender', quantity: 12, status: 'not available' },
    { name: 'Bluetooth Speaker', quantity: 2, status: 'available' },
    { name: 'Backup Charge', quantity: 7, status: 'available' }
  ]
  parentTitle: string = 'reactive-form  test';

  lateStudents = [
    'Idriss',
    'Bless',
    'Mike',
    'Roy',
    'Christian',
    'Laure',
    'Tresor'
  ];

  earlyStudents = [
    'Jane',
    'Ruth'
  ];

  absentStudents = [
    'Brice'
  ];

  updateTitle(): string {

    return this.parentTitle + 'This is my new title';
  }

  addNewAppareils(newAppareils: any): void {

    console.log(newAppareils);
    this.appareils.push(newAppareils);
  }

  reciveAge(age: number) {
    console.log(age);

    this.ageFormChild = age;
  }
}
