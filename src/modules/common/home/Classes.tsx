import tw, { styled } from 'twin.macro';
import Title from '@/components/typography/Title';

import HomeClassesItemContainer from './ClassesItemContainer';

const SHomeClassesContainer = styled.section`
  ${tw`pt-20 lg:pt-[120px] pb-12 px-4 lg:pb-[90px]`}
`;

const STitle = tw(Title)`
  font-bold text-3xl sm:text-4xl mb-4
`;

const HomeClasses = () => {
  return (
    <SHomeClassesContainer>
      <div tw="container mx-auto">
        <div tw="flex flex-wrap -mx-4">
          <div tw="w-full px-4">
            <div tw="text-center mx-auto mb-12 lg:mb-20 max-w-[510px]">
              <span tw="font-semibold text-lg text-primary mb-2 block">
                Our Classes
              </span>
              <STitle>Excel Data Analyst Course</STitle>
              <p tw="text-sm">
                Online class (Face to face class is available for 5 students
                minimum due to current conditions)
              </p>
              <p tw="text-base text-gray-700">90 mins/days * 5 days</p>
            </div>
          </div>
        </div>

        <HomeClassesItemContainer />
      </div>
    </SHomeClassesContainer>
  );
};

export default HomeClasses;
