import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PetService } from '../../services/pet.service';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({ standalone: true, selector: 'app-pet-detail', templateUrl: './pet-detail.page.html', imports: [IonicModule, CommonModule] })
export class PetDetailPage implements OnInit {
  pet!: import('../../models/pet').Pet;
  constructor(private route: ActivatedRoute, private petS: PetService, private router: Router) {}
  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.pet = this.petS.getById(id)!;
  }
  goVaccines() {
    this.router.navigate(['/vaccine-tracker', this.pet.id]);
  }
}