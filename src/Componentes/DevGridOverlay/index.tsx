import { useEffect, useState } from 'react'
import styled from 'styled-components'

/**
 * Dev-only 12-column overlay to alinhar com o protótipo.
 * Ative com a tecla "g" ou passando ?grid=1 na URL.
 */
const DevGridOverlay = () => {
  const [visible, setVisible] = useState<boolean>(() =>
    new URLSearchParams(window.location.search).get('grid') === '1'
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key && e.key.toLowerCase() === 'g') setVisible((v) => !v);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  if (!visible) return null;
  return (
    <Overlay role="presentation" aria-hidden>
      <div className="container">
        <Columns>
          {Array.from({ length: 12 }).map((_, i) => (
            <Col key={i} />
          ))}
        </Columns>
      </div>
    </Overlay>
  );
};

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 2000;
  pointer-events: none;
  background: repeating-linear-gradient(
    0deg,
    rgba(255, 0, 0, 0.03),
    rgba(255, 0, 0, 0.03) 8px,
    rgba(255, 0, 0, 0.06) 8px,
    rgba(255, 0, 0, 0.06) 16px
  );
`;

const Columns = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  column-gap: var(--gutter);
`;

const Col = styled.div`
  background: rgba(255, 0, 0, 0.08);
  height: 100%;
`;

export default DevGridOverlay;
