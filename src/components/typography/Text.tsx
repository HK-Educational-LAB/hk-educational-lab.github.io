import { NextPage } from 'next';
import tw, { styled } from 'twin.macro';

const SText = styled.p`
  ${tw`tracking-wide drop-shadow`};
  line-height: 1.75;
`;

type Props = {
  children: React.ReactNode;
};

const Text: NextPage<Props> = ({ children, ...props }) => {
  return <SText {...props}>{children}</SText>;
};

export default Text;
