import { Component, Input, ngOnChanges } from '@angular/core';

@Component({
    selector: 'pm-star',
    templateUrl: './star.component.html',
    styleUrls: ['star.component.css']
})

export class StarComponent implements ngOnChanges {
    // nested component exposes a property it can use to receive input from its container using aptlt named decorator "input decorator"
    // we want rating number to be passes into the nested component.
    // container component then passes data to the nested component by setting this property with property binding
    rating: number = 4;
    startWidth: number;

    ngOnChanges(): void {
        this.startWidth = this.rating * 86/5;
    }
}