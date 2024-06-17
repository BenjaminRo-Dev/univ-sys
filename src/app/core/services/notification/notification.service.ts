// notification.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private messageSource = new BehaviorSubject<string | null>(null);
  currentMessage = this.messageSource.asObservable();

  constructor() { }

  changeMessage(message: string) {
    this.messageSource.next(message);
    setTimeout(() => {
      this.messageSource.next(null);
    }, 5000); // El mensaje desaparece después de 5 segundos
  }
}
