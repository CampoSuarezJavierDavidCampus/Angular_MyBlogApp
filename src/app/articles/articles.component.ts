import { Component, OnInit } from '@angular/core';
import { ScullyRoute, ScullyRoutesService } from '@scullyio/ng-lib';
import { Observable, map } from 'rxjs';
@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {
  post$:Observable<ScullyRoute[]> | undefined;

  //* We are going to add all post trouth lezzy loadding
  constructor(
    private scullyService:ScullyRoutesService
  ) {}
  ngOnInit(): void {
    this.post$ = this.scullyService.available$.pipe(
      map(post => post.filter(post => post.title))
    );
  }

}
