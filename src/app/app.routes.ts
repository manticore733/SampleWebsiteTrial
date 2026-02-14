import { Routes } from '@angular/router';
import { MemoriesWallComponent } from './memories-wall-component/memories-wall-component';
import { MemoryDetailComponent } from './memory-detail/memory-detail';
import { MailboxComponent } from './mailbox-component/mailbox-component';
import { InvitationComponent } from './invitation-component/invitation-component';

export const routes: Routes = [
// 1. The Home Page (The Wall)
  { path: '', component: MemoriesWallComponent },
  
  // 2. The Detail Page (The Long Story)
  // The ':id' is a placeholder for the memory number (0, 1, 2...)
  { path: 'memory/:id', component: MemoryDetailComponent },
  // ✅ New Route
  { path: 'mailbox', component: MailboxComponent },
  // ✅ New Route
  { path: 'invitation', component: InvitationComponent },
];
