import {Component, Input, OnInit} from '@angular/core';
import {DashboardType} from '../../helpers/dashboard-type';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'dashboard-card',
  templateUrl: './dashboard-card.component.html',
  styleUrls: ['./dashboard-card.component.scss']
})
export class DashboardCardComponent implements OnInit {

  /* The corresponding item to the dashboard card*/
  @Input() dashboardItem;

  /* The card type */
  @Input() dashboardType: DashboardType;

  /* This variable is used to handle the card style according to the type */
  style: CardStyle;

  constructor() {
  }

  ngOnInit() {
    this.getStyles();
  }

  /**
   * Configure the style according to the card type
   */
  getStyles() {
    switch (this.dashboardType) {
      case DashboardType.ACTIVE_SOURCING:
        this.style = {
          title : 'Active Sourcing',
          cssClass : 'card-item active-sourcing'
        };
        break;
      case DashboardType.WEEKLY_ACTIVE:
        this.style = {
          title : 'Weekly Active',
          cssClass : 'card-item weekly-active'
        };
        break;
      case DashboardType.NPS:
        this.style = {
          title : 'NPS',
          cssClass : 'card-item nps'
        };
        break;
      default:
        this.style = {
          title : 'Active Sourcing',
          cssClass : 'card-item active-sourcing'
        };
    }
  }
}

/**
 * Interface to handle the card style
 */
interface CardStyle {
  title: string;
  cssClass: string;
}
