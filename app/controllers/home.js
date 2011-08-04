Ext.regController('home', {
  
  index: function(options) {
    var pushed = (options.navigation !== 'pop'),
        animation = (pushed)? 'fade' : {type: 'slide', reverse: true};
    
    if (!this.view) {
      this.view = this.render({xtype: 'homeview'});
    }
    
    this.application.viewport.setActiveItem(this.view, animation);
  }
  
});