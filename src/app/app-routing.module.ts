import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { NavigationComponent } from './components/navigation/navigation.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'nav', component: NavigationComponent },
  { path: 'footer', component: FooterComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
//Exporting the components to app.module
export const routingLinks = [
  HomeComponent,
  NavigationComponent,
  FooterComponent,
];
