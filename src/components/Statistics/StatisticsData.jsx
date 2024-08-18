import { ListItem } from './Statistics.styled';

export const StatisticsData = ({ statistics: { label, percentage } }) => (
  <ListItem>
    <span>{label}</span>
    <span>{percentage}%</span>
  </ListItem>
);
