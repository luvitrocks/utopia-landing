import 'glamor/reset';
import React from 'react';
import css, { insertRule } from 'next/css';
import '../components/inlineStyles';
import Head from '../components/head';
import Code from '../components/code';
import Navbar from '../components/navbar';
import Background from '../components/background';

// only client-side
if (typeof document !== 'undefined') {
  const $script = require('scriptjs');

  $script('//platform.twitter.com/widgets.js', 'twitter-widgets');
  $script('//buttons.github.io/buttons.js', 'github-buttons');
}

export default class IndexPage extends React.Component {
  render() {
    return (
      <div>
        <Head title="Utopia Framework - Extensible HTTP server toolkit for Luvit I/O" />

        <div>
          <header className={`center px3 py4 white mb4 relative ${hero}`}>
            <Navbar />

            <div className="relative z2">
              <h1 className="h1 caps mt4 mb0">Utopia Framework</h1>
              <p className="h3 mt1 mb2">Extensible HTTP server toolkit for Luvit I/O</p>
              <div className="mb4 mt3 mx-auto full-width">
                <a href="https://github.com/luvitrocks/utopia/#install" className="inline-block h5 button button-outline button-big white mr3 px3 b2 ultra-rounded">View on GitHub</a>
                <a href="#Examples" className="inline-block h5 button button-big bg-white px3 ultra-rounded" style={{color: '#fe9f64'}}>Check Examples</a>
              </div>
            </div>

            <Background />
          </header>

          <div className={`mx-auto mb4 ${container}`}>
            <div className="griddy">
              <div className="griddy-col griddy-col-4">
                <div className={`p2`}>
                  <h2 className="h3 caps regular semibold">Microservices</h2>
                  <p className={featureText}>Utopia is a minimal and extendable web framework for <a href="https://luvit.io">Luvit I/O</a> that provides a robust set of tools and features for creating small and easy-to-support web applications.</p>
                </div>
              </div>
              <div className="griddy-col griddy-col-4">
                <div className={`p2`}>
                  <h2 className="h3 caps regular semibold">APIs</h2>
                  <p className={featureText}>Luvit I/O implements the same <a href="https://luvit.io/api">APIs</a> as <a href="https://nodejs.org">Node.js</a> while Utopia includes variety of HTTP utilities and middlewares. Creating stable and robust web services with them is quick and easy.</p>
                </div>
              </div>
              <div className="griddy-col griddy-col-4">
                <div className={`p2`}>
                  <h2 className="h3 caps regular semibold">Performance</h2>
                  <p className={featureText}>Utopia is benefiting from <a href="https://www.lua.org">Lua</a> lang and one of the fastest VMs in the wild, <a href="http://luajit.org/performance.html">LuaJIT</a>. The average Utopia server consumes only ~3Mb of RAM – perfect for machines with low characteristics.</p>
                </div>
              </div>
            </div>
          </div>

          <hr className={hr} />

          <div className={`mx-auto mt2 mb4 ${container}`}>
            <div className="p1 mt4">
              <h2 id="Examples" className="center mt0 mb2 caps">
                <a href="#Examples" className={exampleTitle}>Minimal Example</a>
              </h2>
              <p className={`center mx-auto mt2 mb4 pt1 ${featureText} ${exampleText}`}>
                Utopia application is a table containing an array of middleware functions which are composed and executed in a stack-like manner upon request. It is similar to many other middleware systems that you may have encountered such as Ruby's <a href="https://rack.github.io">Rack</a> or Node.js' <a href="https://github.com/senchalabs/connect">Connect</a>.
              </p>
              <Code>{utopiaCodeExample}</Code>
            </div>
            <div className="center mb4 pb2 mt3 mx-auto full-width">
              <a href="/guides/installation" className="inline-block h5 button button-outline button-big pinky mr3 px3 b2 ultra-rounded">Installation Guide</a>
              <a href="/guides/middlewares" className="inline-block h5 button button-big bg-pinky white px3 ultra-rounded">List Middlewares</a>
            </div>
          </div>

          <hr className={hr} />

          <div className={`center mx-auto mt3 p1 mb4 relative ${container}`}>
            <div className="social-buttons absolute left-0 pl1">
              <a href="https://github.com/luvitrocks/utopia" className="github-button mr1" data-icon="octicon-star" data-count-href="/luvitrocks/utopia/stargazers" data-count-api="/repos/luvitrocks/utopia#stargazers_count" data-count-aria-label="# stargazers on GitHub" aria-label="Star luvitrocks/utopia on GitHub">Star</a>
              <a href="https://twitter.com/share" className="twitter-share-button mr1" data-url="http://utopiaframework.org" data-text="Utopia Framework - Extensible HTTP server toolkit for Luvit I/O" data-via="voronianski" data-hashtags="lua" data-dnt="true">Tweet</a>
            </div>
            <div className={copyright}>
              Released under the <a href="https://opensource.org/licenses/MIT">MIT License</a><br />
              © 2014-2016 Utopia contributors
            </div>
          </div>
        </div>
      </div>
    );
  }
}

insertRule(`
  .social-buttons iframe { margin-right: 10px !important }
`);

const utopiaCodeExample = `-- require dependencies
local Utopia = require('utopia')
local logger = require('logger')
local cors = require('cors')
local _ = require('utopia-route')

-- create app instance
local app = Utopia:new()

-- add necessary middlewares
app:use(logger('short'))
app:use(cors())
app:use(_.get('/hello/:name', function (req, res)
  res:finish('Hello, '..req.params.name..'!')
end))
app:use(function (req, res)
  res:finish('Hello, stranger!')
end)

-- start server
app:listen(3000)
print('Ready on http://localhost:3000')
`;

const container = css({
  width: '100%',
  maxWidth: 960
});
const hero = css({
  backgroundImage: 'linear-gradient(180deg, #F65FA3, #FED764)',
  paddingTop: '110px !important',
  paddingBottom: '95px !important'
});
const featureText = css({
  color: '#666',
  fontSize: '16px',
  fontWeight: 400,
  lineHeight: '28px'
});
const hr = css({
  border: 0,
  borderBottom: '1px solid #eee'
});
const exampleTitle = css({
  color: '#333',
  fontWeight: 600,
  textDecoration: 'none'
});
const exampleText = css({
  width: '100%',
  maxWidth: 700
});
const copyright = css({
  color: '#aaa',
  fontSize: '13px',
  lineHeight: '20px',
  textAlign: 'right',
  fontWeight: 500
});
