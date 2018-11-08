import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';
import { VocabComponent } from './vocab/vocab.component';


@NgModule({
  imports: [
    PagesRoutingModule,
  ],
  declarations: [
    PagesComponent,
    VocabComponent,
  ],
})
export class PagesModule {
}
