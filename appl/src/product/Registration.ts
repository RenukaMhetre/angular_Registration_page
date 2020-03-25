import { Component } from "@angular/core";

@Component({
    selector:'two',
    templateUrl:'a.html'

})
export class TwoWay{
  data="Welcome"
  mycolor={'color':'black'}
  displayname(username){
   this.data=this.data+ " "+(username).value;
   this.mycolor.color="purple";

  }
  
}