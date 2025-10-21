// Mapeamento de cores antigas para novas variáveis CSS de tema
export const themeColorMappings = {
  // Backgrounds
  'background: #1a1a1a': 'background: var(--bg-primary)',
  'background: #2a2a2a': 'background: var(--bg-secondary)',
  'background: rgba(26, 26, 26': 'background: var(--bg-secondary)',
  'background: rgba(0, 0, 0': 'background: var(--overlay-bg)',
  'background: rgba(255, 255, 255, 0.03)': 'background: var(--bg-tertiary)',
  'background: rgba(255, 255, 255, 0.02)': 'background: var(--bg-tertiary)',
  'background: rgba(255, 255, 255, 0.05)': 'background: var(--bg-tertiary)',
  'background: rgba(255, 255, 255, 0.06)': 'background: var(--bg-tertiary)',
  'background: rgba(255, 255, 255, 0.08)': 'background: var(--bg-tertiary)',
  'background: rgba(255, 255, 255, 0.1)': 'background: var(--bg-hover)',
  'background: rgba(255, 255, 255, 0.12)': 'background: var(--bg-hover)',
  'background: #0A0A0A': 'background: var(--bg-primary)',
  'background: rgba(255,255,255,0.03)': 'background: var(--bg-tertiary)',
  'background: rgba(255,255,255,0.02)': 'background: var(--bg-tertiary)',
  'background: rgba(255,255,255,0.04)': 'background: var(--bg-tertiary)',
  'background: rgba(255,255,255,0.05)': 'background: var(--bg-tertiary)',
  'background: rgba(255,255,255,0.06)': 'background: var(--bg-tertiary)',
  
  // Text colors
  'color: white': 'color: var(--text-primary)',
  'color: #E53935': 'color: var(--primary)',
  'color: #E30613': 'color: var(--primary)',
  'color: #FF5722': 'color: var(--primary-dark)',
  'color: rgba(255, 255, 255, 0.9)': 'color: var(--text-primary)',
  'color: rgba(255, 255, 255, 0.8)': 'color: var(--text-secondary)',
  'color: rgba(255, 255, 255, 0.7)': 'color: var(--text-secondary)',
  'color: rgba(255, 255, 255, 0.6)': 'color: var(--text-tertiary)',
  'color: rgba(255, 255, 255, 0.5)': 'color: var(--text-tertiary)',
  
  // Borders
  'border: 1px solid rgba(255, 255, 255, 0.1)': 'border: 1px solid var(--border-color)',
  'border: 1px solid rgba(255, 255, 255, 0.05)': 'border: 1px solid var(--border-light)',
  'border: 1px solid rgba(255, 255, 255, 0.06)': 'border: 1px solid var(--border-light)',
  'border-color: rgba(255, 255, 255, 0.2)': 'border-color: var(--border-color)',
  'border: 1px solid rgba(255,255,255,0.1)': 'border: 1px solid var(--border-color)',
  'border: 1px solid rgba(255,255,255,0.06)': 'border: 1px solid var(--border-light)',
  'border: 1px solid rgba(255,255,255,0.08)': 'border: 1px solid var(--border-color)',
}
