import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentAModule } from '@test/lib-a/components';

@NgModule({
  imports: [CommonModule, ComponentAModule],
})
export class LibCModule {}
