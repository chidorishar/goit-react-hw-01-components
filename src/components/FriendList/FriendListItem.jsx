import { Box } from 'components/common/Box/Box.styled';
import {
  FriendStatus,
  FriendAvatarImg,
  FriendName,
} from './FriendsListItem.styled';

export function FriendListItem({ friend: { avatar, name, isOnline, id } }) {
  return (
    <Box
      display="flex"
      alignItems="center"
      mb={3}
      p={1}
      pl={3}
      borderRadius="normal"
      overflow="hidden"
      boxShadow="small"
      as="li"
    >
      <FriendStatus isFriendOnline={isOnline}></FriendStatus>
      <FriendAvatarImg src={avatar} alt="User avatar" width="48" />
      <FriendName>{name}</FriendName>
    </Box>
  );
}
