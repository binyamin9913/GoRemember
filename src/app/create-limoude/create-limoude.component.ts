import { Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TooltipPositionType } from '../const/tooltip-position-type.enum';

@Component({
  selector: 'app-create-limoude',
  templateUrl: './create-limoude.component.html',
  styleUrls: ['./create-limoude.component.scss']
})
export class CreateLimoudeComponent implements OnInit {
  
  public data:any=[]
  deadManName:string = '';
  activeateButton = true;
  tooltipPosition = TooltipPositionType
  profileForm!: FormGroup;

  constructor(private router:Router) {}

  ngOnInit() {
    this.profileForm = new FormGroup({privateName: new FormControl('',[Validators.required, Validators.pattern("[\u0590-\u05FF ]*")])});
  }

  setDeadManName(deadManName:Event){
      this.deadManName = (deadManName.target as HTMLInputElement).value;
      this.activeateButton = this.deadManName.length > 0 ? false : true ;
  }

  onSubmit(){
   sessionStorage.setItem('deadManName', this.deadManName);
   this.router.navigate(['ברכה לפני לימוד'])
  }

}
