import { Component, OnInit } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  
  constructor(private socket: Socket, public formBuilder: FormBuilder, private ionicForm: FormGroup) {
    this.ionicForm = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
   })
   }

  ngOnInit() {
  }
  loginForm=()=>{
    this.socket.emit('msg', 'loggedIn')
  }
}
