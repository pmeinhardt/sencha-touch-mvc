Sencha Touch MVC setup and new navigation controller
===

This minimalist example implementation demonstrates how to enable stack-based navigation in [Sencha Touch](www.sencha.com/products/touch/) applications.

_There's probably a lot of room for improvements as I only spontaneously threw together this code. Your feedback is more then welcome._


Getting started
---

As demonstrated through this code, you can easily push controllers onto and pop them from the navigation stack through a variety of methods (w/ a specified action):

Pushing:

  1. `Ext.redirect('navigation/push/<controller-name>/<action-name>')`
  2. `<a href="#navigation/push/.../...">See details view</a>`

Popping:

  1. `Ext.dispatch({controller: 'navigation', action: 'pop'})`
  2. `Ext.redirect('navigation/pop')`
  3. `<a href="#navigation/pop">Go back</a>`

Passing arguments:

    `Ext.dispatch({
      controller: 'navigation',
      action: 'push',
      to: {
        controller: 'pushed-controller',
        action: 'pushed-action',
        historyUrl: 'pushed-controller/pushed-action',
        param: Math.random() // will be available in pushed-action's options
      }
    })`


Goodies
---

Apart from the controller part, there are some special view included in this package: A back button (registered as xtype: 'backbutton') and a 'navigationbar' which provide a configurable shortcut for the default behavior:

    `this.dockedItems = [{
      xtype: 'navigationbar',
      title: 'I\'m a navigation bar'
    }];
    
    // simply pass {items: []} if you don't want the back button
    // or just override it with another one`

see `app/views/navigation.js` for details.


Implementation details
---

The whole idea is based on 2 specialized routes (see `app/routes.js`) for intercepting push and pop calls. Our navigation controller maintains a history of the called controller-action pairs so that it can rewind these (see `app/controllers/navigation.js`). Furthermore it allows controllers to determine, whether they were 'push'ed or 'pop'ped through an entry in the options parameter received by controller actions.
