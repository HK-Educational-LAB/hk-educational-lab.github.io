import { NextPage } from 'next';
import tw from 'twin.macro';
import Nav from '@/layouts/default/Nav';
import Footer from '@/layouts/default/Footer';

type Props = {
  children: React.ReactNode;
};

const StyledCorePageContainer = tw.div`
`;

const CorePageContainer: NextPage<Props> = ({ children }) => {
  return (
    <StyledCorePageContainer>
      <Nav />
      {children}
      <Footer />
    </StyledCorePageContainer>
  );
};

export default CorePageContainer;
