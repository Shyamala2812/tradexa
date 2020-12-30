import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SearchService } from '../services/search.service';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.css']
})
export class SearchInputComponent implements OnInit {
  searchInput = new FormControl('');

  constructor(public search: SearchService) {
    this.emitSearchInput();
  }

  ngOnInit(): void {
  }

  private emitSearchInput(): void {
    this.searchInput.valueChanges.subscribe((value) => {
      this.search.subject.next(value);
    });
  }

}
