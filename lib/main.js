var root, setFontSize, unsetFontSize;

root = document.documentElement;

module.exports = {

  config: {

    fontSize: {
      title: 'Font Size',
      description: 'Change the UI font size. Needs to be between 8 and 20.',
      type: ['integer', 'string'],
      minimum: 8,
      maximum: 20,
      "default": 'Auto'
    },

    layoutMode: {
      title: 'Layout Mode',
      description: 'In Auto mode, the UI will automatically adapt based on the window size.',
      type: 'string',
      "default": 'Auto',
      "enum": ['Compact', 'Auto', 'Spacious']
    }

  },

  activate: function(state) {

    atom.config.onDidChange('one-dark-ui.fontSize', function() {
      return setFontSize(atom.config.get('one-dark-ui.fontSize'));
    });

    atom.config.onDidChange('one-dark-ui.layoutMode', function() {
      return setLayoutMode(atom.config.get('one-dark-ui.layoutMode'));
    });

    return setFontSize( atom.config.get('one-dark-ui.fontSize') );

  },

  deactivate: function() {
    unsetFontSize();
    return unsetLayoutMode();
  }

};

setFontSize = function( currentFontSize ) {

  if( Number.isInteger( currentFontSize ) ) {
    return root.style.fontSize = currentFontSize + 'px';
  } else if( currentFontSize === 'Auto' ) {
    return unsetFontSize();
  }

};

unsetFontSize = function() {
  return root.style.fontSize = '';
};
