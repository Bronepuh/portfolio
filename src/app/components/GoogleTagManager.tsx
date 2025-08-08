'use client';

import { GoogleTagManager } from '@next/third-parties/google';
import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect, useMemo } from 'react';

const GTM_ID = 'GTM-NHK7Z6VZ';

export const GoogleAnalytics = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Преобразуем searchParams в строку безопасно
  const searchParamsString = useMemo(() => {
    const params = searchParams;
    return params ? `?${params.toString()}` : '';
  }, [searchParams]);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.dataLayer) {
      window.dataLayer.push({
        event: 'pageview',
        page: pathname + searchParamsString,
      });
    }
  }, [pathname, searchParamsString]);

  return <GoogleTagManager gtmId={GTM_ID} />;
};
