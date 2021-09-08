import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatInputModule} from '@angular/material/input';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CallComponent } from './call/call.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CallService } from './call/call.service';
import { DialogComponent } from './call/dialog/dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    CallComponent,
    DialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatSnackBarModule,
    MatInputModule,
    ClipboardModule,
    FormsModule
  ],
  providers: [CallService],
  bootstrap: [AppComponent]
})
export class AppModule { }
