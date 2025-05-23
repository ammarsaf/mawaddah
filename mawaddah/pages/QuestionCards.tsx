import { AnswerRadio } from '../components/Radio';
import { CarouselQuestion } from '../components/Carousel';
import { PageTabs } from '../components/Tabs';
import { SelectImpact } from '../components/SelectImpact';
import { PagePicker } from '../components/PagePicker';
import { Questions } from '../src/MarriageQuestions';

import 'tailwindcss';

export const QuestionCards = () => {
  return (
    <>
      <div className="bg-white mx-100 my-10 p-10 rounded-md shadow-md">
        <PageTabs />
        <PagePicker />
        {/* <FlashCard
            id={q.id}
            questionEng={q.questionEng}
            questionMy={q.questionMalay}
            tag={q.questionTag}
          /> */}
        <CarouselQuestion allData={Questions} />
        <SelectImpact />
        <AnswerRadio />
      </div>
    </>
  );
};

export default QuestionCards;
