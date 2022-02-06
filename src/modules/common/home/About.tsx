import tw, { styled } from 'twin.macro';
import Title from '@/components/typography/Title';
import Text from '@/components/typography/Text';

const SHomeAbout = styled.div`
  ${tw`pt-20 lg:pt-[120px] pb-12 lg:pb-[90px] bg-gray-800`}
`;

const SSubTitle = styled.span`
  ${tw`font-semibold text-lg text-gray-200 mb-2 block`}
`;

const STitle = tw(Title)`
  text-white font-semibold text-3xl sm:text-4xl md:text-[40px] md:line-height[1.5] mb-4
`;

const SDescription = tw(Text)`
  text-gray-100 mb-8
`;

const HomeAbout = () => {
  return (
    <SHomeAbout>
      <div tw="container mx-auto">
        <div tw="flex flex-wrap -mx-4">
          <div tw="w-full md:w-1/2 px-4">
            <SSubTitle>About us</SSubTitle>
            <STitle>Join us and be a part of something bigger</STitle>
          </div>

          <div tw="w-full md:w-1/2 px-4">
            <div tw="text-left mx-auto mb-12 lg:mb-20 max-w-[510px]">
              <SDescription>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corrupti repudiandae officiis ex, qui vitae illum quas molestiae
                autem eius, doloremque repellendus quis sapiente nemo soluta
                blanditiis. Aliquid fugiat fugit cum.
              </SDescription>

              <SDescription>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corrupti repudiandae officiis ex, qui vitae illum quas molestiae
                autem eius, doloremque repellendus quis sapiente nemo soluta
                blanditiis. Aliquid fugiat fugit cum.
              </SDescription>
            </div>
          </div>
        </div>
      </div>
    </SHomeAbout>
  );
};

export default HomeAbout;
