import { Component, OnInit } from '@angular/core';
import { Team } from 'src/app/model/teams-model';

@Component({
  selector: 'app-nv-third-panel',
  templateUrl: './nv-third-panel.component.html',
  styleUrls: ['./nv-third-panel.component.scss']
})
export class NvThirdPanelComponent implements OnInit {

  name ='';
  placeholder = '';
  nameLabel = 'Name';
  id = '';
  idLabel = 'ID';
  columns = ['Name', 'ID'];
  sortColumn: string = '';
  sortPreference: string = '';
  teams: Team[] = [];
  teamsData: Team[] = [];
  selectedRow: number = -1;
  constructor() { }

  ngOnInit(): void {
    this.teams.push({name: "John", id:'123', status: "true", checked: true});
    this.teams.push({name: "Tom", id:'345', status: "true", checked: true});
    this.teamsData.push({name: "Ram", id:'123', status: "true", checked: true});
  }

  rowClicked(event: any): void{
    this.sortColumn = event.target.innerText.trim().toLowerCase();
    this.sortPreference = event.target.ariaSort;
  }

  showExtendedRow(index: number): void{
    this.selectedRow = (this.selectedRow == index) ? -1 : index;
  }

  isRowVisibleAllowed(index: number): boolean {
    return this.selectedRow == index;
  }

  rowImgClicked(event: any): void{
    event.stopPropagation();
  }

  checkAllCheckBox(ev: any) {
    this.teams.forEach(x => x.checked = ev.target.checked)
  }

  isAllCheckBoxChecked() {
    return this.teams.every(p => p.checked);
  }
}
