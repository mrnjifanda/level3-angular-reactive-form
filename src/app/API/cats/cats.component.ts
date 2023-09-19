import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-cats',
  templateUrl: './cats.component.html',
  styleUrls: ['./cats.component.css']
})
export class CatsComponent implements OnInit{

  private url: string = 'https://api.artic.edu/api/v1/artworks/search';
  data: any = [];
  
  constructor (
    private httpClient: HttpClient
  ) {}

  ngOnInit (): void {

    this.httpClient.get(this.url + '?q=cats')
        .subscribe((response: any) => {

          this.data = response.data;
        })
  }
}