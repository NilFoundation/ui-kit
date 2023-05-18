import ReactDOM from 'react-dom'
import { Button, theme } from './'
import { BaseProvider } from 'baseui'
import { ParagraphMedium } from 'baseui/typography'
import { Client as Styletron } from 'styletron-engine-atomic';

import { Provider as StyletronProvider } from 'styletron-react';

const engine = new Styletron();



ReactDOM.render(<div>
  <StyletronProvider value={engine}>
    <BaseProvider theme={theme}>
      <ParagraphMedium>Hello World</ParagraphMedium>
      <Button>Button</Button>
    </BaseProvider>
  </StyletronProvider>
</div>,
document.getElementById('root') as HTMLElement)
