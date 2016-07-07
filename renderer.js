// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
onload = () => {
  const webview = document.getElementById('foo');
  const indicator = document.querySelector('.indicator');

  const loadstart = () => {
    indicator.innerText = 'loading...';
  };

  const loadstop = () => {
    indicator.innerText = '';
  };

  webview.addEventListener('did-start-loading', loadstart);
  webview.addEventListener('did-stop-loading', loadstop);
  webView.setInitialScale(1);
webview.getSettings().setLoadWithOverviewMode(true);
webview.getSettings().setUseWideViewPort(true);
webview.getSettings().setJavaScriptEnabled(true);
};
