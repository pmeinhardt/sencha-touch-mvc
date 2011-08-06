(function() {
  
  var View = Ext.extend(Ext.Panel, {
    layout: 'fit',
    initComponent: function() {
      
      this.tpl = new Ext.Template('..and passing arguments: {param}');
      
      // Pre-defined navigationbar type
      // with back button
      this.dockedItems = [{
        xtype: 'navigationbar',
        title: 'Second'
      }];
      
      this.style = 'background: #fcd300'

      View.superclass.initComponent.call(this);
    }
  });

  Ext.reg('secondview', View);
  
})();