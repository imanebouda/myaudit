import { Component, OnInit } from '@angular/core';
// src/app/pages/checklist-list/checklist-list.page.ts

import { ChecklistservicesService } from '../../services/checklistservices.service';
import { ChecklistModel } from 'src/app/models/check_list.model';


@Component({
  selector: 'app-listchecklist',
  templateUrl: './listchecklist.page.html',
  styleUrls: ['./listchecklist.page.scss'],
})
export class ListchecklistPage implements OnInit {
  checklists: ChecklistModel[] = [];

  constructor(private checklistService: ChecklistservicesService) { }

  ngOnInit() {
    this.checklistService.getChecklistList().subscribe(
      data => {
        this.checklists = data;
      },
      error => {
        console.error('Error fetching checklists', error);
      }
    );
  }

}
