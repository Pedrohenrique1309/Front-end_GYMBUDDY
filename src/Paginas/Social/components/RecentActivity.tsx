import styled from 'styled-components'
import { FiThumbsUp, FiMessageCircle, FiUserPlus } from 'react-icons/fi'

interface ActivityItem {
  id: number
  usuario: string
  tempo: string
  valor?: string
  acao: 'tip' | 'purchase' | 'comment' | 'like' | 'follow'
}

const RecentActivity = () => {
  // Conteúdo mock para UI (não altera backend)
  const activities: ActivityItem[] = [
    { id: 1, usuario: 'Vitally Akterskiy', tempo: '3 min', valor: '10,00', acao: 'tip' },
    { id: 2, usuario: 'Maksym Karafizi', tempo: '6 hrs', valor: '90,00', acao: 'purchase' },
    { id: 3, usuario: 'Evgeniy Alexandrov', tempo: '7 hrs', valor: '30,00', acao: 'tip' },
    { id: 4, usuario: 'Rosaline Kumbirai', tempo: '1 hr', acao: 'comment' },
    { id: 5, usuario: 'UX designers group', tempo: '12 hrs', acao: 'follow' },
  ]

  return (
    <Container>
      <h3>Atividades recentes</h3>
      <List>
        {activities.map(item => (
          <Activity key={item.id}>
            <IconWrap className={item.acao}>
              {item.acao === 'like' && <FiThumbsUp />}
              {item.acao === 'comment' && <FiMessageCircle />}
              {item.acao === 'follow' && <FiUserPlus />}
              {(item.acao === 'tip' || item.acao === 'purchase') && <span>$</span>}
            </IconWrap>
            <Info>
              <strong>{item.usuario}</strong>
              <small>{item.tempo} atrás</small>
            </Info>
            {item.valor && (
              <Amount>
                R$ {item.valor}
                <ThanksButton>Obrigado</ThanksButton>
              </Amount>
            )}
          </Activity>
        ))}
      </List>
    </Container>
  )
}

const Container = styled.div`
  position: sticky;
  top: 10rem;
  height: fit-content;
  background: rgba(255,255,255,0.03);
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 1.5rem;
  padding: 1.6rem;

  h3 { font-size: 1.8rem; margin: 0 0 1.2rem 0; color: rgba(255,255,255,0.9); }
`

const List = styled.div`
  display: flex; flex-direction: column; gap: 1rem;
`

const Activity = styled.div`
  display: grid; grid-template-columns: 3.6rem 1fr auto; gap: 1rem; align-items: center;
  background: rgba(255,255,255,0.02);
  border: 1px solid rgba(255,255,255,0.06);
  border-radius: 1rem;
  padding: .9rem;
`

const IconWrap = styled.div`
  width: 3.6rem; height: 3.6rem; border-radius: .9rem; display: grid; place-items: center;
  color: white; font-weight: 800; font-size: 1.4rem;
  background: rgba(255,255,255,0.06);
  border: 1px solid rgba(255,255,255,0.08);

  &.tip { background: rgba(255, 214, 0, .15); border-color: rgba(255, 214, 0, .25); }
  &.purchase { background: rgba(49, 168, 255, .12); border-color: rgba(49, 168, 255, .25); }
  &.comment { background: rgba(255,255,255,.06); }
  &.like { background: rgba(227, 6, 19, .12); border-color: rgba(227, 6, 19, .25); }
  &.follow { background: rgba(120, 255, 68, .12); border-color: rgba(120,255,68,.25); }

  svg { font-size: 1.6rem; }
`

const Info = styled.div`
  display: flex; flex-direction: column; gap: .2rem;
  strong { font-size: 1.3rem; }
  small { color: rgba(255,255,255,0.55); }
`

const Amount = styled.div`
  display: flex; align-items: center; gap: .8rem; color: rgba(255,255,255,0.9); font-weight: 700;
`

const ThanksButton = styled.button`
  background: #FFD400; color: #151515; border: none; border-radius: 999px; padding: .4rem .8rem; font-weight: 700; cursor: pointer;
  transition: .2s ease; font-size: 1.2rem;
  &:hover { filter: brightness(.95); transform: translateY(-1px); }
`

export default RecentActivity
