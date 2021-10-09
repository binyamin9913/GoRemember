import { Component, Input, OnInit } from '@angular/core';
import { GenderType } from '../const/gender-type';
import { TooltipPositionType } from '../const/tooltip-position-type.enum';
import { Links } from '../model/links.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() deadManName:any;
  @Input() privateName:any;
  splitedPrivateName:Links[]=[];
  tooltipPosition = TooltipPositionType;
  genderType = GenderType;
  remeberGender='';
  isDropDownOpen = true;
  linksList:Links[] | undefined;

  constructor() { 
  }

  ngOnInit(): void {
    this.privateName.split('').forEach((element: string) => this.splitedPrivateName.push(new Links(element,element,'lettersSoul')));
    this.remeberGender=this.deadManName.includes(this.genderType.BOY)?'זכרו':'זכרה';
    this.linksList=[
      new Links('blassBeforeLimud','ברכה לפני לימוד'),
      ...this.splitedPrivateName,
      new Links('suolLetters','אותיות נשמה'),
      new Links('kelim','כלים כד'),
      new Links('blassAfterLimud','ברכה אחר לימוד'),
    ]    
  }

  upToTop():void{
    this.closeList();
    window.scrollTo(0,0);
  }

  closeList():void{
    this.isDropDownOpen=!this.isDropDownOpen;
  }

}
