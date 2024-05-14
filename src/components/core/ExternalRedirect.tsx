import { useEffect } from 'react';

const ExternalRedirect = ({ url }: { url: string }) => {
  useEffect(() => {
    window.location.href = url;
  }, [url]);

  return null;  // Render nothing while redirecting
};

export default ExternalRedirect;
