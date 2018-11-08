import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VocabRoutingModule, routedComponents } from './vocab-routing.module';

@NgModule({
  imports: [
    CommonModule,
    VocabRoutingModule
  ],
  declarations: [
    ...routedComponents,
  ]
})
export class VocabModule { }
