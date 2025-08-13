import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

interface SEOProps {
  title: string;
  description?: string;
}

export const SEO = ({ title, description }: SEOProps) => {
  const { pathname } = useLocation();
  const canonical = typeof window !== "undefined" ? `${window.location.origin}${pathname}` : pathname;

  const fullTitle = title.length <= 55 ? title : `${title} | Gliese`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      {description && <meta name="description" content={description} />}
      <link rel="canonical" href={canonical} />
      <meta property="og:title" content={fullTitle} />
      {description && <meta property="og:description" content={description} />}
    </Helmet>
  );
};

export default SEO;
