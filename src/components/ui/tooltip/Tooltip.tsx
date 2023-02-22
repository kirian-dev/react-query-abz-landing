import { FC, ReactNode } from 'react';
interface TooltipProps {
  content: ReactNode;
}
export const Tooltip: FC<TooltipProps> = ({ content }) => {
  const styles = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '3px 16px',
    position: 'absolute' as const,
    maxWidth: '276px',
    background: 'rgba(0, 0, 0, 0.87)',
    borderRadius: '4px',
    color: '#fff',
    zIndex: '9999',
    bottom: '10px',
  };

  return <div style={styles}>{content}</div>;
};
