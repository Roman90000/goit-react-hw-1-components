import {
  Container,
  AvatarInfo,
  ImgEl,
  Username,
  UserTagLocal,
  UserFollowersBox,
  UserFollowersItem,
} from './Profile.styled';

export const Profile = ({
  user: {
    username,
    tag,
    location,
    avatar,
    stats: { followers, views, likes },
  },
}) => (
  <Container>
    <ImgEl src={avatar} alt="User avatar" />

    <AvatarInfo>
      <Username>{username}</Username>
      <UserTagLocal>@{tag}</UserTagLocal>
      <UserTagLocal>{location}</UserTagLocal>
    </AvatarInfo>

    <UserFollowersBox>
      <UserFollowersItem>
        <span>
          <b>Followers</b>
        </span>
        <br />
        <span>{followers}</span>
      </UserFollowersItem>
      <UserFollowersItem>
        <span>
          <b>Views</b>
        </span>
        <br />
        <span>{views}</span>
      </UserFollowersItem>
      <UserFollowersItem>
        <span>
          <b>Likes</b>
        </span>
        <br />
        <span>{likes}</span>
      </UserFollowersItem>
    </UserFollowersBox>
  </Container>
);
