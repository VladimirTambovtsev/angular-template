import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-current-training',
  templateUrl: './current-training.component.html',
  styleUrls: ['./current-training.component.css']
})
export class CurrentTrainingComponent implements OnInit {
  progress = 0;
  phrase = 'You can do it, keep going!';
  timer: number;

  constructor() {}

  ngOnInit() {
    this.timer = setInterval(() => {
      this.progress = this.progress + 20;
      if (this.progress >= 100) {
        clearInterval(this.timer);
      } else if (this.progress >= 70) {
        // tslint:disable-next-line: quotemark
        this.phrase = "Don't give up, almost done!";
      }
    }, 1000);
  }

  onStop() {
    clearInterval(this.timer);
  }
}
