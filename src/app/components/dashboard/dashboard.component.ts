import {Component, OnInit} from '@angular/core';
import {DashboardService} from '../../services/dashboard.service';
import {DashboardData} from '../../models/dashboard.model';
import {DashboardType} from '../../helpers/dashboard-type';
import {FilterTypeEnum} from '../../helpers/filter-type-enum';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  /* items of filter */
  filters;
  /* dashboard data */
  dashboardData: DashboardData;

  constructor(private service: DashboardService) {
  }

  get dashboardType() {
    return DashboardType;
  }

  ngOnInit() {
    this.getFilterOption();
    this.getDashboardData();
  }

  /**
   * this method is execute when the user changes the options on the select field
   * @param value the index of the option selected
   */
  filterChanged(value) {
    this.dashboardData = JSON.parse(this.service.filterByPeriod(this.getFilterValue(value), 1));
  }

  /**
   * this method returns the option based on index
   * @param value the index of the option selected
   */
  getFilterValue(value): FilterTypeEnum {
    if (value === '0' || value === '1') {
      return FilterTypeEnum.MONTH;
    } else if (value === '2' || value === '3') {
      return FilterTypeEnum.QUARTER;
    } else {
      return FilterTypeEnum.YEAR;
    }
  }

  /**
   * Get the list to fill the filter options of select field
   * @private
   */
  private getFilterOption() {
    this.filters = this.service.getFilterOptions();
  }

  /**
   * Get the dashboard data
   * @private
   */
  private getDashboardData() {
    this.dashboardData = JSON.parse(this.service.getDashboardItems());
  }

}
