Ext.regController('first', {
  
  index: function(options) {
    var pushed = (options.navigation !== 'pop'),
        animation = {type: 'slide', reverse: !pushed};
    
    if (!this.view) {
      this.view = this.render({xtype: 'firstview'});
    }
    
    this.application.viewport.setActiveItem(this.view, animation);
  }
  
});