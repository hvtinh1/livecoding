import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTableModule } from '@angular/material/table';
@NgModule({
  imports: [MatSlideToggleModule, MatCardModule, MatTableModule],
  exports: [MatSlideToggleModule, MatCardModule, MatTableModule],
})
export class MaterialModule {}
