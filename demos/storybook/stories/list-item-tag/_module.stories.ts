import { MatIconModule } from '@angular/material/icon';
import { ListItemTagModule, InfoListItemModule } from '@brightlayer-ui/angular-components';
import { withKnobs } from '@storybook/addon-knobs';
import { moduleMetadata, storiesOf } from '@storybook/angular';
import {
    COMPONENT_SECTION_NAME,
    README_STORY_NAME,
    STORY_PARAMS,
    WITH_FULL_CONFIG_STORY_NAME,
    WITH_MIN_PROPS_STORY_NAME,
} from '../../src/constants';
import { getReadMe, getReadMeStory, storyWrapper, UtilModule } from '../../src/utils';
import { withBasicConfig } from './with-basic-config.stories';
import { withFullConfig } from './with-full-config.stories';
import { withinAnInfoListItem } from './within-an-InfoListItem.stories';
import { infoListItemWrapper } from '../info-list-item/_module.stories';

storiesOf(`${COMPONENT_SECTION_NAME}/List Item Tag`, module)
    .addDecorator(
        moduleMetadata({
            imports: [ListItemTagModule, MatIconModule, UtilModule],
        })
    )
    .addDecorator(withKnobs)
    .addDecorator(storyWrapper())
    .addParameters({
        ...STORY_PARAMS,
        notes: { markdown: getReadMe('ListItemTag.md') },
    })
    .add(README_STORY_NAME, getReadMeStory)
    .add(WITH_MIN_PROPS_STORY_NAME, withBasicConfig)
    .add(WITH_FULL_CONFIG_STORY_NAME, withFullConfig);

storiesOf(`${COMPONENT_SECTION_NAME}/List Item Tag`, module)
    .addDecorator(
        moduleMetadata({
            imports: [ListItemTagModule, MatIconModule, UtilModule, InfoListItemModule],
        })
    )
    .addDecorator(withKnobs)
    .addDecorator(storyWrapper())
    .addDecorator(infoListItemWrapper())
    .addParameters({
        ...STORY_PARAMS,
        notes: { markdown: getReadMe('ListItemTag.md') },
    })
    .add('within an InfoListItem', withinAnInfoListItem);
