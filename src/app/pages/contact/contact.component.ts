import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  title = 'MyShopApp';

  public addShopFormGroup!: FormGroup;

  constructor() { }

  ngOnInit() {
    this.addShopFormGroup = new FormGroup({
      shopName : new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(20)]),
      shopAddress : new FormControl('', [Validators.required, Validators.maxLength(200)])
    });
  }

  onSubmit(){
    alert("Suceess of Validation");
  }

  public checkError = (controlName: string, errorName: string) => {
    return this.addShopFormGroup.controls[controlName].hasError(errorName);
  }
}
