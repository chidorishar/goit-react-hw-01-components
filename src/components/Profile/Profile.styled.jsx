import styled from '@emotion/styled';
import { css } from '@emotion/react';

const primaryText = p => css`
  font-size: ${p.theme.fontSizes[3]}px;
  font-weight: ${p.theme.fontWeights.bold};

  color: ${p.theme.colors.textDark};
`;
const secondaryText = p => css`
  font-size: ${p.theme.fontSizes[2]}px;
  font-weight: ${p.theme.fontWeights.medium};

  color: ${p.theme.colors.textGrey};
`;

const Description = styled.div``;

const AvatarImg = styled.img`
  display: block;
  margin: 0 auto;
  height: auto;
  width: 50%;
  border-radius: ${p => p.theme.radii.round};

  background-color: ${p => p.theme.colors.backgroundAvatar};
`;

const PersonInfo = styled.p`
  ${primaryText};
`;

const PersonInfoSecondary = styled.p`
  ${secondaryText};

  &:last-child {
    margin: 0 0 ${p => p.theme.space[4]}px;
  }
`;

const StatList = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
`;

const StatItem = styled.li`
  flex-shrink: 1;
  width: ${100 / 3}%;
  padding: ${p => p.theme.space[3]}px 0;

  list-style: none;
  background-color: ${p => p.theme.colors.backgroundStats};
  border-top: ${p => p.theme.borders.small};

  &:nth-of-type(2) {
    border-left: ${p => p.theme.borders.small};
    border-right: ${p => p.theme.borders.small};
  }
`;

const StatCaption = styled.span`
  ${secondaryText};

  display: block;
  margin: 0 0 ${p => p.theme.space[1]}px;
`;

const StatNumbers = styled.span`
  ${primaryText};

  display: block;
`;

export {
  Description,
  AvatarImg,
  PersonInfo,
  PersonInfoSecondary,
  StatList,
  StatItem,
  StatCaption,
  StatNumbers,
};
