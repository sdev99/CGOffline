import {Component, NgZone, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Router, RouterOutlet, Routes} from '@angular/router';
import {IonTabs} from '@ionic/angular';

@Component({
    selector: 'app-tabs',
    templateUrl: 'tabs.page.html',
    styleUrls: ['tabs.page.scss']
})
export class TabsPage implements OnDestroy {
    @ViewChild('tabs') tabs: IonTabs;

    tabItems = [
        {
            icon: 'home.svg',
            selectedIcon: 'home-selected.svg',
            tab: 'dashboard'
        },
        {
            icon: 'paper.svg',
            selectedIcon: 'paper-selected.svg',
            tab: 'current-checkin'
        },
        {
            icon: 'checklist.svg',
            selectedIcon: 'checklist-selected.svg',
            tab: 'my-profile'
        }
    ];
    selectedTab = this.tabItems[0].tab;


    constructor(
        private router: Router,
        private ngZone: NgZone,
    ) {
    }

    ngOnDestroy(): void {
    }

    handleTabClick = (event: MouseEvent) => {
        const {tab} = event.composedPath().find((element: any) =>
            element.tagName === 'ION-TAB-BUTTON') as EventTarget & { tab: string };
        this.tabItems.map((item) => {
            if (item.tab === tab) {
                this.router.navigate(['tabs/' + tab]);
            }
        });
    };

    tabsDidChange(event) {
        this.ngZone.run(() => {
            this.selectedTab = event.tab;
        });
    }

}
