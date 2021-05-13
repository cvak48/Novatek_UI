import { Component, Input, OnInit } from '@angular/core';
import { Person } from '../demo-page/demo-page.component';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss']
})
export class AvatarComponent implements OnInit {
  @Input() set avatarUrl(value: string) {
    this._avatarUrl = value ? value : '';
  }
  @Input() set name(value: string) {
    this._name = value ? value : '';
  }

  get avatarUrl(): string {
    return this._avatarUrl;
  }
  get name(): string {
    return this._name; 
  }
  private _avatarUrl!: string;
  private _name!: string;
  constructor() { }

  ngOnInit(): void {
  }

}
