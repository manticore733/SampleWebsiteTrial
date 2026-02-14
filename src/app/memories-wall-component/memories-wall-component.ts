import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Memory, MemoryService } from '../memory-service';
import { Envelope } from '../envelope/envelope';
import { LoveCouponsComponent } from '../love-coupons-component/love-coupons-component';
import { MusicPlayerComponent } from '../music-player/music-player';


@Component({
  selector: 'app-memories-wall-component',
  standalone: true,
  imports: [CommonModule,Envelope,LoveCouponsComponent,MusicPlayerComponent],
  templateUrl: './memories-wall-component.html',
  styleUrls: ['./memories-wall-component.css'],
})
export class MemoriesWallComponent {
  private router = inject(Router);
  private memoryService = inject(MemoryService);
  
  // Fetch data from the Kitchen
  memories: Memory[] = this.memoryService.getMemories();

  trackById = (index: number, memory: Memory) => memory.id;

  // ✅ The Click Action
  openMemory(memory: Memory) {
    console.log('Navigating to memory:', memory.id); // Debug check
    this.router.navigate(['/memory', memory.id]);
  }
}