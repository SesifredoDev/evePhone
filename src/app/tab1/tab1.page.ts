import { Component, OnInit } from '@angular/core';
import { Socket } from 'ngx-socket-io';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
// implements OnInit
  constructor(private socket:Socket) {
  }
  onOpen = () =>{
    this.socket.emit('msg', 'tab1')
  }
}
