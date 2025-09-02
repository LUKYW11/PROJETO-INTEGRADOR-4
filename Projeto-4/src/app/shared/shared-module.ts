import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing-module';
import { BotaoComponet } from './botao-componet/botao-componet';


@NgModule({
  declarations: [
    BotaoComponet
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
  ],
    exports: [
    BotaoComponet
  ]
  
})
export class SharedModule { }
