import tw from 'twin.macro';

import HomeClassesItem from './ClassesItem';

const HomeClasses = () => {
  return (
    <section tw="pt-20 lg:pt-[120px] pb-12 lg:pb-[90px]">
      <div tw="container mx-auto">
        <div tw="flex flex-wrap -mx-4">
          <div tw="w-full px-4">
            <div tw="text-center mx-auto mb-12 lg:mb-20 max-w-[510px]">
              <span tw="font-semibold text-lg text-primary mb-2 block">
                Our Classes
              </span>
              <h2
                tw="
                  font-bold
                  text-3xl
                  sm:text-4xl
                  md:text-[40px]
                  mb-4
                  "
              >
                Excel Data Analyst Course
              </h2>
              <p tw="text-sm">
                Online class (Face to face class is available for 5 students
                minimum due to current conditions)
              </p>
              <p tw="text-base text-gray-700">90 mins/days * 5 days</p>
            </div>
          </div>
        </div>
        <div tw="flex flex-wrap -mx-4">
          <HomeClassesItem title="Power Query" />
          <HomeClassesItem title="Power Pivot" />

          <HomeClassesItem title="Data Modelling" />
          <HomeClassesItem title="Excel functions & formulas" />

          <HomeClassesItem title="Visualization" />
          <HomeClassesItem title="Microsoft Exam & Old Questions" />
        </div>
      </div>
    </section>
  );
};

export default HomeClasses;
