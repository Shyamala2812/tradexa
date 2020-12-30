# Tradexa

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## App Workflow

- When user searches in search input , the search value will be passed to user-list component using BehaviourSubject through service.

- When user-list component receives the value from the search component, we will run the data fetching/ search/ filter logic available in service.

- When user clicks on table row , corresponding user name will be displayed below the search input and the data has been shared through common property in service.

- Strict typing follwed across application (Strict typing is mandatory in angular 11)
- Proper variable naming and other common style followed as per general js/TS community style guidelines 
- Proper interfaces added for responses and for other custom data types
- Utilized async pipe (Only to iterate the values) to display user list
- Data will be fetched and cached inthe service property for repeted use (filter based on users seaarch query)