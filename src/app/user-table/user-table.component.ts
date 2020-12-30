import { Component, OnInit } from '@angular/core';
import { SearchService, User } from '../services/search.service';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css']
})
export class UserTableComponent implements OnInit {
  userList: Promise<User[]>;
  constructor(private search: SearchService) {
    this.search.subject.subscribe(value => {
      this.userList = this.search.searchFilter(value);
    });

  }

  ngOnInit(): void {
  }

  showName(user: User): void {
    this.search.selectedName = user.name;
  }

}
