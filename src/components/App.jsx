import user from 'data/user.json';
import { Profile } from 'components/AllComponents';
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
