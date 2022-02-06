import { NextPage } from 'next';
import NextHead from 'next/head';

export type HeadProps = {
  /**
   * Title (SEO)
   *
   * Displayed in the browser tab.
   */
  title?: string;

  /**
   * Description of the page. (SEO)
   *
   * Used as Facebook, Open Graph and twitter description.
   */
  description?: string;

  /**
   * Favicon
   *
   * Displayed in the browser tab. Websites usually use the same favicon for all their pages.
   */
  favicon?: string;
};

const CoreHead: NextPage<HeadProps> = (props) => {
  const { title, description, favicon } = props;

  return (
    <NextHead>
      <meta charSet="UTF-8" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href={favicon} />
    </NextHead>
  );
};

export default CoreHead;
