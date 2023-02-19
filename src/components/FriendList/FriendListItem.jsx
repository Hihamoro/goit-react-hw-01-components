import PropTypes from 'prop-types';
import { FriendCard, FriendName, Status } from './FriendList.styled';

export default function FriendListItem({ status, avatarUrl, friendName }) {
    return (
        <FriendCard>
            <Status isOnline={status}>{status}</Status>
            <img className="avatar" src={avatarUrl} alt={friendName} width="100" />
            <FriendName>{friendName}</FriendName>
        </FriendCard>
    );
}

FriendListItem.propTypes = {
    avatarUrl: PropTypes.string.isRequired,
    friendName: PropTypes.string.isRequired,
    status: PropTypes.bool.isRequired,
};