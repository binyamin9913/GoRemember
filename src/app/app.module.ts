import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TooltipModule } from 'primeng/tooltip';
import {ButtonModule} from 'primeng/button';
import '@angular/compiler';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateLimoudeComponent } from './create-limoude/create-limoude.component';
import { HeaderComponent } from './header/header.component';
import { LogoBnhComponent } from './logo-bnh/logo-bnh.component';
import { LimudComponent } from './limud/limud.component';
import { StratLimudService } from './limud/strat-limud.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CreateLimoudeComponent,
    HeaderComponent,
    LogoBnhComponent,
    LimudComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TooltipModule,
    ButtonModule,
    HttpClientModule  ],
  providers: [StratLimudService],
  bootstrap: [AppComponent]
})
export class AppModule { }
