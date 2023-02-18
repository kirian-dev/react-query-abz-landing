import { PageNotFound } from '@/modules/notFound';
import { lazyImport } from '@/shared/utils/lazyImport';

const { Landing } = lazyImport(() => import('@/modules/landing'), 'Landing');

export const publicRoutes = [
  {
    path: '/',
    element: <Landing />,
  },

  {
    path: '*',
    element: <PageNotFound />,
  },
];
