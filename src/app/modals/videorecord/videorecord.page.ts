import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  ChangeDetectorRef,
  OnDestroy,
} from "@angular/core";
import { ModalController } from "@ionic/angular";
import { UtilService } from "src/app/services/util.service";
import { VideoService } from "src/app/services/video.service";

@Component({
  selector: "app-videorecord",
  templateUrl: "./videorecord.page.html",
  styleUrls: ["./videorecord.page.scss"],
})
export class VideorecordPage implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild("video") captureElement: ElementRef;
  mediaRecorder: any;

  isRecording: Boolean = false;
  stream: any = null;
  videoDuration = "00:00";
  videos = [];
  timerInterval: any = null;

  constructor(
    private videoService: VideoService,
    private changeDetector: ChangeDetectorRef,
    private modalController: ModalController
  ) {}

  ngOnInit() {}

  ngOnDestroy(): void {
    this.stream.getTracks().forEach(function (track) {
      if (track.readyState == "live") {
        track.stop();
      }
    });
    this.stream = null;
    this.stopRecord();
  }

  ngAfterViewInit(): void {
    const startVideoStream = async () => {
      // Create a stream of video capturing
      this.stream = await navigator.mediaDevices.getUserMedia({
        video: {
          facingMode: "user",
        },
        audio: true,
      });

      // Show the stream inside our video object
      this.captureElement.nativeElement.srcObject = this.stream;
    };

    startVideoStream();
  }

  close() {
    this.stopRecord();
    this.modalController.dismiss({ status: false });
  }

  async recordVideo() {
    let count = 0;
    this.timerInterval = setInterval(() => {
      count++;
      this.videoDuration = UtilService.formatMSS(count);
    }, 1000);

    var options = { mimeType: "video/webm" };

    // this.mediaRecorder = new MediaRecorder(this.stream, options);
    let chunks = [];

    if (this.mediaRecorder) {
      // Store the video on stop
      this.mediaRecorder.onstop = async (event) => {
        const videoBuffer = new Blob(chunks, { type: "video/webm" });

        const base64Data = await this.videoService.getVideoBase64Data(
          videoBuffer
        );
        this.modalController.dismiss({ status: true, data: base64Data });
        // await this.videoService.storeVideo(videoBuffer);

        // Reload our list
        // this.videos = this.videoService.videos;
        this.changeDetector.detectChanges();
      };

      // Store chunks of recorded video
      this.mediaRecorder.ondataavailable = (event) => {
        if (event.data && event.data.size > 0) {
          chunks.push(event.data);
        }
      };

      // Start recording wth chunks of data
      this.mediaRecorder.start(100);
      this.isRecording = true;
    }
  }

  stopRecord() {
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
    }
    this.mediaRecorder?.stop();
    this.mediaRecorder = null;
    this.videoDuration = "00:00";
    this.captureElement.nativeElement.srcObject = null;
    this.isRecording = false;
  }
}
