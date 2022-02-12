import tw, { styled } from 'twin.macro';
import { NextPage } from 'next';

import HomeClassesItemTwo from './ClassesItemTwo';

const SHomeClassesItemContainer = styled.div`
  ${tw`flex flex-wrap justify-center -mx-4`}
`;

const SHomeClassesItemContainerUl = styled.ul`
  ${tw`block mt-7 p-0 list-none`}
`;

type Props = {};

const HomeClassesItemContainer: NextPage<Props> = ({}) => {
  return (
    <SHomeClassesItemContainer>
      <SHomeClassesItemContainerUl>
        <HomeClassesItemTwo title="Microsoft Industrial Excel Expert Course" />
        <HomeClassesItemTwo title="Microsoft Data Analyst Course" />
        <HomeClassesItemTwo title="Business For English" soon />
        <HomeClassesItemTwo title="IELTS" soon />
        <HomeClassesItemTwo title="Project Management Professional" soon />
        <HomeClassesItemTwo
          title="Ways of Profits - Classic Business Workshop"
          soon
        />
        <HomeClassesItemTwo title="HR Management" soon />
        <HomeClassesItemTwo title="Accounting Management" soon />
      </SHomeClassesItemContainerUl>
    </SHomeClassesItemContainer>
  );
};

export default HomeClassesItemContainer;
