import { NextPage } from 'next';
import tw from 'twin.macro';
import Nav from '@/layouts/default/Nav';
import Footer from '@/layouts/default/Footer';

type Props = {
  children: React.ReactNode;
};

const CorePageContainer: NextPage<Props> = ({ children }) => {
  return (
    <>
      <Nav />
      <main> {children} </main>
      <Footer />
    </>
  );
};

export default CorePageContainer;
