import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import {AppComponent} from './app.component';

@Injectable()
export class ChatbotService {
  private username : string = '';
  private botID = '';
 
  private _Apikey: string = 'XsOL2PStpOR1vrgM'; 

  constructor(private _http: Http) { }

     getReply(msgForBot: string){ 
       let url = 'http://api.acobot.net/get?bid=521&key=XsOL2PStpOR1vrgM&uid=3&msg=' + msgForBot + '';

      return this._http.get(url)
     .map(res => res.json());

     }

     getCurrentData(){
        return this._http.get('http://date.jsontest.com')
        .map(res => res.json())
     }

   
    }

