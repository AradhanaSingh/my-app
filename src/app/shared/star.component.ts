import { Component, Input, ngOnChanges, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'pm-star',
    templateUrl: './star.component.html',
    styleUrls: ['star.component.css']
})

export class StarComponent implements ngOnChanges {
    // nested component exposes a property it can use to receive input from its container using aptlt named decorator "input decorator"
    // we want rating number to be passes into the nested component.
    // container component then passes data to the nested component by setting this property with property binding
    @Input() rating: number;
    startWidth: number;
    @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();
    //Type Script support generics
    //@Output() notify: EventEmitter<string> = new EventEmitter<string>();

    // raising rating clicked event
    onClick() {
        this.ratingClicked.emit(`The rating ${this.rating} was clicked`);
    }
    ngOnChanges(): void {
        this.startWidth = this.rating;
    }
}