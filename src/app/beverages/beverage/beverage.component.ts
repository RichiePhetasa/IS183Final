import { Component, OnInit } from '@angular/core';
import { BeverageService } from '../beverage.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-beverage',
  templateUrl: './beverage.component.html',
  styleUrls: ['./beverage.component.css']
})
export class BeverageComponent implements OnInit {
  beverage: Object;

  constructor(
    private beverageService: BeverageService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  async ngOnInit() {
    const resp = await this.beverageService.getBeverageById(this.activatedRoute.snapshot.params['id']);
    this.beverage = resp || [];
  }

  async updateBeverage(book: any) {
    const beverageID = book.id;
    const resp = await this.beverageService.updateBeverage(beverageID, book);
    if (resp) {
      this.router.navigate(['beverage']);
    }
  }

}

//   beverage: Object = {};

//   constructor() { }

//   ngOnInit() {

//   }

//   updateBeverage(beverage: any) {

//   }

// }
