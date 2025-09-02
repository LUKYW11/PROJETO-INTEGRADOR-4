import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BotaoComponet } from './botao-componet/botao-componet';

const routes: Routes = [{
  path: 'botao', component: BotaoComponet 
}
];

@NgModule({

  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedRoutingModule { }
