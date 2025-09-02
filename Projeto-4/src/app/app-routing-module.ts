import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
{ path:'contador',   
  loadChildren: () => import('./contador/contador-module').then(m => m.ContadorModule)
},
{path: 'shared', 
  loadChildren: () => import('./shared/shared-module').then(m => m.SharedModule)
}
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
