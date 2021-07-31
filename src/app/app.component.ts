import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  up(){
    window.scroll(0,0);
  }
  show(){
    document.getElementById('myNav').style.width='170px';
  }
  hide(){ 
    document.getElementById('myNav').style.width='0';
  }
  showD1(){
    document.getElementById('dropdown1').style.width='200px';
    document.getElementById('toggle1').style.transform='rotate(720deg)';
    document.getElementById('toggle1').style.transition='0.3s linear';
    document.getElementById('toggle1').innerHTML='&or;';

  }
  hideD1(){
    document.getElementById('dropdown1').style.width='0';
    document.getElementById('toggle1').style.transform='rotate(270deg)';
    document.getElementById('toggle1').style.transition='0.3s linear';
  }
  showD2(){
    document.getElementById('dropdown2').style.width='200px';
    document.getElementById('toggle2').style.transform='rotate(720deg)';
    document.getElementById('toggle2').style.transition='0.3s linear';
    document.getElementById('toggle2').innerHTML='&or;';
  }

  hideD2(){
    document.getElementById('dropdown2').style.width='0';
    document.getElementById('toggle2').style.transform='rotate(270deg)';
    document.getElementById('toggle2').style.transition='0.3s linear';
  }
  showD3()
  {
    document.getElementById('dropdown3').style.width='200px';
    document.getElementById('toggle3').style.transform='rotate(270deg)';
    document.getElementById('toggle3').style.transition='0.3s linear';
    document.getElementById('toggle3').innerHTML='&or;';
  }
  hideD3()
  {
    document.getElementById('dropdown2').style.width='0';
    document.getElementById('toggle3').style.transform='rotate(270deg)';
    document.getElementById('toggle3').style.transition='0.3s linear';
  }
  showD4()
  {
    document.getElementById('dropdown4').style.width='200px';
    
  }
  hideD4()
  {
    document.getElementById('dropdown4').style.width='0';
    
  }
}  