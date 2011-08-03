Ext.regApplication({
  name: 'App',
  
  launch: function() {
    this.viewport = Ext.create({xtype:'viewport'});
    Ext.redirect('navigation/push/home/index');
  }
});