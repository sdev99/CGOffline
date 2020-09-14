import {Component} from '@angular/core';

@Component({
    selector: 'app-tabs',
    templateUrl: 'tabs.page.html',
    styleUrls: ['tabs.page.scss']
})
export class TabsPage {

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


    constructor() {
    }

    tabsDidChange(event) {
        this.selectedTab = event.tab;
    }

}
