import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VocabComponent } from './vocab.component';
import { VocabAddComponent } from './vocab-add/vocab-add.component';

const routes: Routes = [{
  path: '',
  component: VocabComponent,
  children: [{
    path: 'add',
    component: VocabAddComponent,
  },],

}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class VocabRoutingModule { }

export const routedComponents = [
  VocabComponent,
  VocabAddComponent,
];