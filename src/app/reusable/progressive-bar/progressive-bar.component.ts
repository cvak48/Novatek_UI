import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-progressive-bar',
  templateUrl: './progressive-bar.component.html',
  styleUrls: ['./progressive-bar.component.scss']
})
export class ProgressiveBarComponent implements OnInit {

  @Input() color: string = '';
  @Input() size: string = '';
  @Input() secondarySize: string = '';
  @Input() progressiveTxt: string = '';
  @Input() statusText: string = '';
  public totalSize: number = 0;

  public progressiveStatus: any = [
    { sucess: '#198515' },
    { warning: '#FCB520' },
    { error: '#DB2828' },
    { tentitive: '#FBD890' },
    { fileUpload: '#888888' }
  ]

  constructor() {
  }

  /**
  * totalSize will be based on the two uploads, 
  * Color is based on the response of the upload activity
  */
  ngOnInit(): void {
    if (this.secondarySize.length > 0) {
      this.totalSize = parseInt(this.secondarySize) + parseInt(this.size)
    }
    if (!this.size.includes('%')) {
      this.size = this.size + '%';
    }
    this.secondarySize = this.secondarySize + '%';

    switch (this.color) {
      case 'sucess':
        this.color = this.progressiveStatus[0].sucess
        break;
      case 'warning':
        this.color = this.progressiveStatus[1].warning
        break;
      case 'error':
        this.color = this.progressiveStatus[2].error
        break;
      case 'tentitive':
        this.color = this.progressiveStatus[3].tentitive
        break;
      case 'fileUpload':
        this.color = this.progressiveStatus[4].fileUpload
        break;
      default:
        this.color = '';
        break;
    }
  }

}
