import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface Song {
  title: string;
  artist: string;
  reason: string;
  emoji: string;
  // We will map these colors to CSS classes
  colorClass: string; 
}

@Component({
  selector: 'app-music-player',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './music-player.html',
  styleUrls: ['./music-player.css']
})
export class MusicPlayerComponent {
  
  activeTrack = 0;
  isPlaying = false;

  playlist: Song[] = [
    {
      title: "Perfect",
      artist: "Ed Sheeran",
      reason: "Because you are perfect to me, in every way",
      emoji: "💕",
      colorClass: "gradient-1",
    },
    {
      title: "All of Me",
      artist: "John Legend",
      reason: "Because I love all of you — every imperfect perfection",
      emoji: "🎹",
      colorClass: "gradient-2",
    },
    {
      title: "A Thousand Years",
      artist: "Christina Perri",
      reason: "Because I'd wait a thousand lifetimes for you",
      emoji: "⏳",
      colorClass: "gradient-3",
    },
    {
      title: "Thinking Out Loud",
      artist: "Ed Sheeran",
      reason: "Because I'll still love you when we're 70",
      emoji: "👴💃",
      colorClass: "gradient-4",
    },
    {
      title: "You Are The Reason",
      artist: "Calum Scott",
      reason: "Because you're the reason I believe in love",
      emoji: "✨",
      colorClass: "gradient-1",
    },
    {
      title: "Lover",
      artist: "Taylor Swift",
      reason: "Because every love story pales next to ours",
      emoji: "🦋",
      colorClass: "gradient-2",
    },
  ];

  togglePlay() {
    this.isPlaying = !this.isPlaying;
  }

  nextTrack() {
    this.activeTrack = (this.activeTrack + 1) % this.playlist.length;
    this.isPlaying = true;
  }

  prevTrack() {
    this.activeTrack = (this.activeTrack - 1 + this.playlist.length) % this.playlist.length;
    this.isPlaying = true;
  }

  selectTrack(index: number) {
    this.activeTrack = index;
    this.isPlaying = true;
  }
}