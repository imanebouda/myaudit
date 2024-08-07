import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { AuditsservicesService } from 'src/app/services/auditsservices.service';
import { AuditModel } from 'src/app/models/audit.model';

@Component({
  selector: 'app-listaudit',
  templateUrl: './listaudit.page.html',
  styleUrls: ['./listaudit.page.scss'],
})
export class ListauditPage implements OnInit {

  audits: AuditModel[] = [];

  constructor(private auditsService: AuditsservicesService, private router: Router) {}

  ngOnInit() {
    this.loadAudits();
  }

  loadAudits() {
    this.auditsService.getAuditList().subscribe(
      (data: AuditModel[]) => {
        this.audits = data;
      },
      error => {
        console.error('Failed to load audits', error);
      }
    );
  }

  navigateToChecklist() {
    this.router.navigate(['/listchecklist']);
  }


}
