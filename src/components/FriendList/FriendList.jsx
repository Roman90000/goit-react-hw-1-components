import { List, Status, ListItem, ItemEl } from './FriendList.styled';

export const FriendList = ({ friends }) => (
  <List>
    {friends.map(({ id, name, isOnline, avatar }) => (
      <ListItem key={id}>
        <Status status={isOnline.toString()}>{isOnline}</Status>
        <img src={avatar} alt="User avatar" width="48" />
        <ItemEl>{name}</ItemEl>
      </ListItem>
    ))}
  </List>
);
