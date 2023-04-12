import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LibAModule } from '@test/lib-a';
import { ComponentAModule } from '@test/lib-a/components/src/lib/component-a';

@NgModule({
  imports: [CommonModule, LibAModule, ComponentAModule],
})
export class LibBModule {}
