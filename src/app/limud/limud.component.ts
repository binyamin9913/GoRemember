import { Component, HostListener, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { GenderType } from '../const/gender-type';
import { StratLimudService } from './strat-limud.service';
import { ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-limud',
  templateUrl: './limud.component.html',
  styleUrls: ['./limud.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LimudComponent implements OnInit,OnDestroy {
  filesContent$:Observable<string> = new Observable<string>();
  subscriptions:Subscription[]=[];
  privateName:string = '';
  fullName:any;
  fileContent:string='';
  color:string | undefined; 
  genderType = GenderType;
  contantfontSize:number | undefined;
  titlePage='';
  
  constructor(private stratLimudService:StratLimudService ,private activatedRoute: ActivatedRoute) {
    this.subscriptions.push(this.activatedRoute.paramMap.subscribe(params => this.ngOnInit()));
   }

  ngOnInit(): void {
    this.setFullName();
    this.subscriptions=[...this.changeRoutes(),this.setTitleName()];
  }

  changeFontSize(fontSize:number){
    this.contantfontSize=fontSize;
  }

  changeColor(color:string){
    this.color=color;
  }

  private setFullName(){
    this.fullName = sessionStorage.getItem('deadManName');
    this.privateName = this.fullName.includes(this.genderType.BOY) ? this.extractPrivateName(this.fullName,this.genderType.BOY) : this.extractPrivateName(this.fullName,this.genderType.GIRL)
  }

  private changeRoutes():Subscription[]{
    const subscriptions:Subscription[]=[]
    subscriptions.push(this.activatedRoute.params.subscribe(params => this.filesContent$=this.stratLimudService.getContentFromFile(params['pageContent'])))
    subscriptions.push(this.filesContent$.subscribe(value => this.fileContent=value.toString().replace('(פב"פ)',this.fullName)))
    return subscriptions
  }

  private extractPrivateName(fullname:string,genderType:GenderType): string{
   return fullname.split(genderType)[0];
  }

  private setTitleName(){
    return this.activatedRoute.params.subscribe(params => this.titlePage = params['pageContent'])
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe())
  }

}
