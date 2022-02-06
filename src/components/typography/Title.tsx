import { NextPage } from 'next';
import tw, { styled } from 'twin.macro';

type Props = {
  children: React.ReactNode;
  size?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
};

const Title: NextPage<Props> = ({ children, size = 'h2', ...props }) => {
  const STitle = styled(size)`
    ${tw`tracking-wide drop-shadow`};
    line-height: 1.35;
  `;
  return <STitle {...props}>{children}</STitle>;
};

export default Title;
