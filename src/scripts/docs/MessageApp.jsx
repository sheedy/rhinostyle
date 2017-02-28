import React    from 'react';
import ReactDOM from 'react-dom';

import { Message, UtilityInlineGrid } from '../components';

import Playground from 'component-playground';

/* eslint import/no-unresolved: 0 */
const messageExample = require('raw-loader!./examples/Message.example.txt');
const messageDocs = {
  className: '[Optional] - Include additional class name(s)',
  type: '[Optional] - Message type -  [primary | note]',
  direction: '[Optional] - Message direction -  [inbound | outbound]',
};
const exampleScope  = {
  React,
  ReactDOM,
  Message,
  UtilityInlineGrid
};

const MessageApp = () =>
  <div>
    <h1 className="site-headline">Messages</h1>

    <section className="site-section">
      <h3 className="site-subheadline">Message Types</h3>
      <p className="site-copy"><code>type="default | primary | note"</code></p>
      <UtilityInlineGrid>
        <div>
          <Message>
            Default Message <a href="#">www.linktosomething.com</a>
          </Message>
        </div>
        <div>
          <Message type="primary">
            Primary Message <a href="#">www.linktosomething.com</a>
          </Message>
        </div>
        <div>
          <Message type="note">
            Note Message <a href="#">www.linktosomething.com</a>
          </Message>
        </div>
      </UtilityInlineGrid>
    </section>

    <section className="site-section">
      <h3 className="site-subheadline">Message Direction</h3>
      <div className="u-m-b-md">
        <h5 className="site-miniheadline">Inbound Message</h5>
        <p className="site-copy"><code>direction="inbound"</code></p>
        <UtilityInlineGrid>
          <div>
            <Message direction="inbound">
              Default Message
            </Message>
          </div>
          <div>
            <Message direction="inbound" type="primary">
              Primary Message
            </Message>
          </div>
          <div>
            <Message direction="inbound" type="note">
              Note Message
            </Message>
          </div>
        </UtilityInlineGrid>
      </div>
      <div className="u-m-b-md">
        <h5 className="site-miniheadline">Outbound Message</h5>
        <p className="site-copy"><code>direction="outbound"</code></p>
        <UtilityInlineGrid>
          <div>
            <Message direction="outbound">
              Default Message
            </Message>
          </div>
          <div>
            <Message direction="outbound" type="primary">
              Primary Message
            </Message>
          </div>
          <div>
            <Message direction="outbound" type="note">
              Note Message
            </Message>
          </div>
        </UtilityInlineGrid>
      </div>
    </section>

    <section>
      <h3 className="site-subheadline">Playground</h3>
      <Playground docClass={Message} propDescriptionMap={messageDocs} codeText={messageExample} scope={exampleScope} noRender={false} />
    </section>

  </div>;

ReactDOM.render(<MessageApp />, document.getElementById('js-app'));
