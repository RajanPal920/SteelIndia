import { useEffect } from 'react';

export default function SEO({ title, description }) {
  useEffect(() => {
    if (title) {
      document.title = `${title} | SteelIndia`;
    } else {
      document.title = 'SteelIndia | Precision Industrial Steel, Pipes, Fittings & Alloys';
    }

    if (description) {
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', description);
      }
    }
  }, [title, description]);

  return null;
}
