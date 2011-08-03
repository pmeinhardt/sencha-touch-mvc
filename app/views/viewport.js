(function() {
  
  var Viewport = Ext.extend(Ext.Panel, {
    fullscreen: true,
    id: 'viewport',
    layout: 'card'
  });
  
  Ext.reg('viewport', Viewport);
  
})();