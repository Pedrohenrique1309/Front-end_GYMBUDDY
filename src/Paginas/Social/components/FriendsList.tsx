import styled from 'styled-components'
import DefaultAvatar from '../../../Recursos/avatarpadrao'
import { User } from '../index'

interface FriendsListProps {
  suggestedUsers: User[]
  onUserHover: (user: User) => void
  onUserLeave: () => void
}

const FriendsList = ({ suggestedUsers, onUserHover, onUserLeave }: FriendsListProps) => {
  return (
    <Container>
      <h3>Amigos</h3>
      
      <UsersList>
        {suggestedUsers.map(friend => (
          <FriendItem 
            key={friend.id}
            onMouseEnter={() => onUserHover(friend)}
            onMouseLeave={onUserLeave}
          >
            <Avatar>
              {friend.foto ? (
                <img src={friend.foto} alt={friend.nome} />
              ) : (
                <DefaultAvatar size={50} />
              )}
            </Avatar>
            <UserInfo>
              <h4>{friend.nickname}</h4>
              <p>{friend.descricao || 'Sem descrição'}</p>
            </UserInfo>
          </FriendItem>
        ))}
        
        {/* Adicionar mais usuários mockados para completar a lista */}
        {suggestedUsers.length < 6 && [...Array(6 - suggestedUsers.length)].map((_, index) => (
          <FriendItem key={`mock-${index}`}>
            <Avatar>
              <DefaultAvatar size={50} />
            </Avatar>
            <UserInfo>
              <h4>@usuario{index + 3}</h4>
              <p>Novo no GymBuddy</p>
            </UserInfo>
          </FriendItem>
        ))}
      </UsersList>
      
      <ViewMoreButton>Ver mais amigos</ViewMoreButton>
    </Container>
  )
}

const Container = styled.div`
  position: sticky;
  top: 10rem;
  height: fit-content;
  
  h3 {
    font-size: 2rem;
    margin-bottom: 2rem;
    color: rgba(255, 255, 255, 0.9);
  }
`

const UsersList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 2rem;
`

const FriendItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 1.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.05);
    border-color: rgba(227, 6, 19, 0.2);
    transform: translateX(-5px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  }
`

const Avatar = styled.div`
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  overflow: hidden;
  flex-shrink: 0;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

const UserInfo = styled.div`
  flex: 1;
  min-width: 0;
  
  h4 {
    font-size: 1.4rem;
    margin: 0 0 0.5rem 0;
    color: rgba(255, 255, 255, 0.95);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  
  p {
    font-size: 1.2rem;
    margin: 0;
    color: rgba(255, 255, 255, 0.6);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`

const ViewMoreButton = styled.button`
  width: 100%;
  background: transparent;
  border: 1px solid rgba(227, 6, 19, 0.3);
  color: var(--primary);
  border-radius: 2rem;
  padding: 1rem;
  font-size: 1.4rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(227, 6, 19, 0.1);
    border-color: var(--primary);
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(227, 6, 19, 0.2);
  }
`

export default FriendsList
