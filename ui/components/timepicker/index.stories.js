import React from 'react';
import { storiesOf } from '@storybook/react';
import * as BaseExamples from './base/example';
import { getAllDisplayCollectionsByType } from '../../shared/helpers';
import StoryFrame from '../../../shared/components/StoryFrame';

import '../../index.scss';

const examples = [BaseExamples];

const kitchenSink = getAllDisplayCollectionsByType(examples, [
  'default',
  'examples',
  'states'
]);

storiesOf('Components/Timepicker', module).add('Kitchen Sink', () =>
  kitchenSink.map((element, idx) =>
    element.map(({ label, component }) => (
      <StoryFrame
        component={component}
        label={label}
        styles={`min-height: 18rem`}
        key={`kitchen-sink-${label}-${idx}`}
      />
    ))
  )
);
