(function() {
  
  var View = Ext.extend(Ext.Panel, {
    layout: 'vbox',
    initComponent: function() {
      
      this.items = [{
        xtype: 'button',
        text: '...or dispatches',
        style: 'margin: 3em',
        handler: function() {
          Ext.dispatch({
            controller: 'navigation',
            action: 'push',
            to: {
              controller: 'second',
              action: 'index',
              historyUrl: 'second/index',
              param: Math.random()
            }
          });
        }
      }];
      
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