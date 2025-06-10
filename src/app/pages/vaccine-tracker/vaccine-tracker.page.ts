import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PetService } from '../../services/pet.service';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({ standalone: true, selector: 'app-vaccine-tracker', templateUrl: './vaccine-tracker.page.html', imports: [IonicModule, CommonModule, FormsModule] })
export class VaccineTrackerPage {
  petId!: number;
  petVac?: import('../../models/pet').Pet;
  vaccineName = '';
  vaccineDate = new Date().toISOString().slice(0,10);
  constructor(private route: ActivatedRoute, private petS: PetService) {
    this.petId = Number(this.route.snapshot.paramMap.get('id'));
    this.petVac = this.petS.getById(this.petId);
  }

  addVaccine() {
    if (this.petVac) {
      this.petS.addVaccine(this.petId, { name: this.vaccineName, date: this.vaccineDate });
      this.vaccineName = '';
      this.vaccineDate = '';
    }
  }
}
