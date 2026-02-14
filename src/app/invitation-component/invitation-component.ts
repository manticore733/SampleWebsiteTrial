import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-invitation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './invitation-component.html',
  styleUrls: ['./invitation-component.css']
})
export class InvitationComponent implements OnInit, OnDestroy {
  
  // Target Date: MAR 10, 2026 at 7:00 AM
  targetDate = new Date('2026-03-10T07:00:00');
  
  days: string = '00';
  hours: string = '00';
  minutes: string = '00';
  seconds: string = '00';
  
  private timerInterval: any;

  constructor(private router: Router) {}

  ngOnInit() {
    this.startTimer();
  }

  startTimer() {
    this.updateTime(); // Run immediately
    this.timerInterval = setInterval(() => {
      this.updateTime();
    }, 1000);
  }

  updateTime() {
    const now = new Date().getTime();
    const distance = this.targetDate.getTime() - now;

    if (distance < 0) {
      // Date passed
      this.stopTimer();
      return;
    }

    const d = Math.floor(distance / (1000 * 60 * 60 * 24));
    const h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const s = Math.floor((distance % (1000 * 60)) / 1000);

    // Pad with zeros (e.g., "5" -> "05")
    this.days = d < 10 ? '0' + d : d.toString();
    this.hours = h < 10 ? '0' + h : h.toString();
    this.minutes = m < 10 ? '0' + m : m.toString();
    this.seconds = s < 10 ? '0' + s : s.toString();
  }

  stopTimer() {
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
    }
  }

  ngOnDestroy() {
    this.stopTimer();
  }

  goBack() {
    this.router.navigate(['/mailbox']);
  }
}