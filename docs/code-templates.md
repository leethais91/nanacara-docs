---
title: Code Template
date: 2018-09-15T07:42:34.000+00:00
slug: code-templates

---
# Popup system

Lib: Use this [package](https://colorfy-software.gitbook.io/react-native-modalfy/)

## Show loading

### Example
```javascript
    openModal('LoadingModal')
    // OR want to change the loading text
    openModal('LoadingModal', {
        label: "Custom loading text",
     })
```
## Show message dialog

### Parameters

| NAME | TYPE | REQUIRED | DESCRIPTION |
| --- | --- | --- | --- |
| title | string | Yes | The dialog's title |
| desc | string | No | An optional message that appears below the dialog's title. |
| type | string(warn-info) | No | Set type of dialog, default is info. |
| showIcon | boolean | No | Show the dialog's icon, default is false. |
| buttons | ButtonsArray | No | Array of buttons. Please check ButtonsArray to get more detail. |

### ButtonsArray

_Properties:_

| NAME | TYPE | DESCRIPTION |
| --- | --- | --- |
| \[text\] | string | Button's text |
| \[onPress\] | function | Callback function when press the button. |
| \[type\] | string(active-disable-null) | Set type is active to make button is bold, set type disable to make gray and disable the button. |
| \[textStyle\] | object | Button text style, you can change the color of text like { color: 'red' } |

### Examples

_Simple dialog_
```javascript
    openModal('MessageModal', { 'title': 'I am a simple dialog' })
```
_Dialog with more options_
```javascript
    openModal('MessageModal', {
        title: "Delete this kid's profile",
        desc: 'After confirm, you can not revert the kid data',
        type: 'warn',
        showIcon: true,
        buttons: [
          { text: 'Cancel', onPress: () => { } },
          {
            text: 'Delete', onPress: () => { }, type: 'active', textStyle: { color: 'red' }
          },
        ]
    })
```

## Show prompt dialog

### Parameters

| NAME | TYPE | REQUIRED | DESCRIPTION |
| --- | --- | --- | --- |
| title | string | Yes | The dialog's title |
| desc | string | No | An optional message that appears below the dialog's title. |
| inputProps | object | No | Custom props of TextInput. You can add any props support by TextInput of RN. Example, change the keyboard type: { keyboardType: 'number-pad' } |
| buttons | ButtonsArray | No | Array of buttons. Please check ButtonsArray to get more detail. onPress function will return text input value |

### Examples
```javascript
    openModal('PromptModal', {
        title: 'Please input new seizure shortcut',
        desc: 'You can put more info here',
        inputProps: {
          keyboardType: 'number-pad',
          placeholder: 'Max len is 20',
        },
        buttons: [
          { text: 'Cancel' },
          { text: 'OK', onPress: (input) => { alert(input) }, type: 'active' },
        ]
    })
```