import React from 'react';
import ReactDOM from 'react-dom';

//indexing other components for build using webpack entrypoint compilation.

import '../index.pug';
//css files
import '../sass/style.scss';

// loading file path for doc root.
ReactDOM.render(RootComponent, document.getElementById('root'));
