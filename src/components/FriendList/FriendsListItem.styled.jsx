import styled from '@emotion/styled';

const ListItem = styled.li`
  display: flex;
  align-items: center;
`;

const FriendStatus = styled.span`
  display: block;
  width: 15px;
  height: 15px;
  border-radius: 50%;

  background-color: ${props => (props.isFriendOnline ? 'green' : 'red')};
`;

const FriendAvatarImg = styled.img``;

const FriendName = styled.p``;

export { ListItem, FriendStatus, FriendAvatarImg, FriendName };
