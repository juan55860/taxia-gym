import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GymRoutingModule } from './gym-routing.module';
import { EquipmentComponent } from './equipment/equipment.component';
import { MaterialAngularModule } from './material-angular.module';
import { IngredientsComponent } from './ingredients/ingredients.component';
import { RutineComponent } from './rutine/rutine.component';

@NgModule({
  declarations: [EquipmentComponent, IngredientsComponent, RutineComponent],
  imports: [
    CommonModule,
    GymRoutingModule,
    MaterialAngularModule

  ]
})
export class GymModule { 

}
