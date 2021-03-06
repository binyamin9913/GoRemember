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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StratLimudService } from './limud/strat-limud.service';
import { HttpClientModule } from '@angular/common/http';
import { NgxScrollTopModule } from 'ngx-scrolltop';
import {DropdownModule} from 'primeng/dropdown';
import { AutofocusDirective } from './directives/autofocus.directive';

@NgModule({
  declarations: [
    AppComponent,
    CreateLimoudeComponent,
    HeaderComponent,
    LogoBnhComponent,
    LimudComponent,
    AutofocusDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TooltipModule,
    ButtonModule,
    HttpClientModule,
    NgxScrollTopModule,
    DropdownModule,
    FormsModule,
    ReactiveFormsModule
   ],
  providers: [StratLimudService],
  bootstrap: [AppComponent]
})
export class AppModule { }
