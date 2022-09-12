import { Profile } from 'components/AllComponents';
import userData from 'data/user.json';
import statisticsData from 'data/data.json';
import friendsData from 'data/friends.json';
import { Profile, Statistics, FriendList } from 'components/AllComponents';

export const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={statisticsData} />
      <Statistics stats={statisticsData} />
    </>
  );
};
