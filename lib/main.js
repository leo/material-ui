var root, setFontSize, unsetFontSize;

root = document.documentElement;

module.exports = {

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
