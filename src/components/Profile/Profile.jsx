import PropTypes from 'prop-types';
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

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};

export { Profile };
