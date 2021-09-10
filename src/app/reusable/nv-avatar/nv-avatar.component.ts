import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-nv-avatar',
  templateUrl: './nv-avatar.component.html',
  styleUrls: ['./nv-avatar.component.scss']
})
export class NvAvatarComponent implements OnInit {
  // TODO: the person object should be received
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
