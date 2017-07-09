import { Component } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods, FirebaseListObservable } from 'angularfire2';
import { ChatbotService } from './chatbot.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items: FirebaseListObservable<any>;
  name: any;
  msgVal: string= '';
 nameVal: string= '';
replys: string = '';
getData: string;
postData: string;
avatar: any;

  constructor(public af: AngularFire,private _chatBotService: ChatbotService){
    this.items = af.database.list('/messages',{
      query: {
        limitToLast: 5
      }
     
    });
    
    this.af.auth.subscribe(auth =>{
      if(auth) {
        this.name = auth;
      }
    });
  }

  login(){
    this.af.auth.login({
      provider: AuthProviders.Anonymous,
      method: AuthMethods.Anonymous
    });
  } ;


  chatSend(theirMessage: string){
    this.items.push({message: theirMessage, name: this.nameVal});

    this._chatBotService.getReply(this.msgVal)
    .subscribe(
      data => this.replys = JSON.stringify(data.cnt),
       error => alert(error),
        () => this.saveMessage(),
    );
this.msgVal = '';

  }

  saveMessage(){
    console.log();
    const ReplayFromBot = this.replys.replace(/"/g, '');
    this.items.push({message: ReplayFromBot, name: 'Aco'})

  }
}
