import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  template: `
  <pdf-viewer [src]="pdfSrc"
              [render-text]="true"
              [original-size]="false"
              style="width: 400px; height: 500px"
  ></pdf-viewer>
  `,
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  buttonClass: string = "btn-primary";
  showResume: boolean = false;
  resumeText: string = "View Resume";
  pdfSrc = "https://thesrishtisharma.github.io/Resume/Srishti.CV.pdf";

  fetchResume(){
    if(this.buttonClass == "btn-primary"){
      this.buttonClass = "btn-dark";
      this.resumeText = "Hide Resume";
      this.showResume = true;
    }
    else{
      this.buttonClass = "btn-primary";
      this.resumeText = "Check Resume";
      this.showResume = false;
    }
  }

}
