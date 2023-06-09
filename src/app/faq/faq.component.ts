import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.sass']
})
export class FaqComponent implements OnInit {

  faqs: Array<any> = [];

  constructor(private http: HttpClient) {
    this.http.get('https://jsonplaceholder.typicode.com/posts', {responseType: 'json'})
    .subscribe((res:any) => {
      this.faqs = res.slice(0,9);
    });

  }

  ngOnInit() {

  }
}
