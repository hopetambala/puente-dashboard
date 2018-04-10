import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';

@Component({
  selector: 'smart-table',
  templateUrl: 'smart-table.html'
})
export class SmartTableComponent {
  //Fill settings with Column Headings from Parse Server
  settings = {
    columns: {
      id: {
        title: 'ID',
        filter: false
      },
      fname: {
        title: 'First Name',
        filter: false
      },
      lname: {
        title: 'Last Name',
        filter: false
      },
      DiabetesDiagnosis: {
        title: 'Diagnosis of Diabetes',
        filter: false
      },
      Availability: {
        title: 'When Are You Usually Available?',
        filter: false
      }
    }
  };

  //Loads Data into component
  source: LocalDataSource = new LocalDataSource();

  constructor() {
    //test data
    const data = [
    {
      id: 1,
      fname: "Test",
      lname: "Testerton",
      DiabetesDiagnosis: "Nope",
      Availability: "Always"
    },
    {
      id: 2,
      fname: "Test",
      lname: "Testy",
      DiabetesDiagnosis: "Yes",
      Availability: "Never"
    }];

    this.source.load(data);
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }

  }

  onSearch(query: string = '') {
    this.source.setFilter([
	// fields we want to include in the search
	// second parameter specifying whether to perform 'AND' or 'OR' search 
	// (meaning all columns should contain search query or at least one)
	// 'AND' by default, so changing to 'OR' by setting false here
      {
        field: 'id',
        search: query
      },
      {
        field: 'fname',
        search: query
      },
      {
        field: 'lname',
        search: query
      },
      {
        field: 'DiabetesDiagnosis',
        search: query
      },
      {
        field: 'Availability',
        search: query
      }
    ], false);
  }

}
