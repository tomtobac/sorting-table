import { MockDataService } from './services/mock-data.service';
import { Company } from './interfaces/company';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  companies: Company[];
  path: string[] = ['company'];
  order: number = 1; // 1 asc, -1 desc;

  constructor(private dataService: MockDataService) {}

  ngOnInit(): void {
    this.companies = this.dataService.getCompanies();
  }

  sortTable(prop: string) {
    this.path = prop.split('.')
    this.order = this.order * (-1); // change order
    return false; // do not reload
  }

}
