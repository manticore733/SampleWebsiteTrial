
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoveLetterComponent } from '../love-letter-component/love-letter-component';
import { CommonModule } from '@angular/common';
import { MemoriesWallComponent } from '../memories-wall-component/memories-wall-component';

@Component({
  selector: 'app-envelope',
  standalone : true,
  imports: [FormsModule, CommonModule, LoveLetterComponent],
  templateUrl: './envelope.html',
  styleUrls: ['./envelope.css'],
})
export class Envelope {
isOpen = false;
  isOpenedAndGone = false;

toggleEnvelope() {
  if (this.isOpen) return;
  console.log('🔥 TAPPED ENVELOPE');  // DEBUG
  this.isOpen = true;
  setTimeout(() => {
    this.isOpenedAndGone = true;
    console.log('✅ isOpenedAndGone = true NOW');  // DEBUG
  }, 1500);
}
}
