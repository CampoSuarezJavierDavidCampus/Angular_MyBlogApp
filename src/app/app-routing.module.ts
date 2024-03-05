import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { ArticlesComponent } from './articles/articles.component';
const routes: Routes = [
  //TODO Add Contact Component To Router
  {path:'contact',component:ContactComponent},

  //TODO Add Articles Routes To Router
  { path: 'articles', component:ArticlesComponent },
  {path:'',pathMatch:'full',redirectTo:'articles'},

  { path: 'blog', loadChildren: () => import('./blog/blog.module').then(m => m.BlogModule) },

  {path:'**',redirectTo:'articles'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
