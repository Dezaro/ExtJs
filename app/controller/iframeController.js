/* global Ext */

Ext.define('Application.controller.iframeController', {
  // Extend basic controller object
  extend: 'Ext.app.Controller',
  alias: 'controller.iframe',
  initComponent: function() {
    this.updateHTML();
    this.callParent(arguments);
  },
  updateHTML: function() {
    this.html = '<iframe id="iframe-' + this.id + '"' +
            ' style="overflow:auto; width: 100%; height: 100%;"' +
            ' frameborder="0" ' +
            ' src="' + this.src + '"' +
            ' allowtransparency="true"></iframe>';
  },
  reload: function() {
    this.setSrc(this.src);
  },
  reset: function() {
    var iframe = this.getDOM();
    var iframeParent = iframe.parentNode;
    if(iframe && iframeParent) {
      iframe.src = 'about:blank';
      iframe.parentNode.removeChild(iframe);
    }

    iframe = document.createElement('iframe');
    iframe.frameBorder = 0;
    iframe.src = this.src;
    iframe.id = 'iframe-' + this.id;
    iframe.style.overflow = 'auto';
    iframe.style.width = '100%';
    iframe.style.height = '100%';
    iframeParent.appendChild(iframe);
  },
  setSrc: function(src, loadingText) {
    this.src = src;
    var iframe = this.getDOM();
    if(iframe) {
      iframe.src = src;
    }
  },
  getSrc: function() {
    return this.src;
  },
  getDOM: function() {
    return document.getElementById('iframe-' + this.id);
  },
  getDocument: function() {
    var iframe = this.getDOM();
    iframe = (iframe.contentWindow) ? iframe.contentWindow : (iframe.contentDocument.document) ? iframe.contentDocument.document : iframe.contentDocument;
    return iframe.document;
  },
  // destroy manually
  destroy: function() {
    var iframe = this.getDOM();
    if(iframe && iframe.parentNode) {
      iframe.src = 'about:blank';
      iframe.parentNode.removeChild(iframe);
    }
    this.callParent(arguments);
  },
  //call this to manually change content.
  //don't call until component is rendered!!!
  update: function(content) {
    this.setSrc('about:blank');
    try {
      var doc = this.getDocument();
      doc.open();
      doc.write(content);
      doc.close();
    } catch(err) {
      // reset if any permission issues
      this.reset();
      var doc = this.getDocument();
      doc.open();
      doc.write(content);
      doc.close();
    }
  }
});