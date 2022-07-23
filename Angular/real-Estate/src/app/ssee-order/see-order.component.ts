import { Component, OnInit } from '@angular/core';
import { OrderService } from '../services/order.services';

@Component({
  selector: 'app-see-order',
  templateUrl: './see-order.component.html',
  
})
export class seeOrderComponent implements OnInit {

  constructor(private _OrderService: OrderService) { }
  public order : any ; 
  ngOnInit(): void {

    this._OrderService.Getorder().subscribe(res => this.order = res, err => console.log(err))
  }

}