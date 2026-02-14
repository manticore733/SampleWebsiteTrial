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
  isTicketVisible = false; // ✅ New State

  constructor(private router: Router) {}

  ngOnInit() {
    setTimeout(() => {
      this.isLetterOut = true;
    }, 1000);
  }

  openLetter() {
    // Show the ticket overlay
    this.isTicketVisible = true;
  }

  // inside mailbox.component.ts
onYesClick() {
  this.router.navigate(['/invitation']);
}
  
  goBack() {
    this.router.navigate(['/']);
  }
}