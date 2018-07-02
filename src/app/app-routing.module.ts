import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { StartWebComponent } from './start-web/start-web.component';
import { TabelPageComponent } from './tabel-page/tabel-page.component';

const routes: Routes = [
  // { path: '', component: PageNotFoundComponent },
  { path: 'start', component: StartWebComponent },
  // { path: 'table', component: TabelPageComponent },
  { path: 'pagenotfound', component: PageNotFoundComponent },

  { path: '**', redirectTo: 'pagenotfound', outlet: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
