import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-cats',
  templateUrl: './single-cats.component.html',
  styleUrls: ['./single-cats.component.css']
})
export class SingleCatsComponent {

  id!: number;
  data: any;
  private url = 'https://api.artic.edu/api/v1/artworks';

  constructor (
    private route: ActivatedRoute,
    private httpClient: HttpClient
  ) {

    route.params.subscribe(params => {

      this.id = params['id'];
      this.httpClient.get(`${this.url}/${this.id}`).subscribe((response: any) => {

        this.data = response.data;
      })
    })
  }
}
