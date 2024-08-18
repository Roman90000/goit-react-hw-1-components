import { Profile } from './Profile/Profile';
import user from '../data/user.json';
import data from '../data/data.json';
import friens from '../data/friends.json';
import transactions from '../data/transactions.json';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import { GlobalStyle } from './GlobalStyle';

export const App = () => {
  return (
    <>
      <Profile user={user} />
      <Statistics title="Upload stats" statistics={data} />
      <FriendList friends={friens} />
      <TransactionHistory items={transactions} />
      <GlobalStyle />
    </>
  );
};
