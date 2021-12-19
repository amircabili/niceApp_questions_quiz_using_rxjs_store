import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import {StoreModule} from "@ngrx/store";

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from "@angular/common/http";
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {MatStepperModule} from "@angular/material/stepper";
import {ReactiveFormsModule} from "@angular/forms";
import {RouterModule, Routes} from "@angular/router";
import { MatDialogModule } from '@angular/material/dialog';
import { MatSliderModule } from '@angular/material/slider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import {CdkStepperModule} from "@angular/cdk/stepper";
import {questionsReducer} from "./appReducer";
import { AlertComponent } from './components/popups/alert/alert.component';



const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  }
];

// @ts-ignore
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    [RouterModule.forRoot(routes)],
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatSlideToggleModule,
    MatStepperModule,CdkStepperModule,
    ReactiveFormsModule,
    MatSliderModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatDialogModule,
    // @ts-ignore
    StoreModule.forRoot({questions : questionsReducer}),

  ],
  entryComponents: [
    // tslint:disable-next-line:max-line-length
    AlertComponent
  ],
  providers: [{
    provide: MatDialogRef,
    useValue: {}
  }, {
    provide: MAT_DIALOG_DATA,
    useValue: {}
  }],
  exports: [
  MatSliderModule,
  MatFormFieldModule,
  MatInputModule,
  MatRadioModule,
  AlertComponent
],
  bootstrap: [AppComponent]
})
export class AppModule { }
