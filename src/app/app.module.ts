import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { ChatbotService } from './chatbot.service';

import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';

// Must export the config
export const firebaseConfig = {
  apiKey: 'AIzaSyAFqHVoLVIy6Ay3iN0wPPoC3CgqxrlKUjg',
  authDomain: 'ionchat-14785.firebaseapp.com',
  databaseURL: 'https://ionchat-14785.firebaseio.com',
  storageBucket: 'ionchat-14785.appspot.com',
  messagingSenderId: '536874551864'
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [ChatbotService],
  bootstrap: [AppComponent]
})
export class AppModule { }
