import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { Pet } from '../../models/pet';
import { PetService } from '../../services/pet.service';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  standalone: true,
  imports: [IonicModule, CommonModule, RouterModule],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('300ms ease-in', style({ opacity: 1 }))
      ])
    ])
  ]
})

export class HomePage implements OnInit {
  pets: Pet[] = [];  // Aseguramos el tipo Pet[]
  constructor(private petS: PetService, private router: Router) {}
  ngOnInit() {
    this.pets = this.petS.getAll();
  }
  goAdd() {
    this.router.navigate(['/add-pet']);
  }
}