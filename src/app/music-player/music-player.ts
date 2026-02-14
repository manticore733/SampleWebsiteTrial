import { Component, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface Song {
  title: string;
  artist: string;
  reason: string;
  emoji: string;
  colorClass: string;
  url: string; // Path to your audio file
}

@Component({
  selector: 'app-music-player',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './music-player.html',
  styleUrls: ['./music-player.css']
})
export class MusicPlayerComponent implements OnDestroy {
  
  activeTrack = 0;
  isPlaying = false;
  
  // ✅ Create the Audio Object
  audio = new Audio();

  playlist: Song[] = [
    {
      title: "Perfect",
      artist: "Ed Sheeran",
      reason: "Because you are perfect to me, in every way",
      emoji: "💕",
      colorClass: "gradient-1",
      url: "assets/songs/perfect.mp4" // 🎵 Update with your file names
    },
    {
      title: "Until I Found You",
      artist: "Stephen Sanchez ",
      reason: "Because I love all of you — every imperfect perfection",
      emoji: "🎹",
      colorClass: "gradient-2",
      url: "assets/songs/untilifoundu.mp4"
    },
    {
      title: "A Thousand Years",
      artist: "Christina Perri",
      reason: "Because I'd wait a thousand lifetimes for you",
      emoji: "⏳",
      colorClass: "gradient-3",
      url: "assets/songs/thousand.mp4"
    },
    {
      title: "For A Reason",
      artist: "Karan Aujla",
      reason: "Because you are the reason I wanna live everyday",
      emoji: "👴💃",
      colorClass: "gradient-4",
      url: "assets/songs/for.mp4"
    },
    {
      title: "Make You Mine (Put Your Hand in Mine)",
      artist: "PUBLIC",
      reason: "Will make you mineeeee forever!!",
      emoji: "🦋",
      colorClass: "gradient-2",
      url: "assets/songs/makeumine.mp4"
    },
  ];

  constructor() {
    // ✅ Auto-play next song when current one ends
    this.audio.onended = () => {
      this.nextTrack();
    };
  }

  // ✅ Helper to load and play a track
  playTrack() {
    this.audio.src = this.playlist[this.activeTrack].url;
    this.audio.load();
    this.audio.play();
    this.isPlaying = true;
  }

  togglePlay() {
    // If no song is loaded yet (first click)
    if (!this.audio.src) {
      this.playTrack();
      return;
    }

    if (this.audio.paused) {
      this.audio.play();
      this.isPlaying = true;
    } else {
      this.audio.pause();
      this.isPlaying = false;
    }
  }

  nextTrack() {
    this.activeTrack = (this.activeTrack + 1) % this.playlist.length;
    this.playTrack(); // Load and play new song
  }

  prevTrack() {
    this.activeTrack = (this.activeTrack - 1 + this.playlist.length) % this.playlist.length;
    this.playTrack(); // Load and play new song
  }

  selectTrack(index: number) {
    if (this.activeTrack === index && this.isPlaying) {
      this.togglePlay(); // Pause if clicking the same active song
    } else {
      this.activeTrack = index;
      this.playTrack();
    }
  }

  // ✅ Cleanup: Stop music if user leaves the page
  ngOnDestroy() {
    this.audio.pause();
    this.audio.src = '';
  }
}