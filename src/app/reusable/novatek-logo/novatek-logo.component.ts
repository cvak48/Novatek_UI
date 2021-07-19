import { Component, OnInit, Input } from '@angular/core';

/**
 * The Logo component
 *
 * This component will be used to reuse the novatek logo
 */
@Component({
  selector: 'app-novatek-logo',
  templateUrl: './novatek-logo.component.html',
  styleUrls: ['./novatek-logo.component.scss']
})
export class NovatekLogoComponent implements OnInit {

  /**
  * logoSize variable receives the dimensions of the our Novatek Logo
  */

  @Input() logosize = {
    width:'', height:''
  }

  /**
  * Dependency injection will be added into the constructor
  */
  constructor() {
   }

  /**
  * Methods and variables declrations will be happend on component load
  */
  ngOnInit(): void {
  }

}
