
# React Native Custom TextInput Package

[Screencast from 29-10-23 11:25:07 PM IST.webm](https://github.com/anuragverma01/npm-textinput-package/assets/99275935/a8a682fd-a659-4b5d-b9ae-699b3c4af82a)


# Get Started
 
## Installation

Install my-project with npm

```bash
npm i reactnative-custom-textinput-v1.2
```
    
    
## Usage/Examples

``` javascript
import React, {useState} from 'react';
import {StyleSheet, Dimensions} from 'react-native';
import UITextInput from 'reactnative-custom-textinput-v1.2';

const App = () => {
  const [inputValue, setInputValue] = useState('');

  return (
    <UITextInput
      value={inputValue}
      onChangeText={setInputValue}
      placeholder="Enter something"
      isValid={inputValue.trim().length > 0}
      warning="* Field Mandatory"
      UIInputStyle={InputStyle.customInputText}
      UIWarningStyle={InputStyle.customWarningText}
      UIContainerStyle={InputStyle.customContainer}
      UIEmptyBorderStyle={InputStyle.emptyBorder}
      UINonEmptyBorderStyle={InputStyle.nonEmptyBorder}
    />
  );
};
const {width, height} = Dimensions.get('window');

const InputStyle = StyleSheet.create({
  customContainer: {
    flex: 1,
    // Add custom container styles here
  },
  customInputText: {
    fontSize: 20,
    borderRadius: 10,
    width: width * 0.8,
    height: height * 0.07,
    // Add custom container styles here
  },
  customWarningText: {
    fontSize: 14,
    color: '#f00',
    // Add custom warning text styles here
  },
  emptyBorder: {
    borderColor: 'red',
    //Add custom empty border styles here
  },
  nonEmptyBorder: {
    borderColor: 'green',
    // Add custom non-empty border styles here
  },
});
export default App;


```



| Parameter | Type |      Required              
| :-------- | :------- | :-------- 
| `value`      | `string`| `True` 
| `onChangeText`      | `()=>void` |`Optional`
| `placeholder`      | `string` | `True`
| `isValid`      | `boolean` | `True`
| `warning`      | `string` | `Optional`
| `width`      | `string , number`  |` Default width 90%`
| `height`      |`string , number`  |` Default height 60%`
| `UIContainerStyle`      | `ViewStyle , TextStyle` | ` Default flex:1 `
| `UIInputStyle`      | `ViewStyle,  TextStyle` | `Text-Input Style`
| `UIWarningStyle`      | `ViewStyle , TextStyle`  |`Waring-Text Style `
| `UIEmptyBorderStyle`      | `ViewStyle , TextStyle`  | `emptyBorder-Style`
| `UINonEmptyBorderStyle`      | `ViewStyle , TextStyle`  | `nonEmptyBorder- Style`

# Author

- [@Anurag](https://www.github.com/anuragverma01)

https://www.npmjs.com/package/reactnative-custom-textinput-v1.2
