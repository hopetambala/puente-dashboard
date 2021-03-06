import { Component } from '@angular/core';

/**
 * Generated class for the RecordCardComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'record-card',
  templateUrl: 'record-card.html'
})
export class RecordCardComponent {
  //Card Animation
  flipped: boolean = false;

  text: string;

  constructor() {
    console.log('Hello RecordCardComponent Component');
  }

  flip(){
    //Card Animation
    this.flipped = !this.flipped;
  }

  /*
  Maybe a Modal?
  goToCertainPage(session: any) {
    this.navCtrl.push(SessionDetailPage, { sessionId: session.id });
  }

  goToCertainPage(speaker: any) {
    this.navCtrl.push(SpeakerDetailPage, { speakerId: speaker.id });
  }
  */

}
