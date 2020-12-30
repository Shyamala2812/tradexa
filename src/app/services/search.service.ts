import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Subject } from 'rxjs';

export interface Company {
  name: string;
}

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  company: Company;
  phone: string;
}


@Injectable({
  providedIn: 'root'
})
export class SearchService {
  subject = new BehaviorSubject(null);
  selectedName = '';
  result: User[];

  constructor(private http: HttpClient) { }

  async searchFilter(value: string | null): Promise<User[]> {
    try {
      if (!this.result) {
        this.result = await this.http.get<User[]>('https://jsonplaceholder.typicode.com/users').toPromise();
      }

      if (!value) {
        // if empty, return all results
        return this.result;
      }

      // if something searched in search input
      return this.result.filter((item) => {
        return item.name.toLowerCase().includes(value.toLowerCase());
      });
    } catch (error) {
      console.error(error);
    }
  }

}


