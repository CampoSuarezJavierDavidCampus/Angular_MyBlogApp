import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
const routes: Routes = [
  //TODO Add Contact Component To Router
  {path:'contact',component:ContactComponent},
  //TODO Add Articles Routes To Router
  { path: 'articles', loadChildren: () => import('./articles/articles.module').then(m => m.ArticlesModule) },
  {path:'',pathMatch:'full',redirectTo:'articles'},
  {path:'**',redirectTo:'articles'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
