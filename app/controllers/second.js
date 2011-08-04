Ext.regController('second', {
  
  index: function(options) {
    var pushed = (options.navigation !== 'pop'),
        animation = {type: 'slide', reverse: !pushed};
    
    if (!this.view) {
      this.view = this.render({xtype: 'secondview'});
    }
    
    this.view.update({param: options.param});
    
    this.application.viewport.setActiveItem(this.view, animation);
  }

});