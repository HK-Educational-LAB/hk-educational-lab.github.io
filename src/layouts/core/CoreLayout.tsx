import { NextPage } from 'next';
import CoreGlobalStyle from './CoreGlobalStyle';
import CoreHead, { HeadProps } from './CoreHead';
import CorePageContainer from './CorePageContainer';

export type Props = {
  /**
   * Content to display within the layout.
   *
   * Essentially, the page's content.
   */
  children: React.ReactNode;

  /**
   * Props forwarded to the Head component
   *
   * Essentially, SEO metadata, etc.
   * Will use sane defaults if not specified.
   */
  headProps?: HeadProps;

  /**
   * Component to use as Head.
   *
   * @default BaseHead
   */
  Head?: React.FunctionComponent<HeadProps>;

  /**
   * Component to use as CorePageContainer.
   *
   * @default CorePageContainer
   */
  PageContainer?: React.FunctionComponent;

  /**
   * Component to use as Footer.
   *
   * @default BaseFooter
   */
  Footer?: React.FunctionComponent;
};

const CoreLayout: NextPage<Props> = (props) => {
  const {
    children,
    headProps = {},
    Head = CoreHead,
    PageContainer = CorePageContainer,
  } = props;

  return (
    <>
      <CoreGlobalStyle />
      <Head {...headProps} />
      <PageContainer>{children}</PageContainer>
    </>
  );
};

export default CoreLayout;
