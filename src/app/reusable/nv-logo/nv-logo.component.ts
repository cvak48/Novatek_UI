import { Component, OnInit, Input } from '@angular/core';

/**
 * The Logo component
 *
 * This component will be used to reuse the novatek logo
 */
@Component({
  selector: 'app-nv-logo',
  templateUrl: './nv-logo.component.html',
  styleUrls: ['./nv-logo.component.scss']
})
export class NVLogoComponent implements OnInit {

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
