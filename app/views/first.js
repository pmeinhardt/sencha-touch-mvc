(function() {
  
  var View = Ext.extend(Ext.Panel, {
    layout: 'fit',
    initComponent: function() {
      
      this.html = [
        '<a href="#navigation/push/second/index">',
        '...and again',
        '</a>'
      ].join('');
      
      // Pop via controller-action dispatch:
      this.dockedItems = [{
        xtype: 'toolbar',
        title: 'First',
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
      
      this.style = 'background: #e7007d'

      View.superclass.initComponent.call(this);
    }
  });

  Ext.reg('firstview', View);
  
})();