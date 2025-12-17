import React, { useMemo, useState } from 'react';
import { BpkCode } from '@skyscanner/backpack-web/bpk-component-code';
import BpkButton from '@skyscanner/backpack-web/bpk-component-button';
import BpkText from '@skyscanner/backpack-web/bpk-component-text';
import BpkCalendar, { CALENDAR_SELECTION_TYPE } from '@skyscanner/backpack-web/bpk-component-calendar';

import { cssModules } from '@skyscanner/backpack-web/bpk-react-utils';

import STYLES from './App.scss';

const getClassName = cssModules(STYLES);

const today = new Date();
const sixMonthsAhead = new Date(today.getFullYear(), today.getMonth() + 6, today.getDate());

const App = () => {
  const [selectedDate, setSelectedDate] = useState(today);

  const selectionConfiguration = useMemo(
    () => ({
      type: CALENDAR_SELECTION_TYPE.single,
      date: selectedDate,
    }),
    [selectedDate],
  );

  return (
    <div className={getClassName('App')}>
      <header className={getClassName('App__header')}>
        <div className={getClassName('App__header-inner')}>
          <BpkText tagName="h1" textStyle="xxl" className={getClassName('App__heading')}>Flight Schedule</BpkText>
        </div>
      </header>
      <main className={getClassName('App__main')}>
        <BpkText tagName="p" className={getClassName('App__text')}>
          Select your preferred departure date below. You can always edit <BpkCode>src/App.js</BpkCode> to keep iterating.
        </BpkText>
        <BpkCalendar
          id="flight-calendar"
          className={getClassName('App__calendar')}
          onDateSelect={(date) => setSelectedDate(date)}
          minDate={today}
          maxDate={sixMonthsAhead}
          focusedDate={selectedDate}
          selectionConfiguration={selectionConfiguration}
        />
        <BpkButton className={getClassName('App__button')} onClick={() => alert('It works!')}>Continue</BpkButton>
      </main>
    </div>
  );
};

export default App;
