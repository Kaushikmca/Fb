import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  blue(){
    document.getElementById('icon').style.color='#4099FF';
  }
  grey(){
    document.getElementById('icon').style.color='grey';
  }
}
