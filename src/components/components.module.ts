import { NgModule } from '@angular/core';
import { ItemBaseComponent } from './item-base/item-base';
import { ItemBase_2Component } from './item-base-2/item-base-2';
@NgModule({
	declarations: [ItemBaseComponent,
    ItemBase_2Component],
	imports: [],
	exports: [ItemBaseComponent,
    ItemBase_2Component]
})
export class ComponentsModule {}
