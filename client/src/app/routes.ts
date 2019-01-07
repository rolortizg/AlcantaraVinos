import {Routes} from '@angular/router';


//components
import {HomeComponent} from './components/home/home.component';
import { VinosComponent } from './components/vinos/vinos.component';
import { AceitesComponent } from './components/aceites/aceites.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { JamonComponent } from './components/jamon/jamon.component';

export const routes: Routes = [
    
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home',  component: HomeComponent},
  { path: 'vinos',  component: VinosComponent},
  { path: 'aceites',  component: AceitesComponent},
  { path: 'jamones',  component: JamonComponent},
  { path: 'contacto',  component: AboutUsComponent},
  
]


