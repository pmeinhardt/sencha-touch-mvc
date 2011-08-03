(function() {
  
  var View = Ext.extend(Ext.Panel, {
    layout: 'fit',
    initComponent: function() {
      
      // Push through simple links:
      this.html = [
        '<a href="#navigation/push/first/index">',
        'Pushing controllers through simple links',
        '</a>'
      ].join('');
      this.dockedItems = [{
        xtype: 'toolbar',
        title: 'Home'
      }];
      this.style = 'background: #5078a4'

      View.superclass.initComponent.call(this);
    }
  });

  Ext.reg('homeview', View);
  
})();