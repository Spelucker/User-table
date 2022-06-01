import { Component, OnInit } from '@angular/core';
import {TableUserService, User} from "../tableUser.service";

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent implements OnInit {
  users: User[] = []

  constructor( private TableUserService: TableUserService) { }

  ngOnInit(): void {
    this.fetchUsers()
  }

  fetchUsers() {
    this.TableUserService.fetchUsers()
      .subscribe(users => {
        this.users = users
    })
  }
}
