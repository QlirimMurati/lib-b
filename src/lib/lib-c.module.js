import { __decorate } from 'tslib';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentAModule } from '@test/lib-a/components/src/lib/component-a';
let LibCModule = class LibCModule {};
LibCModule = __decorate(
  [
    NgModule({
      imports: [CommonModule, ComponentAModule],
    }),
  ],
  LibCModule
);
export { LibCModule };
//# sourceMappingURL=lib-c.module.js.map
