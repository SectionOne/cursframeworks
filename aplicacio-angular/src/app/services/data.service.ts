import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root', // El servei està disponible a tota l'aplicació
})
export class DataService {
  private missatgeSubject = new BehaviorSubject<string>('Missatge inicial'); // BehaviorSubject amb un valor inicial
  missatge$ = this.missatgeSubject.asObservable(); // Observable per subscriure's

  enviarMissatge(missatge: string) {
    this.missatgeSubject.next(missatge); // Emet un nou missatge
  }
}
