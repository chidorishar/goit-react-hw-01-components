import {
  ListItem,
  FriendStatus,
  FriendAvatarImg,
  FriendName,
} from './FriendsListItem.styled';

function FriendListItem({ friend: { avatar, name, isOnline, id } }) {
  return (
    <ListItem>
      <FriendStatus isFriendOnline={isOnline}></FriendStatus>
      <FriendAvatarImg src={avatar} alt="User avatar" width="48" />
      <FriendName>{name}</FriendName>
    </ListItem>
  );
}

export { FriendListItem };
