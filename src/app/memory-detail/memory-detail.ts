import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule, ViewportScroller } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Memory, MemoryService } from '../memory-service';

@Component({
  selector: 'app-memory-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './memory-detail.html',
  styleUrls: ['./memory-detail.css']
})
export class MemoryDetailComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private service = inject(MemoryService);
  private scroller = inject(ViewportScroller);
  
  memory = signal<Memory | undefined>(undefined);

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = Number(params.get('id'));
      const data = this.service.getMemoryById(id);
      this.memory.set(data);
      this.scroller.scrollToPosition([0, 0]);
    });
  }

  goBack() {
    this.router.navigate(['/']);
  }

  // ✅ ADDED THIS MISSING FUNCTION
  nextMemory() {
    const current = this.memory();
    if (current) {
      const allMemories = this.service.getMemories();
      // Calculate next ID (loops back to 0 if at the end)
      const nextId = (current.id + 1) % allMemories.length;
      
      this.router.navigate(['/memory', nextId]);
    }
  }
}