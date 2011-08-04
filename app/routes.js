Ext.Router.draw(function(map) {
  
  // Implement navigation controller behavior for pushing interactions onto
  // and popping them from a (controller, action) stack with animations.
  map.connect('navigation/push/:_controller/:_action', {
    controller: 'navigation',
    action: 'push'
  });
  
  map.connect('navigation/pop', {
    controller: 'navigation',
    action: 'pop'
  });
  
  // Provide default routing behavior, mapping '#controller/action' URL hashes.
  // A '#root/index' route will dispatch the 'root' controllers 'index' action.
  map.connect(':controller/:action');
  map.connect(':controller/:action/:id');
  
});