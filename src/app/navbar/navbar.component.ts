import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  innerWidth: number = 0;
  menuBarChange: boolean = false;
  resumeText: string = "none";
  portfolioText: string = "none";
  aboutText: string = "none";
  projectsText: string = "none";
  openPhoneMenu: boolean = false;
  homeText: string = "none";
  contactText: string = "none";

  ngOnInit(){
    this.innerWidth = window.innerWidth;

    if(this.innerWidth < 768){
      this.menuBarChange = true;
    }
    else{
      this.menuBarChange = false;
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event:number) {
    this.innerWidth = window.innerWidth;

    if(this.innerWidth < 768){
      this.menuBarChange = true;
    }
    else{
      this.menuBarChange = false;
    }
  }

  clickHighlight(value: string){
    switch(value){
      case "resume":
        this.resumeText = "underline";
        this.aboutText = "none";
        this.portfolioText = "none";
        this.projectsText = "none";
        this.homeText = "none";
        this.contactText = "none";
        break;
      case "about":
        this.aboutText = "underline";
        this.portfolioText = "none";
        this.projectsText = "none";
        this.resumeText = "none";
        this.homeText = "none";
        this.contactText = "none";
        break;
      case "portfolio":
        this.portfolioText = "underline";
        this.projectsText = "none";
        this.resumeText = "none";
        this.aboutText = "none";
        this.homeText = "none";
        this.contactText = "none";
        break;
      case "projects":
        this.projectsText = "underline";
        this.resumeText = "none";
        this.aboutText = "none";
        this.portfolioText = "none";
        this.homeText = "none";
        this.contactText = "none";
        break;
      case "home":
        this.homeText = "underline";
        this.projectsText = "none";
        this.resumeText = "none";
        this.aboutText = "none";
        this.portfolioText = "none";
        this.contactText = "none";
        break;
        case "contact-me":
          this.homeText = "none";
          this.projectsText = "none";
          this.resumeText = "none";
          this.aboutText = "none";
          this.portfolioText = "none";
          this.contactText = "underline";
          break;
    }
  }

  phoneMenu(){
    if(!this.openPhoneMenu)
      this.openPhoneMenu = true;
    else
      this.openPhoneMenu = false;
  }
}
