Ext.regController('second', {
  
  index: function(options) {
    var pushed = (options.navigation === 'push'),
        animation = {type: 'slide', reverse: !pushed};
    
    if (!this.view) {
      this.view = this.render({xtype: 'secondview'});
    }
    
    this.application.viewport.setActiveItem(this.view, animation);
  }

});