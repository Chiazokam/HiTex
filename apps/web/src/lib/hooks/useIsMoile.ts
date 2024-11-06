import { useMediaQuery } from 'react-responsive';
import { MOBILE_VIEWPORT } from '@/lib/theme/constants/mobileViewPort';

export const useIsMobile = () =>
  useMediaQuery({ query: `(max-width: ${MOBILE_VIEWPORT}px)` });
