/* eslint-disable @next/next/no-img-element */
import tw, { styled } from 'twin.macro';
import Title from '@/components/typography/Title';
import Text from '@/components/typography/Text';

const SHomeHeader = styled.div`
  ${tw`flex relative z-10`};
  background-image: url(static/images/header-bg.jpg);
  background-position: center;
  &:before {
    content: '';
    z-index: -1;
    opacity: 0.55;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    --bg-opacity: 1;
    ${tw`bg-blue-800`}
  }
`;

const SHomeHeaderContainer = styled.div`
  ${tw`container mx-auto flex flex-row justify-center items-center`}
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
          <Title tw="mb-10 text-3xl font-semibold leading-tight text-gray-200 md:text-5xl">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry
          </Title>
          <Text tw="px-5 mb-10 text-xl text-gray-300">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry
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
