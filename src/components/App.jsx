import userData from 'data/user.json';
import statisticsData from 'data/data.json';
import friendsData from 'data/friends.json';
import transactionData from 'data/transactions.json';
import { ThemeProvider } from '@emotion/react';
import { theme } from 'components/common/Theme/Theme.styled';
import {
  Profile,
  Statistics,
  FriendList,
  TransactionHistory,
} from 'components/AllComponents';

export const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Profile
          username={userData.username}
          tag={userData.tag}
          location={userData.location}
          avatar={userData.avatar}
          stats={userData.stats}
        />
        <Statistics title="Upload stats" stats={statisticsData} />
        <Statistics stats={statisticsData} />
        <FriendList friends={friendsData} />
        <TransactionHistory items={transactionData} />
      </ThemeProvider>
    </>
  );
};
