import PropTypes from 'prop-types';
import { Box } from 'components/common/Box/Box.styled';
import {
  AvatarImg,
  PersonInfo,
  PersonInfoSecondary,
  StatItem,
  StatCaption,
  StatNumbers,
} from './Profile.styled';

export function Profile({ username, tag, location, avatar, stats }) {
  return (
    <Box
      width="cardNormal"
      mt={4}
      mr="auto"
      ml="auto"
      pt={4}
      textAlign="center"
      borderRadius="normal"
      overflow="hidden"
      boxShadow="medium"
    >
      <Box>
        <AvatarImg src={avatar} alt="User avatar" />
        <PersonInfo>{username}</PersonInfo>
        <PersonInfoSecondary>{tag}</PersonInfoSecondary>
        <PersonInfoSecondary>{location}</PersonInfoSecondary>
      </Box>

      <Box as="ul" display="flex" m={0} p={0}>
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
      </Box>
    </Box>
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
