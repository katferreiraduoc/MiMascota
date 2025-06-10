import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-vaccine-tracker',
  templateUrl: './vaccine-tracker.page.html',
  styleUrls: ['./vaccine-tracker.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class VaccineTrackerPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
