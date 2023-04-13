import { UserService } from './../../services/user.service';
import { Component } from '@angular/core';
import { User } from 'src/app/interfaces/user';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent {

  public user : User | null = null;

  constructor(public userService : UserService) {
    userService.getUsers().subscribe(res => this.user = res[0] );
  }
}
