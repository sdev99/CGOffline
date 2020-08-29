import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {SharedDataService} from '../../services/shared-data.service';

@Component({
    selector: 'app-annotation-preview',
    templateUrl: './annotation-preview.page.html',
    styleUrls: ['./annotation-preview.page.scss'],
})
export class AnnotationPreviewPage implements OnInit {
    previewImage;

    constructor(
        public route: ActivatedRoute,
        public sharedDataService: SharedDataService,
    ) {
    }

    ngOnInit() {
        this.route.params.subscribe((params: any) => {
            this.previewImage = this.sharedDataService.getPreviewImage();
        });
    }

}
