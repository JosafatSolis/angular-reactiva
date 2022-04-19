import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CursosListComponent } from './components/cursos-list/cursos-list.component';
import { CursosFilterComponent } from './components/cursos-filter/cursos-filter.component';
import { CursoCardComponent } from './components/curso-card/curso-card.component';

@NgModule({
  declarations: [
    AppComponent,
    CursosListComponent,
    CursosFilterComponent,
    CursoCardComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
