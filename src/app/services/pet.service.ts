import { Injectable } from '@angular/core';
import { Pet, Vaccine } from '../models/pet';

@Injectable({
  providedIn: 'root'
})
export class PetService {
  private pets: Pet[] = [];
  private nextId = 1;

  getAll(): Pet[] {return this.pets;}
  
  getById(id: number) { return this.pets.find(p => p.id === id); }

  add(p: Omit<Pet,'id'|'vaccines'>) {
    this.pets.push({ ...p, id: this.nextId++, vaccines: [] });
  }
  addVaccine(petId: number, v: Omit<Vaccine,'id'>) {
    const pet = this.getById(petId);
    if (pet) pet.vaccines.push({ ...v, id: pet.vaccines.length+1 });
  }
}
