import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() deadManName:any;
  @Input() privateName:any;
  splitedPrivateName:string[]=[]

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.splitedPrivateName=this.privateName.split('')
  }

}
