Ext.regController('navigation', {
  
  push: function(options) {
    this.history = this.history || [];
    
    if (this.current !== undefined) {
      this.history.push(this.current);
    }
    
    this.current = Ext.apply(options, {
      controller: options['_controller'],
      action: options['_action'],
      historyUrl: options.historyUrl.substr('navigation/push/'.length)
    });
    
    delete this.current['_controller'];
    delete this.current['_action'];
    
    Ext.dispatch(Ext.apply(this.current, {navigation: 'push'}));
  },
  
  pop: function() {
    this.current = (this.history)? this.history.pop() : undefined;
    if (this.current) {
      this.current.dispatched = false;
      Ext.dispatch(Ext.apply(this.current, {navigation: 'pop'}));
    }
  }
  
});