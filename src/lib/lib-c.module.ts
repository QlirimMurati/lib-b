import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentAModule } from '@testpolymon/lib-a/components';

@NgModule({
  imports: [CommonModule, ComponentAModule],
})
export class LibCModule {}
