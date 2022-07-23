import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HelloModule } from './hello/hello.module';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {path: '',
  component: LayoutComponent,
  children:[
    {
      path: '',
      loadChildren: () => import ('./hello/hello.module').then(m => HelloModule)
    }
  ]

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
