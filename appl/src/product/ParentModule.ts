import { NgModule } from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';
import {ParentComponent} from './parent';


import { FormsModule } from '@angular/forms';
import { TwoWay } from "./Registration";
@NgModule({
    declarations: [
        ParentComponent,TwoWay
      ],
      imports: [
        BrowserModule,FormsModule
      ],
      bootstrap: [ParentComponent]
    })
export class ParentModule{

}