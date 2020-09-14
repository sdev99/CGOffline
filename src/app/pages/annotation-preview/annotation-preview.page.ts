import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {SharedDataService} from '../../services/shared-data.service';
import {Filesystem, FilesystemDirectory} from '@capacitor/core';

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

    async savePicture() {
        // Convert photo to base64 format, required by Filesystem API to save
        // Write the file to the data directory
        const fileName = new Date().getTime() + '.jpeg';
        const savedFile = await Filesystem.writeFile({
            path: fileName,
            data: this.previewImage,
            directory: FilesystemDirectory.Data
        });

        // Use webPath to display the new image instead of base64 since it's
        // already loaded into memory
        return {
            filepath: fileName,
        };
    }

}
