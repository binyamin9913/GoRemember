import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
  @Output() changeFontSizeInContext: EventEmitter<number> = new EventEmitter();
  @Output() changeColorOfContext: EventEmitter<string> = new EventEmitter();
  tooltipPosition = TooltipPositionType;
  genderType = GenderType;
  isDropDownOpen = true;
  linksPagesList:Links[] = [];

  constructor() {}

  ngOnInit(): void {
    this.privateName=this.deleteWhiteSpaces();
    this.generateDropDownList();
  }

  private deleteWhiteSpaces():string{
      //replace all white spaces with emptey char example " " => ""  משהבן <= משה בן
      return this.privateName.replace(/\s/g, "");
  }

  private generateDropDownList(){
    this.privateName.split('').forEach((element: string) => this.splitedPrivateName.push({routerLink:element,className:'lettersSoul'}));
    this.linksPagesList=[{routerLink:'ברכה לפני לימוד'},...this.splitedPrivateName,{routerLink:'אותיות נשמה'},{routerLink:'כלים כד'},{routerLink:'ברכה אחר לימוד'},]    
  }

  upToTop():void{
    this.closeList();
    window.scrollTo(0,0);
  }

  closeList():void{
    this.isDropDownOpen=!this.isDropDownOpen;
  }

  changeFontSize(fontSize:number):void{
    this.closeList();
    this.changeFontSizeInContext.emit(fontSize);
  }

  changeColor(color:string):void{
    this.closeList();
    this.changeColorOfContext.emit(color);
  }

}
