import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FontSizeEditorComponent } from './font-size-editor/font-size-editor.component';
import { PetComponent } from './pet/pet.component';
import { CaculatorComponent } from './caculator/caculator.component';
import { Caculator2Component } from './caculator2/caculator2.component';
import { ColorPickerComponent } from './color-picker/color-picker.component';
import { Calculator3Component } from './calculator3/calculator3.component';
import {FormsModule} from '@angular/forms';
import { AngularNameCardComponent } from './angular-name-card/angular-name-card.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { RatingBarComponent } from './rating-bar/rating-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    FontSizeEditorComponent,
    PetComponent,
    CaculatorComponent,
    Caculator2Component,
    ColorPickerComponent,
    Calculator3Component,
    AngularNameCardComponent,
    ProgressBarComponent,
    RatingBarComponent
  ],
    imports: [
        BrowserModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
