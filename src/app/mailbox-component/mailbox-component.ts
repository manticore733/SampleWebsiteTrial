// import { Component, OnInit } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-mailbox',
//   standalone: true,
//   imports: [CommonModule],
//   templateUrl: './mailbox-component.html',
//   styleUrls: ['./mailbox-component.css']
// })
// export class MailboxComponent implements OnInit {
//   isLetterOut = false;
//   isTicketVisible = false; // ✅ New State

//   constructor(private router: Router) {}

//   ngOnInit() {
//     setTimeout(() => {
//       this.isLetterOut = true;
//     }, 1000);
//   }

//   openLetter() {
//     // Show the ticket overlay
//     this.isTicketVisible = true;
//   }

//   // inside mailbox.component.ts
// onYesClick() {
//   this.router.navigate(['/invitation']);
// }
  
//   goBack() {
//     this.router.navigate(['/']);
//   }
// }


import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mailbox',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mailbox-component.html',
  styleUrls: ['./mailbox-component.css']
})
export class MailboxComponent implements OnInit {
  isLetterOut = false;
  isTicketVisible = false;
  isFlipped = false;
  isErrorVisible = false; // ✅ New State for the 404 page

  constructor(private router: Router) {}

  ngOnInit() {
    setTimeout(() => {
      this.isLetterOut = true;
    }, 1000);
  }

  openLetter() {
    this.isTicketVisible = true;
    setTimeout(() => {
      this.isFlipped = true;
    }, 2500);
  }

  onYesClick() {
    this.router.navigate(['/invitation']);
  }

  // ✅ New Function: Show the fake error
  onNoClick() {
    this.isErrorVisible = true;
  }

  // ✅ New Function: Close error and go back to ticket
  closeError() {
    this.isErrorVisible = false;
  }
  
  goBack() {
    this.router.navigate(['/']);
  }
}