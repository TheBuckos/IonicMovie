import { NgModule } from '@angular/core';
import { SearchComponent } from './search/search';
import { CardComponent } from './card/card';
@NgModule({
	declarations: [SearchComponent,
    CardComponent],
	imports: [],
	exports: [SearchComponent,
    CardComponent]
})
export class ComponentsModule {}
