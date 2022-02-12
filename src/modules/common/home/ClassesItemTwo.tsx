import tw, { styled } from 'twin.macro';
import Text from '@/components/typography/Text';
import { NextPage } from 'next';

const SHomeClassesItemContainerUlLi = styled.li`
  ${tw`relative`}
`;

const SHomeClassesItemContainerUlSpan = styled.span`
  ${tw`inline-block relative mr-4 w-6 h-6 border-radius[50%] vertical-align[middle] bg-green-100 text-green-700`}
  font-size: 12px;
`;

const SHomeClassesItemContainerUlSpanSvg = styled.svg`
  ${tw`absolute top-1/2 left-1/2 w-3 h-3`}
  transform: translateX(-50%) translateY(-50%);
`;

const SHomeClassesItemContainerUlSpanSoon = styled.span`
  ${tw`px-3 py-1 ml-3 text-xs font-thin text-red-600 border-solid border border-red-600 rounded-full select-none`}
`;

const SText = styled(Text)`
  ${tw`inline-block`}
`;

type Props = {
  title: string;
  soon?: boolean;
};

const HomeClassesItemTwo: NextPage<Props> = ({ title, soon }) => {
  return (
    <SHomeClassesItemContainerUlLi>
      <SHomeClassesItemContainerUlSpan>
        <SHomeClassesItemContainerUlSpanSvg
          aria-hidden="true"
          data-prefix="fas"
          data-icon="check"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path
            fill="currentColor"
            d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"
          ></path>
        </SHomeClassesItemContainerUlSpanSvg>
      </SHomeClassesItemContainerUlSpan>
      <SText>{title}</SText>
      {soon && (
        <SHomeClassesItemContainerUlSpanSoon>
          Soon
        </SHomeClassesItemContainerUlSpanSoon>
      )}
    </SHomeClassesItemContainerUlLi>
  );
};

export default HomeClassesItemTwo;
