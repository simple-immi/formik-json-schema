import { registerContainer } from '../registry';

import HtmlTag from './HtmlTag';
import Form from './Form';
import Tabs from './Tabs';
import Fieldset from './Fieldset';
import ButtonGroup from './ButtonGroup';

registerContainer('div', HtmlTag);
registerContainer('html-tag', HtmlTag);
registerContainer('form', Form);
registerContainer('tabs', Tabs);
registerContainer('fieldset', Fieldset);
registerContainer('button-group', ButtonGroup);
