import { Component } from '@angular/core';

@Component({
    selector: 'pm-star',
    templateUrl: './star.component.html',
    styleUrls: ['star.component.css']
})

export class StarComponent {
    rating: number = 4;
    startWidth: number;

    ngOnChanges(): void {
        this.startWidth = this.rating * 86/5;
    }
}