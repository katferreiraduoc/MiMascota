import { Component } from '@angular/core';
import { PetService } from '../../services/pet.service';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-pet',
  templateUrl: './add-pet.page.html',
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class AddPetPage {
  name = '';
  birthDate = '';
  weight!: number;
  breed = '';
  color = '';

  constructor(private petS: PetService, private router: Router) {}

  save() {
    this.petS.add({ name: this.name, birthDate: this.birthDate, weight: this.weight, breed: this.breed, color: this.color });
    this.router.navigate(['/home']);
  }
}