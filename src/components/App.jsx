import userData from 'data/user.json';
import statisticsData from 'data/data.json';
import friendsData from 'data/friends.json';
import { Profile, Statistics, FriendList } from 'components/AllComponents';

export const App = () => {
  return (
    <>
      <Profile
        username={userData.username}
        tag={userData.tag}
        location={userData.location}
        avatar={userData.avatar}
        stats={userData.stats}
      />
      <Statistics title="Upload stats" stats={statisticsData} />
      <Statistics stats={statisticsData} />
      <FriendList friends={friendsData} />;
    </>
  );
};
