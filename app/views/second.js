(function() {
  
  var View = Ext.extend(Ext.Panel, {
    layout: 'fit',
    initComponent: function() {
      
      this.html = '';
      
      this.dockedItems = [{
        xtype: 'toolbar',
        title: 'Second',
        items: [{
          ui: 'back',
          text: 'Pop',
          scope: this,
          handler: function() {
            Ext.dispatch({
              controller: 'navigation',
              action: 'pop'
            });
          }
        }]
      }];
      
      this.style = 'background: #fcd300'

      View.superclass.initComponent.call(this);
    }
  });

  Ext.reg('secondview', View);
  
})();