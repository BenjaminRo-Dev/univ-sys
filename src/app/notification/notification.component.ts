import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../core/services/notification/notification.service';

@Component({
  selector: 'app-notification',
  standalone: true,
  imports: [],
  templateUrl: './notification.component.html',
  styleUrl: './notification.component.css'
})
export class NotificationComponent implements OnInit {

  message: string | null = null;

  constructor(private notificationService: NotificationService) { }

  ngOnInit(): void {
    this.notificationService.currentMessage.subscribe(message => this.message = message);
  }
}