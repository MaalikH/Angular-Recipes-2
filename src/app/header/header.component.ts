//Event emitter (featureSelected) used to pass the feature to appComponent using function onSelect...

import { Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {

	@Output() featureSelected = new EventEmitter<string>(); 

	onSelect(feature: string) {
		this.featureSelected.emit(feature);
		//console.log(feature)
	}

}
