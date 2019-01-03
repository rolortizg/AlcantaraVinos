//modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { MzNavbarModule } from 'ngx-materialize';
import { MzParallaxModule } from 'ngx-materialize';
import { MzCardModule } from 'ngx-materialize'



//components
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { VinosComponent } from './components/vinos/vinos.component';
import { AceitesComponent } from './components/aceites/aceites.component';
import { AboutUsComponent } from './components/about-us/about-us.component';

//routes
import {routes} from './routes';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    VinosComponent,
    AceitesComponent,
    AboutUsComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    MzNavbarModule,
    MzParallaxModule,
    MzCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
