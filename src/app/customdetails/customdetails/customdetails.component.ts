import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { Customer } from 'src/app/customer';

@Component({
  selector: 'app-customdetails',
  templateUrl: './customdetails.component.html',
  styleUrls: ['./customdetails.component.scss']
})

export class CustomdetailsComponent implements OnInit {
  @Input() customer:Customer = new Customer();
  @Output() customerChange:EventEmitter<Customer> =new EventEmitter<Customer>(); 
    
  constructor() { }
 
  ngOnInit() {
  }
 
  update() {
    this.customerChange.emit(this.customer);
  }
}