import {
  ProfileCard,
  Description,
  AvatarImg,
  PersonInfo,
  PersonInfoSecondary,
  StatList,
  StatItem,
  StatCaption,
  StatNumbers,
} from './Profile.styled';

function Profile({ username, tag, location, avatar, stats }) {
  return (
    <ProfileCard>
      <Description>
        <AvatarImg src={avatar} alt="User avatar" />
        <PersonInfo>{username}</PersonInfo>
        <PersonInfoSecondary>{tag}</PersonInfoSecondary>
        <PersonInfoSecondary>{location}</PersonInfoSecondary>
      </Description>

      <StatList>
        <StatItem key="1">
          <StatCaption>Followers</StatCaption>
          <StatNumbers>
            {Number(stats.followers).toLocaleString('en-US')}
          </StatNumbers>
        </StatItem>
        <StatItem key="2">
          <StatCaption>Views</StatCaption>
          <StatNumbers>
            {Number(stats.views).toLocaleString('en-US')}
          </StatNumbers>
        </StatItem>
        <StatItem key="3">
          <StatCaption>Likes</StatCaption>
          <StatNumbers>
            {Number(stats.likes).toLocaleString('en-US')}
          </StatNumbers>
        </StatItem>
      </StatList>
    </ProfileCard>
  );
}
export { Profile };
