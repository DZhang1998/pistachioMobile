import { ItemDetailComponent } from './home/item-detail/item-detail.component';
import { NgModule } from '@angular/core'
import { Routes } from '@angular/router'
import { NativeScriptRouterModule } from '@nativescript/angular'

import { LoginComponent } from './login/login.component'
import { HomeComponent } from './home/home.component'

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: "home", component: HomeComponent },
  { path: "home/:id", component: ItemDetailComponent }
]

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule],
})
export class AppRoutingModule {}
