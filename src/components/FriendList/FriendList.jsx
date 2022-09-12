import PropTypes from 'prop-types';
import { FriendListStyles } from './FriendList.styled';
import { FriendListItem } from './FriendListItem';

function FriendList({ friends }) {
  return (
    <FriendListStyles>
      {friends.map(friend => (
        <FriendListItem friend={friend} key={friend.id}></FriendListItem>
      ))}
    </FriendListStyles>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export { FriendList };
