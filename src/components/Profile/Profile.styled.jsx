import styled from '@emotion/styled';
import { defGap } from 'components/common/globalVars';
import {
  primaryText,
  secondaryText,
} from 'components/common/styles/AllCommonStyles';

const ProfileCard = styled.div`
  text-align: center;
  margin: 20px auto;
  padding: ${defGap}px 0 0;
  width: 300px;
  overflow: hidden;
  border-radius: 5px;

  box-shadow: 2px 10px 20px #b6b6b6;
`;

const Description = styled.div``;

const AvatarImg = styled.img`
  display: block;
  margin: 0 auto;
  height: auto;
  width: 50%;
  border-radius: 50%;

  background-color: #c89f36;
`;

const PersonInfo = styled.p`
  ${primaryText};
`;

const PersonInfoSecondary = styled.p`
  ${secondaryText};

  &:last-child {
    margin: 0 0 ${defGap}px;
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
  padding: ${defGap / 2}px 0;

  list-style: none;
  background-color: #f6faff;
  border-top: 1px solid #cdcdcd;

  &:nth-of-type(2) {
    border-left: 1px solid #cdcdcd;
    border-right: 1px solid #cdcdcd;
  }
`;

const StatCaption = styled.span`
  ${secondaryText};
  font-weight: 500;

  display: block;
  margin: 0 0 10px;
`;

const StatNumbers = styled.span`
  ${primaryText};
  display: block;
`;

export {
  ProfileCard,
  Description,
  AvatarImg,
  PersonInfo,
  PersonInfoSecondary,
  StatList,
  StatItem,
  StatCaption,
  StatNumbers,
};
