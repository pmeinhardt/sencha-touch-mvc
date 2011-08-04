Ext.regController('navigation', {
  
  debug: true,
  
  log: function() {
    if (this.debug) {
      var args = Array.prototype.slice.call(arguments);
      console.log.apply(console, args);
    }
  },
  
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
    
    if (this.history.length === 0) {
      // provide an initial back item when first invoking a push action
      // i.e. in the application's launch method, so you can at least
      // go back to the home screen when invoking the app in a nested state –
      // e.g. via index.html#some-controller/some-action.
      this.history.push(this.current);
    }
    
    Ext.dispatch(Ext.apply(this.current, {navigation: 'push'}));
    
    this.log('navigate to: %s > %s', this.current.controller, this.current.action);
  },
  
  pop: function() {
    this.current = (this.history)? this.history.pop() : undefined;
    if (this.current !== undefined) {
      this.current.dispatched = false;
      Ext.dispatch(Ext.apply(this.current, {navigation: 'pop'}));
      
      this.log('navigate back to: %s > %s', this.current.controller, this.current.action);
    }
  }
  
});