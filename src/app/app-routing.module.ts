import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateLimoudeComponent } from './create-limoude/create-limoude.component';
import { LimudComponent } from './limud/limud.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
 {path:'',component: CreateLimoudeComponent},
 {path:':pageContent',component: LimudComponent},
 {path:'**',component: PageNotFoundComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
