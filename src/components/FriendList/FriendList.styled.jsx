import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const FriendCard = styled.li`
  display: flex;
  gap: 30px;
  margin: 5px;
  padding: 10px 20px;
  border: 2px solid #757575;
  box-shadow: 0px 3px 1px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.08),
    0px 2px 2px rgba(0, 0, 0, 0.12);
  width: 350px;
`;
export const FriendName = styled.p`
  font-weight: 500;
  font-size: 25px;
  margin-bottom: auto;
  margin-top: auto;
`;
export const Status = styled.span`
  margin-top: auto;
  margin-bottom: auto;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: ${({ isOnline }) => (isOnline ? '#09ce00' : '#f32718')};
`;