/* eslint-disable @next/next/no-img-element */
import tw, { styled } from 'twin.macro';
import Title from '@/components/typography/Title';
import Text from '@/components/typography/Text';

const SHomeHeader = styled.section`
  ${tw`flex relative z-10 bg-gradient-to-r from-primary-500 to-primary-600`};
`;

const SHomeHeaderContainer = styled.div`
  ${tw`container mx-auto flex flex-row justify-center items-center px-4`}
`;

const SHomeHeaderInnerContainer = styled.div`
  ${tw`w-full lg:w-5/6 xl:w-2/3 pt-48 pb-64 text-center`}
`;

const SShapeContainer = styled.div`
  ${tw`absolute bottom-0 z-20 w-full h-auto -mb-1 select-none`}
`;

const HomeHeader = () => {
  return (
    <SHomeHeader>
      <SHomeHeaderContainer>
        <SHomeHeaderInnerContainer>
          <Title tw="mb-10 text-3xl font-semibold leading-tight text-white md:text-5xl drop-shadow">
            Welcome to HK educational LAB
          </Title>
          <Text tw="px-5 mb-10 text-xl text-gray-50 drop-shadow">
            Invest your time here!
          </Text>
        </SHomeHeaderInnerContainer>
      </SHomeHeaderContainer>

      <SShapeContainer>
        <img src="/static/images/header-shape.svg" alt="shape" />
      </SShapeContainer>
    </SHomeHeader>
  );
};

export default HomeHeader;
