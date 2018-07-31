import React, { Component } from 'react';
import {
  DatePickerIOS,
  View,
  StyleSheet,
  Button,
  TextInput,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard
} from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { chosenDate: new Date(), text: '' };

    this.setDate = this.setDate.bind(this);
    this._onPressed = this._onPressed.bind(this);
  }

  setDate(newDate) {
    const stringDate = newDate.toString()
    this.setState({ chosenDate: newDate, text: stringDate });
  }

  _onPressed() {
    this.setState({ text: 'clicked' });
  }

  render() {
    return (
      <TouchableWithoutFeedback
        onPress={() => {
          Keyboard.dismiss();
        }}
      >
        <View style={styles.container}>
          <KeyboardAvoidingView behavior="padding" enabled>
            <DatePickerIOS
              styles={styles.datePicker}
              style={{ color: 'white' }}
              date={this.state.chosenDate}
              onDateChange={this.setDate}
            />
            <TextInput
              style={styles.textInput}
              onChangeText={text => this.setState({ text })}
              value={this.state.text}
              placeholder={'Input'}
              selectionColor="red"
            />
            <Button
              icon={{
                name: 'arrow-right'
              }}
              title="Learn More"
              color="#841584"
              onPress={this._onPressed}
              accessibilityLabel="Learn more about this purple button"
            />
          </KeyboardAvoidingView>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#000',
    justifyContent: 'center',
    borderColor: 'red'
  },
  datePicker: {
    backgroundColor: 'green'
  },
  textInput: {
    height: 60,
    borderColor: 'blue',
    borderWidth: 2,
    margin: 12,
    padding: 5,
    fontSize: 30
  }
});

// import React from 'react';
// import { StyleSheet, View, Button, DatePickerIOS } from 'react-native';

// export default class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { chosenDate: new Date() };

//     this.setDate = this.setDate.bind(this);
//   }

//   setDate(newDate) {
//     this.setState({ chosenDate: newDate });
//   }
//   render() {
//     return (
//       <View style={styles.container}>
//         {/* <Text>
//           Open up App.js to start working on your app! Is this working
//         </Text>
//         <Text>Changes you make will automatically reload.</Text>
//         <Text>Shake your phone to open the developer menu.</Text> */}
//         {/* <Button
//           icon={<Icon name="arrow-right" size={15} color="green" />}
//           title="Button"
//         />
//         <Button
//           icon={{
//             name: 'arrow-right',
//             size: 15,
//             color: 'white'
//           }}
//           title="BUTTON WITH ICON OBJECT"
//         /> */}
//         {/* <Button
//           title="LOADING BUTTON"
//           loading
//           loadingProps={{ size: 'large', color: 'rgba(111, 202, 186, 1)' }}
//           titleStyle={{ fontWeight: '700' }}
//           buttonStyle={{
//             backgroundColor: 'rgba(92, 99,216, 1)',
//             width: 300,
//             height: 45,
//             borderColor: 'transparent',
//             borderWidth: 0,
//             borderRadius: 5
//           }}
//           containerStyle={{ marginTop: 20 }}
//         /> */}
//         <DatePickerIOS
//           date={this.state.chosenDate}
//           onDateChange={this.setDate}
//         />
//         {/* <Button
//           icon={{
//             name: 'arrow-right'
//           }}
//           title="Learn More"
//           color="#841584"
//           accessibilityLabel="Learn more about this purple button"
//         /> */}
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center'
//   }
// });
