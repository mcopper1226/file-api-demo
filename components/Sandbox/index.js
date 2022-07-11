import React from 'react';
import {
  Sandpack,
  SandpackProvider,
  SandpackThemeProvider,
  SandpackLayout,
  SandpackCodeEditor,
  SandpackPreview,
} from '@codesandbox/sandpack-react';
import styles from './Sandbox.module.scss';
import cx from 'classnames';
// import packages from '../../packages';

const PKG = `{
  "name": "@material/textfield",
  "description": "The Material Components for the web text field component",
  "version": "14.0.0",
  "license": "MIT",
  "keywords": [
    "material components",
    "material design",
    "textfield",
    "text field"
  ],
  "main": "dist/mdc.textfield.js",
  "module": "index.js",
  "sideEffects": false,
  "repository": {
    "type": "git",
    "url": "https://github.com/material-components/material-components-web.git",
    "directory": "packages/mdc-textfield"
  },
  "dependencies": {
    "@material/animation": "^14.0.0",
    "@material/base": "^14.0.0",
    "@material/density": "^14.0.0",
    "@material/dom": "^14.0.0",
    "@material/feature-targeting": "^14.0.0",
    "@material/floating-label": "^14.0.0",
    "@material/line-ripple": "^14.0.0",
    "@material/notched-outline": "^14.0.0",
    "@material/ripple": "^14.0.0",
    "@material/rtl": "^14.0.0",
    "@material/shape": "^14.0.0",
    "@material/theme": "^14.0.0",
    "@material/tokens": "^14.0.0",
    "@material/typography": "^14.0.0",
    "tslib": "^2.1.0"
  },
  "gitHead": "432c815e58d61a257742836f816cf95e271e6ea1"
}`;

const Sandbox = ({ files, height = 700, stacked = false, title, preText, postText, packages, iframeMode }) => {
  // data['/node_modules/@material/textfield/package.json'].code.replace(/(\r\n|\n|\r|\\)/gm, '');

  // packages = {
  //   ...packages,
  //   '/node_modules/@material/textfield/package.json': {
  //     code: packages['/node_modules/@material/textfield/package.json'].code.replace(/(\r\n|\n|\r|\\)/gm, ''),
  //   },
  // };

  console.log(packages);
  files = {
    ...files,
    ...packages,
  };

  if (iframeMode) {
    height = '100vh';
  }
  return (
    <div className={styles.sandbox__container}>
      <div className='margin-bottom-xl'>
        {title && <h4 className='type-T50 color-primary-90'>{title}</h4>}
        {preText && (
          <div className='margin-y-md'>
            {' '}
            <span className='type-body2'>{preText}</span>
          </div>
        )}
      </div>
      <SandpackProvider
        template='vanilla'
        theme='dark'
        options={{
          externalResources: [
            'https://cdn.media.disneyatoz.com/fonts/InspireTWDC_fonts.css',
            'https://unpkg.com/normalize.css@7.0.0/normalize.css',
          ],
        }}
        files={files}
      >
        <div
          className={cx(styles.sandbox, {
            [styles['sandbox--stacked']]: stacked,
            [styles['sandbox--iframe-mode']]: iframeMode,
          })}
        >
          <div className={cx(styles.sandbox__panel, styles['sandbox__panel--code'])}>
            <div className={styles['sandbox__panel-inner']}>
              <SandpackCodeEditor style={{ height }} showTabs={true} />
            </div>
          </div>
          <div className={styles.sandbox__panel}>
            <div className={styles['sandbox__panel-inner']}>
              <SandpackPreview showOpenInCodeSandbox={false} showRefreshButton={false} style={{ height }} />
            </div>
          </div>
        </div>
      </SandpackProvider>
      {postText && (
        <div className='margin-top-xl'>
          <span className='type-body1'>{postText}</span>
        </div>
      )}
    </div>
  );
};

export default Sandbox;
