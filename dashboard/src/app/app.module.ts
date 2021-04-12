import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {RouterModule, Routes} from '@angular/router';
import {LoginModule} from './login/login.module';
import {DashboardModule} from './dashboard/dashboard.module';
import {RegistrationModule} from './registration/registration.module';
import {LayoutModule} from './layout/layout.module';
import {UsersModule} from './users/users.module';
// import {AccountSettingsModule} from './account-settings/account-settings.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { AppRoutingModule } from './app-routing.module';
import { ProductsComponent } from './products/products.component';
import { OrdersComponent } from './orders/orders.component';
import {ProductsModule} from './products/products.module'
import { OrdersModule } from './orders/orders.module';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' }),
    LayoutModule,
    LoginModule,
    //ProductsModule,
    DashboardModule,
    RegistrationModule,
    UsersModule,
    // AccountSettingsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ProductsModule,
    OrdersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
