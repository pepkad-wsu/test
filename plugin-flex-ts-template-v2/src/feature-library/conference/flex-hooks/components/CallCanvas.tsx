import * as Flex from '@twilio/flex-ui';

import ConferenceDialog from '../../custom-components/ConferenceDialog';
import ConferenceMonitor from '../../custom-components/ConferenceMonitor';
import { isAddButtonEnabled } from '../../config';
import { FlexComponent } from '../../../../types/feature-loader';

export const componentName = FlexComponent.CallCanvas;
export const componentHook = function addConferenceToCallCanvas(flex: typeof Flex) {
  // This component doesn't render anything to the UI, it just monitors
  // conference changes and takes action as necessary
  flex.CallCanvas.Content.add(<ConferenceMonitor key="conference-monitor" />, { sortOrder: 999 });

  if (!isAddButtonEnabled()) return;
  // Everything below here is not relevant without the add button enabled

  flex.CallCanvas.Content.add(<ConferenceDialog key="conference-modal" />, { sortOrder: 100 });
};
