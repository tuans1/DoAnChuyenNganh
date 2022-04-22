import '../styles/globals.css';
import App from 'next/app';
import React from 'react';
import wrapper from './configureStore';
import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically 

class ExampleApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps({ ctx })
    }

    return { pageProps }
  }

  render() {
    const { Component, pageProps } = this.props

    return (
      <Component {...pageProps} />
    )
  }
}

export default wrapper.withRedux(ExampleApp)

// function MyApp({ Component, pageProps }) {

//   const sagaMiddleware = createSagaMiddleware();
//   var store = createStore(
//     rootReducer,
//     applyMiddleware(sagaMiddleware)
//   );
//   sagaMiddleware.run(rootSaga);

//   return (
//     <Provider store={store}>
//       <Component {...pageProps} />
//     </Provider>

//   )
// }


// export default MyApp;