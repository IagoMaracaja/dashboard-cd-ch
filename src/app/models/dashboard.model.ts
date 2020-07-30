export interface DashboardData {
  data: DashboardModel;
  status: string;
}

export interface DashboardModel {
  active_source: DashboardItem;
  weekly_active: DashboardItem;
  nps: DashboardItem;
}

export interface DashboardItem {
  current_period: number;
  last_period: number;
}
