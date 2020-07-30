import {Injectable} from '@angular/core';
import {FilterTypeEnum} from '../helpers/filter-type-enum';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  mockJson = '{ "data": { "active_source": { "current_period": 45, "last_period": 30 },' +
    ' "weekly_active": { "current_period": 45, "last_period": 30 },' +
    ' "nps": { "current_period": 45, "last_period": 30 } }, "status": "ok" }';

  mockJsonFilterMonth = '{ "data": { "active_source": { "current_period": 20, "last_period": 34 },' +
    ' "weekly_active": { "current_period": 25, "last_period": 20 },' +
    ' "nps": { "current_period": 7, "last_period": 6 } }, "status": "ok" }';

  mockJsonFilterYear = '{ "data": { "active_source": { "current_period": 10, "last_period": 14 },' +
    ' "weekly_active": { "current_period": 15, "last_period": 10 },' +
    ' "nps": { "current_period": 17, "last_period": 16 } }, "status": "ok" }';

  constructor() {
  }

  getDashboardItems(): any {
    return this.mockJson;
  }

  filterByPeriod(filterType: FilterTypeEnum, timeUnit) {
    if (filterType === FilterTypeEnum.MONTH) {
      return this.mockJsonFilterMonth;
    } else {
      return this.mockJsonFilterYear;
    }
  }

  getFilterOptions() {
    return [
      'This month',
      'Last month',
      'This quarter',
      'Last quarter',
      'This year',
      'Last year',
    ];
  }
}
