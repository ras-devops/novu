import { ReactNode } from 'react';
import { Title } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import { colors, Sidebar } from '@novu/design-system';

import { useBasePath } from '../hooks/useBasePath';

export const WorkflowSidebar = ({ children, title }: { children: ReactNode; title: string }) => {
  const navigate = useNavigate();
  const path = useBasePath();

  return (
    <Sidebar
      isOpened
      isParentScrollable
      customHeader={
        <Title
          sx={{
            lineHeight: '48px',
            flex: '1 1 auto',
            display: 'flex',
            flexFlow: 'Column',
          }}
          color={colors.white}
          size={20}
          weight="bold"
        >
          {title}
        </Title>
      }
      onClose={() => {
        navigate(path);
      }}
      data-test-id="workflow-sidebar"
    >
      {children}
    </Sidebar>
  );
};
