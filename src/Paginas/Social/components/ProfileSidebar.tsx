import styled from 'styled-components'
import DefaultAvatar from '../../../Recursos/avatarpadrao'
import { useUser } from '../../../Contexts/UserContext'

const ProfileSidebar = () => {
  const { user } = useUser()

  return (
    <Container>
      <ProfileCard>
        <Banner>
          <Rings />
          <Avatar>
            {user?.foto ? <img src={user.foto} alt={user?.nome} /> : <DefaultAvatar size={64} />}
          </Avatar>
        </Banner>
        <ProfileInfo>
          <Name>{user?.nome || 'GymBuddy User'}</Name>
          <Nickname>{user?.nickname || '@gymbuddy'}</Nickname>

          <Stats>
            <Stat>
              <strong>1984</strong>
              <span>Seguidores</span>
            </Stat>
            <Divider />
            <Stat>
              <strong>1002</strong>
              <span>Seguindo</span>
            </Stat>
          </Stats>

          <Description>
            {user?.descricao || 'Bem-vindo ao GymBuddy. Foque no seu progresso e compartilhe seus treinos!'}
          </Description>

          <ActionButton>Meu Perfil</ActionButton>
        </ProfileInfo>
      </ProfileCard>

      <Section>
        <h4>Habilidades</h4>
        <Tags>
          <Tag>Musculação</Tag>
          <Tag>Cardio</Tag>
          <Tag>HIIT</Tag>
          <Tag>Nutrição</Tag>
          <Tag>Alongamento</Tag>
        </Tags>
      </Section>

      <Section>
        <h4>Comunidades</h4>
        <Communities>
          <CommunityItem>
            <Dot className="orange" />
            <span>Atletas amadores</span>
            <Meta>32 amigos estão aqui</Meta>
          </CommunityItem>
          <CommunityItem>
            <Dot className="blue" />
            <span>Desenvolvedores fitness</span>
            <Meta>12 amigos estão aqui</Meta>
          </CommunityItem>
        </Communities>
      </Section>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  position: sticky;
  top: 10rem;
  height: fit-content;
`

const CardBase = styled.div`
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 1.5rem;
  overflow: hidden;
`

const ProfileCard = styled(CardBase)`
  display: flex;
  flex-direction: column;
`

const Banner = styled.div`
  position: relative;
  height: 9rem;
  background: radial-gradient(60% 80% at 20% 50%, rgba(227,6,19,0.6) 0%, rgba(227,6,19,0.15) 60%, rgba(0,0,0,0) 100%);
`

const Rings = styled.div`
  position: absolute;
  inset: 0;
  background: repeating-radial-gradient(circle at 20% 50%, rgba(255,255,255,0.15), rgba(255,255,255,0.15) 2px, transparent 2px, transparent 10px);
  opacity: 0.15;
`

const Avatar = styled.div`
  position: absolute;
  left: 1.6rem;
  bottom: -2.6rem;
  width: 5.6rem;
  height: 5.6rem;
  border-radius: 50%;
  overflow: hidden;
  border: 3px solid #0A0A0A;
  background: #0A0A0A;

  img { width: 100%; height: 100%; object-fit: cover; }
`

const ProfileInfo = styled.div`
  padding: 3.6rem 1.6rem 1.6rem 1.6rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

const Name = styled.h3`
  margin: 0;
  font-size: 1.6rem;
`

const Nickname = styled.span`
  color: var(--primary);
  font-size: 1.3rem;
`

const Stats = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  margin-top: .5rem;

  strong { font-size: 1.6rem; }
  span { font-size: 1.2rem; color: rgba(255,255,255,0.6); }
`

const Divider = styled.div`
  width: 1px;
  height: 2.4rem;
  background: rgba(255,255,255,0.1);
`

const Stat = styled.div`
  display: flex;
  flex-direction: column;
`

const Description = styled.p`
  margin: .5rem 0 0 0;
  color: rgba(255,255,255,0.85);
  font-size: 1.3rem;
  line-height: 1.5;
`

const ActionButton = styled.button`
  margin-top: .5rem;
  width: 100%;
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.1);
  color: white;
  border-radius: 1rem;
  padding: .8rem 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: .2s ease;

  &:hover { border-color: var(--primary); background: rgba(227,6,19,0.12); }
`

const Section = styled(CardBase)`
  padding: 1.6rem;

  h4 { margin: 0 0 1rem 0; font-size: 1.4rem; color: rgba(255,255,255,0.9); }
`

const Tags = styled.div`
  display: flex; flex-wrap: wrap; gap: .6rem;
`

const Tag = styled.span`
  background: rgba(255,255,255,0.05);
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 999px;
  padding: .4rem .9rem;
  font-size: 1.2rem;
  color: rgba(255,255,255,0.85);
`

const Communities = styled.div`
  display: flex; flex-direction: column; gap: .8rem;
`
const CommunityItem = styled.div`
  display: grid; grid-template-columns: 1.6rem 1fr; align-items: center; gap: .8rem;
  padding: .8rem; border-radius: .8rem;
  background: rgba(255,255,255,0.02);
  border: 1px solid rgba(255,255,255,0.06);
`

const Dot = styled.span`
  width: .8rem; height: .8rem; border-radius: 50%; display: inline-block; background: var(--primary);
  &.orange { background: #FF8A00; }
  &.blue { background: #31A8FF; }
`

const Meta = styled.small`
  grid-column: 2; color: rgba(255,255,255,0.6);
`

export default ProfileSidebar
