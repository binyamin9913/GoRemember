import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GenderType } from '../const/gender-type';
import { StratLimudService } from './strat-limud.service';
import { ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-limud',
  templateUrl: './limud.component.html',
  styleUrls: ['./limud.component.scss']
})
export class LimudComponent implements OnInit {
  filesContent$:Observable<string> = new Observable<string>();
  privateName:string = '';
  fullName:any;
  fileContent:string='';
  genderType = GenderType;
  
  constructor(private stratLimudService:StratLimudService ,private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe(params => this.ngOnInit());
   }

  ngOnInit(): void {
    this.setFullName();
    this.changeRoutes();
  }

  private setFullName(){
    this.fullName = sessionStorage.getItem('deadManName');
    this.privateName = this.fullName.includes(this.genderType.BOY) ? this.extractPrivateName(this.fullName,this.genderType.BOY) : this.extractPrivateName(this.fullName,this.genderType.GIRL)
  }

  private changeRoutes(){
    this.activatedRoute.params.subscribe(params => this.filesContent$=this.stratLimudService.getContentFromFile(params['pageContent']))
    this.filesContent$.subscribe((value: string) => this.fileContent=value.toString().replace('(פב"פ)',this.fullName))
  }

  private extractPrivateName(fullname:string,genderType:GenderType): string{
   return fullname.split(genderType)[0];
  }

}
