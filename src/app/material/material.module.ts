import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

const Material = [MatToolbarModule, MatButtonModule, MatIconModule];
@NgModule({
  declarations: [],
  imports: [CommonModule, ...Material],
  exports: [...Material],
})
export class MaterialModule {}
