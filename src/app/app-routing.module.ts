import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FaqComponent } from './faq/faq.component';
import { UserGuideComponent } from './user-guide/user-guide.component';

const routes: Routes = [
  { path: 'faq', component: FaqComponent },
  { path: 'user-guide', component: UserGuideComponent },
  { path: '',
    redirectTo: '/faq',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
