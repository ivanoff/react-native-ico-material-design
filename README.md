# Material Design Icons for React Native

### react-native-ico-material-design

423 Icons

## Usage

```
import Icon from 'react-native-ico-material-design';


// Inside some view component
render() {
    return (
        <>
          <Icon name="home" />
          <Icon name="file" height="40" width="40" />
          <Icon name="smile" color="red" />
        </>
    );
}

```

## List of icons

- [List of Material Design Icons](http://ico.simpleness.org/pack/material-design)

## Installation

#### yarn

```bash
yarn add react-native-ico-material-design react-native-svg
```

#### npm

```bash
npm install --save react-native-ico-material-design react-native-svg
```

### Link react-native-svg

```bash
react-native link react-native-svg
```

### pod install ( for iOS )

```
cd ios && pod install && cd ..
```

## API

### <Icon name [color width height ...rest] />

Returns a SvgXml icon by name and group.

 name | optional | default value | description | examples
------|----------|---------------|-------------|---------
name | no |  | name of file | "home"
color | yes | | line color, css style | "#00ff00", "#0f0", "green"
width | yes | 20 | width of the icon | 40
height | yes | 20 | height of the icon | 40
...rest | no | | other props | style={{backgroundColor: "#00f"}}

## Icons Made by

[Dave Gandy](https://www.flaticon.com/authors/dave-gandy)

## Created by

Dimitry Ivanov <2@ivanoff.org.ua> # curl -A cv ivanoff.org.ua
