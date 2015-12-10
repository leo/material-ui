## Material UI

This theme converts Atom into a good looking and minimal editor without unnecessary clutter. Although it was inspired by Google's Material design, it's not completely based on the same. There are some places in which I've decided to make some decisions by my own to make the design look less haptic.

<a href="https://raw.githubusercontent.com/leo/material-ui/screenshots/with-code.png" target="_blank">
  <img src="https://raw.githubusercontent.com/leo/material-ui/screenshots/with-code.png">
</a>

### Install

Simply go to the __Settings > Install__ section, click the "Themes" tab and search for "material-ui". After installing it, you only need to activate it within the __Settings > Themes__ section under "UI Theme". Or simply fire up a terminal and type in the following to have it installed automatically:

```
$ apm install material-ui
```

By the way, the theme should be used together with the syntax theme [material-syntax][1]. I'm still working on a special one just for the use with this UI.

### Develop

To help with the development of this theme, simply follow these steps:

Clone this repo

```shell
$ git clone https://github.com/leo/material-ui
$ cd material-ui
```

Open Atom in development mode

```shell
$ atom --dev .
```

Add the theme to `~/.atom/packages`

```shell
$ apm link
```

Now enable the theme using the drop-down in the "Themes" section of Atom's settings and start making changes. Although the theme will automatically get updated if you make changes, you can use `cmd-alt-ctrl-L` to reload Atom completely. 

### Dock icon

If you don't like Atom's default dock icon, there are many different alternatives out there from which you can choose one that you like more.

But since there are so much that it's very hard to find the right one, I'd like to suggestion you the one I'm using: It's part of a theme called "native-ui" (which was created by [@fv0][2]) and you can download it [here][3].

### :crown:

This theme was inspired by Mattia Astorino's awesome [material-theme][4] for Sublime Text.

[1]: https://atom.io/themes/material-syntax
[2]: https://github.com/fv0
[3]: https://github.com/fv0/native-ui/raw/master/Atom.icns
[4]: https://github.com/equinusocio/material-theme
