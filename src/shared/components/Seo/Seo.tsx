import { Helmet } from 'react-helmet-async';
import Turbo from '../../../../turbo.json';

interface ISeoProps {
  title: string;
  description: string;
  type: string;
}

export default function Seo({ title, description, type }: ISeoProps) {
  return (
    <Helmet>
      <title>
        {title} | {Turbo.displayName}
      </title>
      <meta name='description' content={description} />

      <meta property='og:type' content={type} />
      <meta property='og:title' content={title} />
      <meta property='og:description' content={description} />
    </Helmet>
  );
}
