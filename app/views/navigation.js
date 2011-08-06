(function() {
  
  var BackButton = Ext.extend(Ext.Button, {
    text: 'Back',
    ui: 'back',
    handler: function() {
      Ext.redirect('navigation/pop');
    }
  });
  
  Ext.reg('backbutton', BackButton);
  
  
  var Navigationbar = Ext.extend(Ext.Toolbar, {
    items: [{ xtype: 'backbutton' }]
  });
  
  Ext.reg('navigationbar', Navigationbar);
  
})();