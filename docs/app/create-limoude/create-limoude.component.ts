import { Component, Inject, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { TooltipPositionType } from '../const/tooltip-position-type.enum';
import { StratLimudService } from '../limud/strat-limud.service';

@Component({
  selector: 'app-create-limoude',
  templateUrl: './create-limoude.component.html',
  styleUrls: ['./create-limoude.component.scss'],
})
export class CreateLimoudeComponent implements OnInit {
  
  public data:any=[]
  deadManName:string = '';
  activeateButton = true;
  tooltipPosition = TooltipPositionType

  constructor(private router:Router) {}

  ngOnInit() {}

  setDeadManName(deadManName:Event){
      this.deadManName = (deadManName.target as HTMLInputElement).value;
      this.activeateButton = this.deadManName.length > 0 ? false : true ;
  }

  startStudy(){
   sessionStorage.setItem('deadManName', this.deadManName);
   this.router.navigate(['blassBeforeLimud'])
    
  }

}
