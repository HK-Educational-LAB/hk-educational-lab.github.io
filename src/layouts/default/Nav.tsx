import { NextPage } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import tw, { styled } from 'twin.macro';

type Props = {};

const NavigationContainer = tw.div`
  absolute top-0 left-0 w-full z-20
`;

const SLink = tw.a`
  lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-50 items-center justify-center uppercase text-sm hover:text-primary hover:bg-white cursor-pointer
`;

const Nav: NextPage<Props> = () => {
  return (
    <NavigationContainer>
      <div tw="container mx-auto">
        <nav tw="flex items-center flex-wrap p-3 ">
          <Link href="/">
            <a tw="inline-flex items-center p-2 mr-4">
              <Image
                src="/static/images/hk-logo.png"
                alt="HK educational LAB"
                width={75}
                height={70}
              />
            </a>
          </Link>

          <div tw="w-full lg:inline-flex lg:flex-grow lg:w-auto">
            <div tw="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto">
              <Link href="#about-us" passHref>
                <SLink>About us</SLink>
              </Link>

              <Link href="#contact-us" passHref>
                <SLink>Contact us</SLink>
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </NavigationContainer>
  );
};

export default Nav;
