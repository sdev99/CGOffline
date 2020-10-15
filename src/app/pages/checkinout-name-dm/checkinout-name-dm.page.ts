import {Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';
import {NavController} from '@ionic/angular';
import {ActivatedRoute} from '@angular/router';
import {SharedDataService} from '../../services/shared-data.service';

@Component({
    selector: 'app-checkinout-name-dm',
    templateUrl: './checkinout-name-dm.page.html',
    styleUrls: ['./checkinout-name-dm.page.scss'],
})
export class CheckinoutNameDmPage implements OnInit {
    @ViewChild('itemRef') itemRef: any;
    name;
    showList = false;
    items = ['Fisher Serenity', 'Alreadycheckin Test', 'Murphy Claire', 'Edwards Priscilla', 'Flores Esther', 'Lane Connie', 'Cooper Regina', 'Mccoy Kristin'];
    authFor = 'Check In/Out by Name';

    constructor(
        public activatedRoute: ActivatedRoute,
        public navController: NavController,
        public sharedDataService: SharedDataService,
    ) {
        this.activatedRoute.queryParams.subscribe((res) => {
            if (res) {
                if (res.authFor) {
                    this.authFor = res.authFor;
                }
            }
        });
    }

    @HostListener('document:click', ['$event'])
    andClickEvent = (event) => {
        const item: any = this.itemRef.nativeElement || this.itemRef.el;
        if (!item.contains(event.target)) {
            this.showList = false;
        }
    };

    ngOnInit() {

    }

    onClose() {
        this.navController.navigateRoot('dashboard-dm');
    }

    onBack() {
        this.navController.back();
    }

    onContinue() {
        if (this.name === 'Alreadycheckin Test') {
            this.navController.navigateForward('checkinout-alreadycheckin-dm');
        } else {
            this.navController.navigateForward('checkinout-identityconfirm-dm', {
                queryParams: {
                    name: this.name,
                    authFor: this.authFor
                }
            });
        }
    }

    searchBarFocus() {
        console.log('searchBarFocus');
        this.showList = true;
    }

    searchBarChange() {
        console.log('searchBarChange');
        this.showList = true;
    }

    onSelect(event, item) {
        event.stopPropagation();
        event.stopImmediatePropagation();
        console.log('Item ' + item);
        this.name = item;
        this.showList = false;
    }
}
