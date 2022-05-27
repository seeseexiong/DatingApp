import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'The Dating App';
  users: any;

  // Build our dependency-injection. This is naturally asynchronous
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getUsers();
  }

  // Create a method for the get request, then call this method inside of the ngOnInt() above
  getUsers() {
    this.http.get('https://localhost:5001/api/users').subscribe({
      // We get our data back, the response is the users variable above inside of AppComponent class
      next: response => this.users = response,
      // If there's any error then log the error
      error: error => console.log(error)  
    })
  }
}


// Updated way to use subscribe() -----------------------
/* 
getUsers() {
  this.http.get('xxxurlxxx').subscribe({
    next: response => this.users = response,
    error: error => console.log(error)
  })
}
*/
