/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { Keyboard, AsyncStorage, AlertIOS, NetInfo, TabBarIOS, DatePickerIOS, Picker, TextInput, Image, Platform, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Header, Overlay, Button, ButtonGroup, Icon, FormLabel, FormInput, FormValidationMessage, CheckBox } from 'react-native-elements';
import { Dropdown } from 'react-native-material-dropdown';
import DateTimePicker from 'react-native-modal-datetime-picker';
import SQLite from 'react-native-sqlite-storage';
import { createAppContainer, createStackNavigator, StackActions, NavigationActions } from 'react-navigation';
import moment from 'moment';
import Eventdata from './Eventdata.json';
import Questions from './questions.json';

import {Fonts} from './utils/Fonts';

class HomeScreen extends Component {
  constructor(props){
    super(props);
    this.state = {
      value: ''
    };
    this.updateStatus = this.updateStatus.bind(this);
  }

  // Set value for selected event
  updateStatus (value) {
    //Store eventID for when the submit button is pressed and the form resets
    // console.log(value);
    this.setState({value});
    AsyncStorage.setItem('eventID', value);
  }

  render() {
    let data = Eventdata;

    return (
      <View style={styles.wrapper}>
        <View style={styles.imageContainerHome}>
          <Image style={styles.imageHome} source={require('./white-ang-logo.png')} />
        </View>

        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{fontSize: 25, fontFamily: 'Bangla Sangam MN'}}>Please select an event:</Text>
          <Dropdown
            data={data.events}
            selectedItemColor='steelblue'
            itemTextStyle={{textAlign: 'center', fontFamily: 'Bangla Sangam MN'}}
            containerStyle={{width: '95%', borderColor: 'steelblue', borderWidth: 1, height: 50, marginTop: 0, marginBottom: 10}}
            fontSize={25}
            dropdownOffset={{top: 5, left: 0}}
            //valueExtractor={({value}) => value}
            onChangeText={this.updateStatus}
          />
          <Button
            title="Proceed"
            backgroundColor='steelblue'
            titleStyle={{fontFamily: 'Bangla Sangam MN'}}
            onPress={() => {
              this.props.navigation.navigate('Input', {
                eventID: this.state.value
              });
            }}
          />
        </View>
      </View>
    );
  }
}

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      eventID: '',
      q1: '',
      q2: '',
      q3: '',
      q4: '',
      q5: '',
      q6: '',
      q7a: '',
      q7b: '',
      q7c: '',
      q7d: '',
      q8a: '',
      q8b: '',
      q8c: '',
      q8d: '',
      q9a: '',
      q9b: '',
      q9c: '',
      q9d: '',
      q10: '',
      q11: '',
      q12: '',
      q13: '',
      q14: '',
      q15: '',
      q16a: '',
      q16b: '',
      q16c: '',
      q16d: '',
      q17a: '',
      q17b: '',
      q17c: '',
      q17d: '',
      q18a: '',
      q18b: '',
      q18c: '',
      q18d: '',
      q19: ''
    };

    this.updateIndex = this.updateIndex.bind(this);
    this.updateIndexTwo = this.updateIndexTwo.bind(this);
    this.updateIndexThree = this.updateIndexThree.bind(this);
    this.updateIndexFour = this.updateIndexFour.bind(this);
    this.updateIndexFive = this.updateIndexFive.bind(this);
    this.updateIndexSix = this.updateIndexSix.bind(this);
    this.updateIndexSeven = this.updateIndexSeven.bind(this);
    this.updateIndexEight = this.updateIndexEight.bind(this);
    this.updateIndexNine = this.updateIndexNine.bind(this);
    this.updateIndexTen = this.updateIndexTen.bind(this);
    this.updateIndexEleven = this.updateIndexEleven.bind(this);
    this.updateIndexTwelve = this.updateIndexTwelve.bind(this);
    this.updateIndexOneThree = this.updateIndexOneThree.bind(this);
    this.updateIndexOneFour = this.updateIndexOneFour.bind(this);
    this.updateIndexOneFive = this.updateIndexOneFive.bind(this);
    this.updateIndexOneSix = this.updateIndexOneSix.bind(this);
    this.updateIndexOneSeven = this.updateIndexOneSeven.bind(this);
    this.updateIndexOneEight = this.updateIndexOneEight.bind(this);
    this.updateIndexOneNine= this.updateIndexOneNine.bind(this);

    this.eventIdFunc = this.eventIdFunc.bind(this);
    this.updateStatus = this.updateStatus.bind(this);
    this.updateEventId = this.updateEventId.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  componentWillMount() {
    this.getEventId();
  }
  componentDidMount(){
    const { navigation } = this.props;
    const ques1 = navigation.getParam('q1', 'NA');
    this.setState({q1 : `${ques1}`});
    const ques2 = navigation.getParam('q2', 'NA');
    this.setState({q2 : `${ques2}`});
    const ques3 = navigation.getParam('q3', 'NA');
    this.setState({q3 : `${ques3}`});
    const ques4 = navigation.getParam('q4', 'NA');
    this.setState({q4 : `${ques4}`});
    const ques5 = navigation.getParam('q5', 'NA');
    this.setState({q5 : `${ques5}`});

    const ques6 = navigation.getParam('q6', 'NA');
    this.setState({q6 : `${ques6}`});
    const ques7a = navigation.getParam('q7a', 'NA');
    this.setState({q7a : `${ques7a}`});
    const ques7b = navigation.getParam('q7b', 'NA');
    this.setState({q7b : `${ques7b}`});
    const ques7c = navigation.getParam('q7c', 'NA');
    this.setState({q7c : `${ques7c}`});
    const ques7d = navigation.getParam('q7d', 'NA');
    this.setState({q7d : `${ques7d}`});

    const ques8a = navigation.getParam('q8a', 'NA');
    this.setState({q8a : `${ques8a}`});
    const ques8b = navigation.getParam('q8b', 'NA');
    this.setState({q8b : `${ques8b}`});
    const ques8c = navigation.getParam('q8c', 'NA');
    this.setState({q8c : `${ques8c}`});
    const ques8d = navigation.getParam('q8d', 'NA');
    this.setState({q8d : `${ques8d}`});

    const ques9a = navigation.getParam('q9a', 'NA');
    this.setState({q9a : `${ques9a}`});
    const ques9b = navigation.getParam('q9b', 'NA');
    this.setState({q9b : `${ques9b}`});
    const ques9c = navigation.getParam('q9c', 'NA');
    this.setState({q9c : `${ques9c}`});
    const ques9d = navigation.getParam('q9d', 'NA');
    this.setState({q9d : `${ques9d}`});

    const ques10 = navigation.getParam('q10', 'NA');
    this.setState({q10 : `${ques10}`});
    const ques11 = navigation.getParam('q11', 'NA');
    this.setState({q11 : `${ques11}`});
    const ques12 = navigation.getParam('q12', 'NA');
    this.setState({q12 : `${ques12}`});
    const ques13 = navigation.getParam('q13', 'NA');
    this.setState({q13 : `${ques13}`});
    const ques14 = navigation.getParam('q14', 'NA');
    this.setState({q14 : `${ques14}`});

    const ques15 = navigation.getParam('q15', 'NA');
    this.setState({q15 : `${ques15}`});
    const ques16a = navigation.getParam('q16a', 'NA');
    this.setState({q16a : `${ques16a}`});
    const ques16b = navigation.getParam('q16b', 'NA');
    this.setState({q16b : `${ques16b}`});
    const ques16c = navigation.getParam('q16c', 'NA');
    this.setState({q16c : `${ques16c}`});
    const ques16d = navigation.getParam('q16d', 'NA');
    this.setState({q16d : `${ques16d}`});

    const ques17a = navigation.getParam('q17a', 'NA');
    this.setState({q17a : `${ques17a}`});
    const ques17b = navigation.getParam('q17b', 'NA');
    this.setState({q17b : `${ques17b}`});
    const ques17c = navigation.getParam('q17c', 'NA');
    this.setState({q17c : `${ques17c}`});
    const ques17d = navigation.getParam('q17d', 'NA');
    this.setState({q17d : `${ques17d}`});

    const ques18a = navigation.getParam('q18a', 'NA');
    this.setState({q18a : `${ques18a}`});
    const ques18b = navigation.getParam('q18b', 'NA');
    this.setState({q18b : `${ques18b}`});
    const ques18c = navigation.getParam('q18c', 'NA');
    this.setState({q18c : `${ques18c}`});
    const ques18d = navigation.getParam('q18d', 'NA');
    this.setState({q18d : `${ques18d}`});

    const ques19 = navigation.getParam('q19', 'NA');
    this.setState({q19 : `${ques19}`});

    const event = navigation.getParam('eventID', 'NA');
    this.setState({eventID: `${event}`});
  }

  eventIdFunc(){
    let wEvent = Eventdata.events;
    // console.log(wEvent);
    let valueIndex;
    // console.log('event id is:', this.state.eventID);
    for(var i=0; i<wEvent.length; i++) {
      if(this.state.eventID === wEvent[i].value) {
        valueIndex = wEvent[i].A;
        //console.log('event id number:', valueIndex);
      }
    }
    // this.setState({eventIDnum: wEvent[valueIndex].A});
    // console.log('event number is', valueIndex);
    return valueIndex;
  }

  // Function for handling date picking
  _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });
  _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });

  _handleDatePicked = (date) => {
    let dateString = moment(date).format('MM-DD-YYYY');
    this.setState({chosenDate: dateString});
    this.setState({dob: dateString});
    this._hideDateTimePicker();
  };

  // Index is for knowing whether yes or no is selected...0 or 1 respectively
  updateIndex (q1) {
    this.setState({q1});
  }
  updateIndexTwo (q2) {
    this.setState({q2});
  }
  updateIndexThree (q3) {
    this.setState({q3});
  }
  updateIndexFour (q4) {
    this.setState({q4});
  }
  updateIndexFive (q5) {
    this.setState({q5});
  }
  updateIndexSix (q6) {
    this.setState({q6});
  }
  updateIndexSeven (q7) {
    this.setState({q7});
  }
  updateIndexEight (q8) {
    this.setState({q8});
  }
  updateIndexNine (q9) {
    this.setState({q9});
  }
  updateIndexTen (q10) {
    this.setState({q10});
  }
  updateIndexEleven (q11) {
    this.setState({q11});
  }
  updateIndexTwelve (q12) {
    this.setState({q12});
  }
  updateIndexOneThree (q13) {
    this.setState({q13});
  }
  updateIndexOneFour (q14) {
    this.setState({q14});
  }
  updateIndexOneFive (q15) {
    this.setState({q15});
  }
  updateIndexOneSix (q16) {
    this.setState({q16});
  }
  updateIndexOneSeven (q17) {
    this.setState({q17});
  }
  updateIndexOneEight (q18) {
    this.setState({q18});
  }
  updateIndexOneNine (q19) {
    this.setState({q19});
  }

  updateEventId (eventID) {
    this.setState({eventID});
  }
  // Set value for selected citizenship status
  updateStatus (value) {
    this.setState({value});
  }

  // Retreive eventID from storage
  getEventId() {
    AsyncStorage.getItem('eventID').then((value) => {
      this.setState({"eventID": value});
    });
  }

  // To store data async we pass 1 parameters (formdata)
  storeData(formData) {
    // Add items to async through pushing data to create an array.
    AsyncStorage
    .getItem('form')
    .then(favs => {
        favs = favs == null ? [] : JSON.parse(favs)
        favs.push(formData)
        return AsyncStorage.setItem('form', JSON.stringify(favs))
    });
    this.resetForm();
  }

  // POST data stored in AsynchStorage
  postAsync() {
    AsyncStorage.getItem('form').then((value) => {
      let jData = JSON.parse(value);
      let data;
      //loop through the stored data
      try {
        if(value !== null) {
          for(let i = 0; i < jData.length; i++) {
            data = {"lead":
              [
                {
                  "fname": `${jData[i].lead[0].fname}`,
                  "lname": `${jData[i].lead[0].lname}`,
                  "phone": `${jData[i].lead[0].phone}`,
                  "email": `${jData[i].lead[0].email}`,
                  "zip": `${jData[i].lead[0].zip}`,
                  "dob": `${jData[i].lead[0].dob}`,
                  "eventID": `${jData[i].lead[0].eventID}`,
                  "citizenshipStatus": `${jData[i].lead[0].citizenshipStatus}`,
                  "militaryService": `${jData[i].lead[0].militaryService}`,
                  "contactPref": `${jData[i].lead[0].contactPref}`,
                  "checked": `${jData[i].lead[0].checked}`
                }
              ]
            };
            // console.log('storeData: ', data);
            // Send the stored forms to the server
            fetch("http://18.216.137.121:8081/submitEventData", {
              method: "POST",
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(data)
            })
            .then(function(response){
              return response.json();
            })
            .then(function(data){
              console.log('dataSent:',data);
            })
            .catch(function(err){
              console.log(err);
            });
          }
        }
      } catch (error) {
        // Error retrieving data
        console.log('Apoligies sir or madame. We seem to have encountered an error retrieving your async data.');
      }
    })
    .then(res => {
      console.log('Hmm...');
    });

  }

  // Validate EMAIL
  validateEmail = (email) => {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  };

  // Validate text inputText
  validateText = (input) => {
    var re = /^[a-zA-Z ]+$/;
    return re.test(input);
  };

  // Submit form data to server
  submitForm() {
    // console.log('return id is:',this.eventIdFunc());
    // Prepare form data
    let data = {"lead":
      [
        {
          "fname": `${this.state.fname}`,
          "lname": `${this.state.lname}`,
          "phone": `${this.state.phone}`,
          "email": `${this.state.email}`,
          "zip": `${this.state.zip}`,
          "dob": `${this.state.dob}`,
          "eventID": `${this.eventIdFunc()}`,
          "citizenshipStatus": `${this.state.value}`,
          "militaryService": `${this.state.selectedIndex}`,
          "contactPref": `${this.state.selectedIndexTwo}`,
          "checked": `${this.state.checked}`
        }
      ]
    };
    // console.log('final data:',data);

    // Check if the internet connection type is true of false...save to asyncstorate and persist
    // Are we incorporating sqlite in case the is turned off?
    NetInfo.isConnected.fetch().done((isConnected) => {
      //console.log(isConnected);
      if(isConnected) {
        this.postAsync();
        AsyncStorage.removeItem('form');
        if(this.validateText(this.state.fname) && this.validateText(this.state.lname)
            && this.validateEmail(this.state.email) && this.state.eventID.length > 0
            && this.state.phone.length > 0 && this.state.zip.length > 0
            && this.state.dob.length > 0 && this.state.value.length > 0
            && this.state.checked){
          //AlertIOS.alert('Cool beans!');
          this.resetForm();
          fetch("http://18.216.137.121:8081/submitEventData", {
            method: "POST",
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
          })
          .then(function(response){
            //this.resetForm();
            return response.json();
          })
          .then(function(data){
            AlertIOS.alert('Success! This form has been sent!');
            console.log('success', data.successful);
          })
          .catch(function(err){
            this.storeData(data);
            console.log(err);
          });
        } else {
          AlertIOS.alert('Oops! Make sure you have filled out all required fields, used English characters only in the name fields, added a valid email address, and selected and event!')
        }
      } else {
        AlertIOS.alert('Oops! No connection. Your form will be sent once a connection is established');
        // call storeData function
        this.storeData(data);
      }
    });
    //console.log(data);
  }

  render() {
    const { q1 } = this.state;
    const { q2 } = this.state;
    const { q3 } = this.state;
    const { q4 } = this.state;
    const { q5 } = this.state;
    const { q6 } = this.state;
    const { q7 } = this.state;
    const { q8 } = this.state;
    const { q9 } = this.state;
    const { q10 } = this.state;
    const { q11 } = this.state;
    const { q12 } = this.state;
    const { q13 } = this.state;
    const { q14 } = this.state;
    const { q15 } = this.state;
    const { q16 } = this.state;
    const { q17 } = this.state;
    const { q18 } = this.state;
    const { q19 } = this.state;

    return (
      <View style={styles.wrapper}>
        <View style={styles.imageContainer}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Home')}
          >
            <Image style={styles.iconBack} source={require('./back.png')} />
          </TouchableOpacity>
          <Image style={styles.image} source={require('./white-ang-logo.png')} />
        </View>
        <Text style={styles.subHeader}>LET'S TAKE THE FIRST STEPS!</Text>
        <View style={styles.container}>
          <View style={styles.formContainer}>
            <View style={styles.formItemD}>
              <Text style={styles.fromLabel}>{Questions.questions[0].q1.question}</Text>
              <ButtonGroup
                textStyle={{fontSize: 12}}
                  style={styles.buttongroupTwo}
                  onPress={this.updateIndex}
                  selectedIndex={q1}
                  selectedButtonStyle={{backgroundColor: 'steelblue'}}
                  titleStyle={{fontFamily: 'Bangla Sangam MN'}}
                  selectedTextStyle={{color: 'white'}}
                  buttons={Questions.questions[0].q1.answers}
                  containerStyle={{height: 50, borderRadius: 50}}
                />
            </View>
            <View style={styles.formItemD}>
              <Text style={styles.fromLabel}>{Questions.questions[0].q2.question}</Text>
              <ButtonGroup
                textStyle={{fontSize: 12}}
                  style={styles.buttongroupTwo}
                  onPress={this.updateIndexTwo}
                  selectedIndex={q2}
                  selectedButtonStyle={{backgroundColor: 'steelblue'}}
                  titleStyle={{fontFamily: 'Bangla Sangam MN'}}
                  selectedTextStyle={{color: 'white'}}
                  buttons={Questions.questions[0].q2.answers}
                  containerStyle={{height: 50, borderRadius: 50}}
                />
            </View>
            <View style={styles.formItemD}>
              <Text style={styles.fromLabel}>{Questions.questions[0].q3.question}</Text>
              <ButtonGroup
                textStyle={{fontSize: 12}}
                  style={styles.buttongroupTwo}
                  onPress={this.updateIndexThree}
                  selectedIndex={q3}
                  selectedButtonStyle={{backgroundColor: 'steelblue'}}
                  titleStyle={{fontFamily: 'Bangla Sangam MN'}}
                  selectedTextStyle={{color: 'white'}}
                  buttons={Questions.questions[0].q3.answers}
                  containerStyle={{height: 50, borderRadius: 50}}
                />
            </View>
            <View style={styles.formItemD}>
              <Text style={styles.fromLabel}>{Questions.questions[0].q4.question}</Text>
              <ButtonGroup
                textStyle={{fontSize: 12}}
                  style={styles.buttongroupTwo}
                  onPress={this.updateIndexFour}
                  selectedIndex={q4}
                  selectedButtonStyle={{backgroundColor: 'steelblue'}}
                  titleStyle={{fontFamily: 'Bangla Sangam MN'}}
                  selectedTextStyle={{color: 'white'}}
                  buttons={Questions.questions[0].q4.answers}
                  containerStyle={{height: 50, borderRadius: 50}}
                  textStyle={{fontSize: 12}}
                />
            </View>
            <View style={styles.formItemD}>
              <Text style={styles.fromLabel}>{Questions.questions[0].q5.question}</Text>
              <ButtonGroup
                textStyle={{fontSize: 12}}
                  style={styles.buttongroupTwo}
                  onPress={this.updateIndexFive}
                  selectedIndex={q5}
                  selectedButtonStyle={{backgroundColor: 'steelblue'}}
                  titleStyle={{fontFamily: 'Bangla Sangam MN'}}
                  selectedTextStyle={{color: 'white'}}
                  buttons={Questions.questions[0].q5.answers}
                  containerStyle={{height: 50, borderRadius: 50}}
                />
            </View>
            <View style={styles.formItemD}>
              <Text style={styles.fromLabel}>{Questions.questions[0].q6.question}</Text>
              <ButtonGroup
                textStyle={{fontSize: 12}}
                style={styles.buttongroupTwo}
                onPress={this.updateIndexSix}
                selectedIndex={q6}
                selectedButtonStyle={{backgroundColor: 'steelblue'}}
                titleStyle={{fontFamily: 'Bangla Sangam MN'}}
                selectedTextStyle={{color: 'white'}}
                buttons={Questions.questions[0].q6.answers}
                containerStyle={{height: 50, borderRadius: 50}}
              />
            </View>
          </View>
        </View>
        <View style={styles.submitContainer}>
          <Button
            title="NEXT"
            color="white"
            backgroundColor='steelblue'
            style={styles.submit}
            textStyle={{fontFamily: 'Bangla Sangam MN'}}
            onPress={() => {
              this.props.navigation.navigate('InputTwo', {
                eventID: this.state.value,
                q1: this.state.q1,
                q2: this.state.q2,
                q3: this.state.q3,
                q4: this.state.q4,
                q5: this.state.q5,
                q6: this.state.q6,
                q7a: this.state.q7a,
                q7b: this.state.q7b,
                q7c: this.state.q7c,
                q7d: this.state.q7d,
                q8a: this.state.q8a,
                q8b: this.state.q8b,
                q8c: this.state.q8c,
                q8d: this.state.q8d,
                q9a: this.state.q9a,
                q9b: this.state.q9b,
                q9c: this.state.q9c,
                q9d: this.state.q9d,
                q10: this.state.q10,
                q11: this.state.q11,
                q12: this.state.q12,
                q13: this.state.q13,
                q14: this.state.q14,
                q15: this.state.q15,
                q16a: this.state.q16a,
                q16b: this.state.q16b,
                q16c: this.state.q16c,
                q16d: this.state.q16d,
                q17a: this.state.q17a,
                q17b: this.state.q17b,
                q17c: this.state.q17c,
                q17d: this.state.q17d,
                q18a: this.state.q18a,
                q18b: this.state.q18b,
                q18c: this.state.q18c,
                q18d: this.state.q18d,
                q19: this.state.q19
              });
            }}
          />
        </View>
        <View style={styles.footerContainer}>
          <Text style={styles.footerText}>PRIVACY POLICY | TERMS OF USE</Text>
        </View>
      </View>
    );
  }
}

class InputTwo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      eventID: '',
      q1: '',
      q2: '',
      q3: '',
      q4: '',
      q5: '',
      q6: '',
      q7a: '',
      q7b: '',
      q7c: '',
      q7d: '',
      q8a: '',
      q8b: '',
      q8c: '',
      q8d: '',
      q9a: '',
      q9b: '',
      q9c: '',
      q9d: '',
      q10: '',
      q11: '',
      q12: '',
      q13: '',
      q14: '',
      q15: '',
      q16a: '',
      q16b: '',
      q16c: '',
      q16d: '',
      q17a: '',
      q17b: '',
      q17c: '',
      q17d: '',
      q18a: '',
      q18b: '',
      q18c: '',
      q18d: '',
      q19: ''
    };

    this.updateIndex = this.updateIndex.bind(this);
    this.updateIndexTwo = this.updateIndexTwo.bind(this);
    this.updateIndexThree = this.updateIndexThree.bind(this);
    this.updateIndexFour = this.updateIndexFour.bind(this);
    this.updateIndexFive = this.updateIndexFive.bind(this);
    this.updateIndexSix = this.updateIndexSix.bind(this);

    this.updateIndexSevenA = this.updateIndexSevenA.bind(this);
    this.updateIndexSevenB = this.updateIndexSevenB.bind(this);
    this.updateIndexSevenC = this.updateIndexSevenC.bind(this);
    this.updateIndexSevenD = this.updateIndexSevenD.bind(this);

    this.updateIndexEightA = this.updateIndexEightA.bind(this);
    this.updateIndexEightB = this.updateIndexEightB.bind(this);
    this.updateIndexEightC = this.updateIndexEightC.bind(this);
    this.updateIndexEightD = this.updateIndexEightD.bind(this);

    this.updateIndexNineA = this.updateIndexNineA.bind(this);
    this.updateIndexNineB = this.updateIndexNineB.bind(this);
    this.updateIndexNineC = this.updateIndexNineC.bind(this);
    this.updateIndexNineD = this.updateIndexNineD.bind(this);

    this.updateIndexTen = this.updateIndexTen.bind(this);
    this.updateIndexEleven = this.updateIndexEleven.bind(this);
    this.updateIndexTwelve = this.updateIndexTwelve.bind(this);
    this.updateIndexOneThree = this.updateIndexOneThree.bind(this);
    this.updateIndexOneFour = this.updateIndexOneFour.bind(this);
    this.updateIndexOneFive = this.updateIndexOneFive.bind(this);
    this.updateIndexOneSix = this.updateIndexOneSix.bind(this);
    this.updateIndexOneSeven = this.updateIndexOneSeven.bind(this);
    this.updateIndexOneEight = this.updateIndexOneEight.bind(this);
    this.updateIndexOneNine= this.updateIndexOneNine.bind(this);

    this.eventIdFunc = this.eventIdFunc.bind(this);
    this.updateStatus = this.updateStatus.bind(this);
    this.updateEventId = this.updateEventId.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  componentWillMount() {
    this.getEventId();
  }
  componentDidMount(){
    const { navigation } = this.props;
    const ques1 = navigation.getParam('q1', 'NA');
    this.setState({q1 : `${ques1}`});
    const ques2 = navigation.getParam('q2', 'NA');
    this.setState({q2 : `${ques2}`});
    const ques3 = navigation.getParam('q3', 'NA');
    this.setState({q3 : `${ques3}`});
    const ques4 = navigation.getParam('q4', 'NA');
    this.setState({q4 : `${ques4}`});
    const ques5 = navigation.getParam('q5', 'NA');
    this.setState({q5 : `${ques5}`});

    const ques6 = navigation.getParam('q6', 'NA');
    this.setState({q6 : `${ques6}`});
    const ques7a = navigation.getParam('q7a', 'NA');
    this.setState({q7a : `${ques7a}`});
    const ques7b = navigation.getParam('q7b', 'NA');
    this.setState({q7b : `${ques7b}`});
    const ques7c = navigation.getParam('q7c', 'NA');
    this.setState({q7c : `${ques7c}`});
    const ques7d = navigation.getParam('q7d', 'NA');
    this.setState({q7d : `${ques7d}`});

    const ques8a = navigation.getParam('q8a', 'NA');
    this.setState({q8a : `${ques8a}`});
    const ques8b = navigation.getParam('q8b', 'NA');
    this.setState({q8b : `${ques8b}`});
    const ques8c = navigation.getParam('q8c', 'NA');
    this.setState({q8c : `${ques8c}`});
    const ques8d = navigation.getParam('q8d', 'NA');
    this.setState({q8d : `${ques8d}`});

    const ques9a = navigation.getParam('q9a', 'NA');
    this.setState({q9a : `${ques9a}`});
    const ques9b = navigation.getParam('q9b', 'NA');
    this.setState({q9b : `${ques9b}`});
    const ques9c = navigation.getParam('q9c', 'NA');
    this.setState({q9c : `${ques9c}`});
    const ques9d = navigation.getParam('q9d', 'NA');
    this.setState({q9d : `${ques9d}`});

    const ques10 = navigation.getParam('q10', 'NA');
    this.setState({q10 : `${ques10}`});
    const ques11 = navigation.getParam('q11', 'NA');
    this.setState({q11 : `${ques11}`});
    const ques12 = navigation.getParam('q12', 'NA');
    this.setState({q12 : `${ques12}`});
    const ques13 = navigation.getParam('q13', 'NA');
    this.setState({q13 : `${ques13}`});
    const ques14 = navigation.getParam('q14', 'NA');
    this.setState({q14 : `${ques14}`});

    const ques15 = navigation.getParam('q15', 'NA');
    this.setState({q15 : `${ques15}`});
    const ques16a = navigation.getParam('q16a', 'NA');
    this.setState({q16a : `${ques16a}`});
    const ques16b = navigation.getParam('q16b', 'NA');
    this.setState({q16b : `${ques16b}`});
    const ques16c = navigation.getParam('q16c', 'NA');
    this.setState({q16c : `${ques16c}`});
    const ques16d = navigation.getParam('q16d', 'NA');
    this.setState({q16d : `${ques16d}`});

    const ques17a = navigation.getParam('q17a', 'NA');
    this.setState({q17a : `${ques17a}`});
    const ques17b = navigation.getParam('q17b', 'NA');
    this.setState({q17b : `${ques17b}`});
    const ques17c = navigation.getParam('q17c', 'NA');
    this.setState({q17c : `${ques17c}`});
    const ques17d = navigation.getParam('q17d', 'NA');
    this.setState({q17d : `${ques17d}`});

    const ques18a = navigation.getParam('q18a', 'NA');
    this.setState({q18a : `${ques18a}`});
    const ques18b = navigation.getParam('q18b', 'NA');
    this.setState({q18b : `${ques18b}`});
    const ques18c = navigation.getParam('q18c', 'NA');
    this.setState({q18c : `${ques18c}`});
    const ques18d = navigation.getParam('q18d', 'NA');
    this.setState({q18d : `${ques18d}`});

    const ques19 = navigation.getParam('q19', 'NA');
    this.setState({q19 : `${ques19}`});

    const event = navigation.getParam('eventID', 'NA');
    this.setState({eventID: `${event}`});
  }

  eventIdFunc(){
    let wEvent = Eventdata.events;
    // console.log(wEvent);
    let valueIndex;
    // console.log('event id is:', this.state.eventID);
    for(var i=0; i<wEvent.length; i++) {
      if(this.state.eventID === wEvent[i].value) {
        valueIndex = wEvent[i].A;
        //console.log('event id number:', valueIndex);
      }
    }
    // this.setState({eventIDnum: wEvent[valueIndex].A});
    // console.log('event number is', valueIndex);
    return valueIndex;
  }

  // Function for handling date picking
  _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });
  _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });

  _handleDatePicked = (date) => {
    let dateString = moment(date).format('MM-DD-YYYY');
    this.setState({chosenDate: dateString});
    this.setState({dob: dateString});
    this._hideDateTimePicker();
  };

  // Function for refreshing form
  resetForm = () => {
    const resetAction = StackActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName: 'Input' })],
    });
    this.props.navigation.dispatch(resetAction);
  }

  // Index is for knowing whether yes or no is selected...0 or 1 respectively
  updateIndex (q1) {
    this.setState({q1});
  }
  updateIndexTwo (q2) {
    this.setState({q2});
  }
  updateIndexThree (q3) {
    this.setState({q3});
  }
  updateIndexFour (q4) {
    this.setState({q4});
  }
  updateIndexFive (q5) {
    this.setState({q5});
  }
  updateIndexSix (q6) {
    this.setState({q6});
  }
  updateIndexSevenA (q7a) {
    this.setState({q7a});
  }
  updateIndexSevenB (q7b) {
    this.setState({q7b});
  }
  updateIndexSevenC (q7c) {
    this.setState({q7c});
  }
  updateIndexSevenD (q7d) {
    this.setState({q7d});
  }
  updateIndexEightA (q8a) {
    this.setState({q8a});
  }
  updateIndexEightB (q8b) {
    this.setState({q8b});
  }
  updateIndexEightC (q8c) {
    this.setState({q8c});
  }
  updateIndexEightD (q8d) {
    this.setState({q8d});
  }
  updateIndexNineA (q9a) {
    this.setState({q9a});
  }
  updateIndexNineB (q9b) {
    this.setState({q9b});
  }
  updateIndexNineC (q9c) {
    this.setState({q9c});
  }
  updateIndexNineD (q9d) {
    this.setState({q9d});
  }
  updateIndexTen (q10) {
    this.setState({q10});
  }
  updateIndexEleven (q11) {
    this.setState({q11});
  }
  updateIndexTwelve (q12) {
    this.setState({q12});
  }
  updateIndexOneThree (q13) {
    this.setState({q13});
  }
  updateIndexOneFour (q14) {
    this.setState({q14});
  }
  updateIndexOneFive (q15) {
    this.setState({q15});
  }
  updateIndexOneSix (q16) {
    this.setState({q16});
  }
  updateIndexOneSeven (q17) {
    this.setState({q17});
  }
  updateIndexOneEight (q18) {
    this.setState({q18});
  }
  updateIndexOneNine (q19) {
    this.setState({q19});
  }

  updateEventId (eventID) {
    this.setState({eventID});
  }
  // Set value for selected citizenship status
  updateStatus (value) {
    this.setState({value});
  }

  // Retreive eventID from storage
  getEventId() {
    AsyncStorage.getItem('eventID').then((value) => {
      this.setState({"eventID": value});
    });
  }

  // To store data async we pass 1 parameters (formdata)
  storeData(formData) {
    // Add items to async through pushing data to create an array.
    AsyncStorage
    .getItem('form')
    .then(favs => {
        favs = favs == null ? [] : JSON.parse(favs)
        favs.push(formData)
        return AsyncStorage.setItem('form', JSON.stringify(favs))
    });
    this.resetForm();
  }

  // POST data stored in AsynchStorage
  postAsync() {
    AsyncStorage.getItem('form').then((value) => {
      let jData = JSON.parse(value);
      let data;
      //loop through the stored data
      try {
        if(value !== null) {
          for(let i = 0; i < jData.length; i++) {
            data = {"lead":
              [
                {
                  "fname": `${jData[i].lead[0].fname}`,
                  "lname": `${jData[i].lead[0].lname}`,
                  "phone": `${jData[i].lead[0].phone}`,
                  "email": `${jData[i].lead[0].email}`,
                  "zip": `${jData[i].lead[0].zip}`,
                  "dob": `${jData[i].lead[0].dob}`,
                  "eventID": `${jData[i].lead[0].eventID}`,
                  "citizenshipStatus": `${jData[i].lead[0].citizenshipStatus}`,
                  "militaryService": `${jData[i].lead[0].militaryService}`,
                  "contactPref": `${jData[i].lead[0].contactPref}`,
                  "checked": `${jData[i].lead[0].checked}`
                }
              ]
            };
            // console.log('storeData: ', data);
            // Send the stored forms to the server
            fetch("http://18.216.137.121:8081/submitEventData", {
              method: "POST",
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(data)
            })
            .then(function(response){
              return response.json();
            })
            .then(function(data){
              console.log('dataSent:',data);
            })
            .catch(function(err){
              console.log(err);
            });
          }
        }
      } catch (error) {
        // Error retrieving data
        console.log('Apoligies sir or madame. We seem to have encountered an error retrieving your async data.');
      }
    })
    .then(res => {
      console.log('Hmm...');
    });

  }

  // Validate EMAIL
  validateEmail = (email) => {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  };

  // Validate text inputText
  validateText = (input) => {
    var re = /^[a-zA-Z ]+$/;
    return re.test(input);
  };

  // Submit form data to server
  submitForm() {
    // console.log('return id is:',this.eventIdFunc());
    // Prepare form data
    let data = {"lead":
      [
        {
          "fname": `${this.state.fname}`,
          "lname": `${this.state.lname}`,
          "phone": `${this.state.phone}`,
          "email": `${this.state.email}`,
          "zip": `${this.state.zip}`,
          "dob": `${this.state.dob}`,
          "eventID": `${this.eventIdFunc()}`,
          "citizenshipStatus": `${this.state.value}`,
          "militaryService": `${this.state.selectedIndex}`,
          "contactPref": `${this.state.selectedIndexTwo}`,
          "checked": `${this.state.checked}`
        }
      ]
    };
    // console.log('final data:',data);

    // Check if the internet connection type is true of false...save to asyncstorate and persist
    // Are we incorporating sqlite in case the is turned off?
    NetInfo.isConnected.fetch().done((isConnected) => {
      //console.log(isConnected);
      if(isConnected) {
        this.postAsync();
        AsyncStorage.removeItem('form');
        if(this.validateText(this.state.fname) && this.validateText(this.state.lname)
            && this.validateEmail(this.state.email) && this.state.eventID.length > 0
            && this.state.phone.length > 0 && this.state.zip.length > 0
            && this.state.dob.length > 0 && this.state.value.length > 0
            && this.state.checked){
          //AlertIOS.alert('Cool beans!');
          this.resetForm();
          fetch("http://18.216.137.121:8081/submitEventData", {
            method: "POST",
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
          })
          .then(function(response){
            //this.resetForm();
            return response.json();
          })
          .then(function(data){
            AlertIOS.alert('Success! This form has been sent!');
            console.log('success', data.successful);
          })
          .catch(function(err){
            this.storeData(data);
            console.log(err);
          });
        } else {
          AlertIOS.alert('Oops! Make sure you have filled out all required fields, used English characters only in the name fields, added a valid email address, and selected and event!')
        }
      } else {
        AlertIOS.alert('Oops! No connection. Your form will be sent once a connection is established');
        // call storeData function
        this.storeData(data);
      }
    });
    //console.log(data);
  }

  render() {
    const { q1 } = this.state;
    const { q2 } = this.state;
    const { q3 } = this.state;
    const { q4 } = this.state;
    const { q5 } = this.state;
    const { q6 } = this.state;
    const { q7a } = this.state;
    const { q7b } = this.state;
    const { q7c } = this.state;
    const { q7d } = this.state;
    const { q8a } = this.state;
    const { q8b } = this.state;
    const { q8c } = this.state;
    const { q8d } = this.state;
    const { q9a } = this.state;
    const { q9b } = this.state;
    const { q9c } = this.state;
    const { q9d } = this.state;
    const { q10 } = this.state;
    const { q11 } = this.state;
    const { q12 } = this.state;
    const { q13 } = this.state;
    const { q14 } = this.state;
    const { q15 } = this.state;
    const { q16 } = this.state;
    const { q17 } = this.state;
    const { q18 } = this.state;
    const { q19 } = this.state;

    return (
      <View style={styles.wrapper}>
        <View style={styles.imageContainer}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Input')}
          >
            <Image style={styles.iconBack} source={require('./back.png')} />
          </TouchableOpacity>
          <Image style={styles.image} source={require('./white-ang-logo.png')} />
        </View>
        <Text style={styles.subHeader}>LET'S TAKE THE FIRST STEPS!</Text>
        <View style={styles.container}>
          <View style={styles.formContainer}>
            <View style={styles.formItemD}>
              <Text style={styles.fromLabel}>{Questions.questions[0].q7.question}</Text>
              <View>
                <Text>{Questions.questions[0].q7.answers.a1.questions}</Text>
                <ButtonGroup
                  textStyle={{fontSize: 12}}
                  style={styles.buttongroupTwo}
                  onPress={this.updateIndexSevenA}
                  selectedIndex={q7a}
                  selectedButtonStyle={{backgroundColor: 'steelblue'}}
                  titleStyle={{fontFamily: 'Bangla Sangam MN'}}
                  selectedTextStyle={{color: 'white'}}
                  buttons={Questions.questions[0].q7.answers.a1.answers}
                  containerStyle={{height: 50, borderRadius: 50}}
                />
              </View>
              <View>
                <Text>{Questions.questions[0].q7.answers.a2.questions}</Text>
                <ButtonGroup
                  textStyle={{fontSize: 12}}
                  style={styles.buttongroupTwo}
                  onPress={this.updateIndexSevenB}
                  selectedIndex={q7b}
                  selectedButtonStyle={{backgroundColor: 'steelblue'}}
                  titleStyle={{fontFamily: 'Bangla Sangam MN'}}
                  selectedTextStyle={{color: 'white'}}
                  buttons={Questions.questions[0].q7.answers.a2.answers}
                  containerStyle={{height: 50, borderRadius: 50}}
                />
              </View>
              <View>
                <Text>{Questions.questions[0].q7.answers.a3.questions}</Text>
                <ButtonGroup
                  textStyle={{fontSize: 12}}
                  style={styles.buttongroupTwo}
                  onPress={this.updateIndexSevenC}
                  selectedIndex={q7c}
                  selectedButtonStyle={{backgroundColor: 'steelblue'}}
                  titleStyle={{fontFamily: 'Bangla Sangam MN'}}
                  selectedTextStyle={{color: 'white'}}
                  buttons={Questions.questions[0].q7.answers.a3.answers}
                  containerStyle={{height: 50, borderRadius: 50}}
                />
              </View>
              <View>
                <Text>{Questions.questions[0].q7.answers.a4.questions}</Text>
                <ButtonGroup
                  textStyle={{fontSize: 12}}
                  style={styles.buttongroupTwo}
                  onPress={this.updateIndexSevenD}
                  selectedIndex={q7d}
                  selectedButtonStyle={{backgroundColor: 'steelblue'}}
                  titleStyle={{fontFamily: 'Bangla Sangam MN'}}
                  selectedTextStyle={{color: 'white'}}
                  buttons={Questions.questions[0].q7.answers.a4.answers}
                  containerStyle={{height: 50, borderRadius: 50}}
                />
              </View>
            </View>
            <View style={styles.formItemD}>
              <Text style={styles.fromLabel}>{Questions.questions[0].q8.question}</Text>
              <View>
                <Text>{Questions.questions[0].q8.answers.a1.questions}</Text>
                <ButtonGroup
                  textStyle={{fontSize: 12}}
                  style={styles.buttongroupTwo}
                  onPress={this.updateIndexEightA}
                  selectedIndex={q8a}
                  selectedButtonStyle={{backgroundColor: 'steelblue'}}
                  titleStyle={{fontFamily: 'Bangla Sangam MN'}}
                  selectedTextStyle={{color: 'white'}}
                  buttons={Questions.questions[0].q8.answers.a1.answers}
                  containerStyle={{height: 50, borderRadius: 50}}
                />
              </View>
              <View>
                <Text>{Questions.questions[0].q8.answers.a2.questions}</Text>
                <ButtonGroup
                  textStyle={{fontSize: 12}}
                  style={styles.buttongroupTwo}
                  onPress={this.updateIndexEightB}
                  selectedIndex={q8b}
                  selectedButtonStyle={{backgroundColor: 'steelblue'}}
                  titleStyle={{fontFamily: 'Bangla Sangam MN'}}
                  selectedTextStyle={{color: 'white'}}
                  buttons={Questions.questions[0].q8.answers.a2.answers}
                  containerStyle={{height: 50, borderRadius: 50}}
                />
              </View>
              <View>
                <Text>{Questions.questions[0].q8.answers.a3.questions}</Text>
                <ButtonGroup
                  textStyle={{fontSize: 12}}
                  style={styles.buttongroupTwo}
                  onPress={this.updateIndexEightC}
                  selectedIndex={q8c}
                  selectedButtonStyle={{backgroundColor: 'steelblue'}}
                  titleStyle={{fontFamily: 'Bangla Sangam MN'}}
                  selectedTextStyle={{color: 'white'}}
                  buttons={Questions.questions[0].q8.answers.a3.answers}
                  containerStyle={{height: 50, borderRadius: 50}}
                />
              </View>
              <View>
                <Text>{Questions.questions[0].q8.answers.a4.questions}</Text>
                <ButtonGroup
                  textStyle={{fontSize: 12}}
                  style={styles.buttongroupTwo}
                  onPress={this.updateIndexEightD}
                  selectedIndex={q8d}
                  selectedButtonStyle={{backgroundColor: 'steelblue'}}
                  titleStyle={{fontFamily: 'Bangla Sangam MN'}}
                  selectedTextStyle={{color: 'white'}}
                  buttons={Questions.questions[0].q8.answers.a4.answers}
                  containerStyle={{height: 50, borderRadius: 50}}
                />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.submitContainer}>
          <Button
            title="NEXT"
            color="white"
            backgroundColor='steelblue'
            style={styles.submit}
            textStyle={{fontFamily: 'Bangla Sangam MN'}}
            onPress={() => {
              this.props.navigation.navigate('InputThree', {
                eventID: this.state.value,
                q1: this.state.q1,
                q2: this.state.q2,
                q3: this.state.q3,
                q4: this.state.q4,
                q5: this.state.q5,
                q6: this.state.q6,
                q7a: this.state.q7a,
                q7b: this.state.q7b,
                q7c: this.state.q7c,
                q7d: this.state.q7d,
                q8a: this.state.q8a,
                q8b: this.state.q8b,
                q8c: this.state.q8c,
                q8d: this.state.q8d,
                q9a: this.state.q9a,
                q9b: this.state.q9b,
                q9c: this.state.q9c,
                q9d: this.state.q9d,
                q10: this.state.q10,
                q11: this.state.q11,
                q12: this.state.q12,
                q13: this.state.q13,
                q14: this.state.q14,
                q15: this.state.q15,
                q16a: this.state.q16a,
                q16b: this.state.q16b,
                q16c: this.state.q16c,
                q16d: this.state.q16d,
                q17a: this.state.q17a,
                q17b: this.state.q17b,
                q17c: this.state.q17c,
                q17d: this.state.q17d,
                q18a: this.state.q18a,
                q18b: this.state.q18b,
                q18c: this.state.q18c,
                q18d: this.state.q18d,
                q19: this.state.q19
              });
            }}
          />
        </View>
        <View style={styles.footerContainer}>
          <Text style={styles.footerText}>PRIVACY POLICY | TERMS OF USE</Text>
        </View>
      </View>
    );
  }
}

class InputThree extends Component {
  constructor(props) {
    super(props);
    this.state = {
      eventID: '',
      q1: '',
      q2: '',
      q3: '',
      q4: '',
      q5: '',
      q6: '',
      q7a: '',
      q7b: '',
      q7c: '',
      q7d: '',
      q8a: '',
      q8b: '',
      q8c: '',
      q8d: '',
      q9a: '',
      q9b: '',
      q9c: '',
      q9d: '',
      q10: '',
      q11: '',
      q12: '',
      q13: '',
      q14: '',
      q15: '',
      q16a: '',
      q16b: '',
      q16c: '',
      q16d: '',
      q17a: '',
      q17b: '',
      q17c: '',
      q17d: '',
      q18a: '',
      q18b: '',
      q18c: '',
      q18d: '',
      q19: ''
    };

    this.updateIndex = this.updateIndex.bind(this);
    this.updateIndexTwo = this.updateIndexTwo.bind(this);
    this.updateIndexThree = this.updateIndexThree.bind(this);
    this.updateIndexFour = this.updateIndexFour.bind(this);
    this.updateIndexFive = this.updateIndexFive.bind(this);
    this.updateIndexSix = this.updateIndexSix.bind(this);

    this.updateIndexSevenA = this.updateIndexSevenA.bind(this);
    this.updateIndexSevenB = this.updateIndexSevenB.bind(this);
    this.updateIndexSevenC = this.updateIndexSevenC.bind(this);
    this.updateIndexSevenD = this.updateIndexSevenD.bind(this);

    this.updateIndexEightA = this.updateIndexEightA.bind(this);
    this.updateIndexEightB = this.updateIndexEightB.bind(this);
    this.updateIndexEightC = this.updateIndexEightC.bind(this);
    this.updateIndexEightD = this.updateIndexEightD.bind(this);

    this.updateIndexNineA = this.updateIndexNineA.bind(this);
    this.updateIndexNineB = this.updateIndexNineB.bind(this);
    this.updateIndexNineC = this.updateIndexNineC.bind(this);
    this.updateIndexNineD = this.updateIndexNineD.bind(this);

    this.updateIndexTen = this.updateIndexTen.bind(this);
    this.updateIndexEleven = this.updateIndexEleven.bind(this);
    this.updateIndexTwelve = this.updateIndexTwelve.bind(this);
    this.updateIndexOneThree = this.updateIndexOneThree.bind(this);
    this.updateIndexOneFour = this.updateIndexOneFour.bind(this);
    this.updateIndexOneFive = this.updateIndexOneFive.bind(this);
    this.updateIndexOneSix = this.updateIndexOneSix.bind(this);
    this.updateIndexOneSeven = this.updateIndexOneSeven.bind(this);
    this.updateIndexOneEight = this.updateIndexOneEight.bind(this);
    this.updateIndexOneNine= this.updateIndexOneNine.bind(this);

    this.eventIdFunc = this.eventIdFunc.bind(this);
    this.updateStatus = this.updateStatus.bind(this);
    this.updateEventId = this.updateEventId.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  componentWillMount() {
    this.getEventId();
  }
  componentDidMount(){
    const { navigation } = this.props;
    const ques1 = navigation.getParam('q1', 'NA');
    this.setState({q1 : `${ques1}`});
    const ques2 = navigation.getParam('q2', 'NA');
    this.setState({q2 : `${ques2}`});
    const ques3 = navigation.getParam('q3', 'NA');
    this.setState({q3 : `${ques3}`});
    const ques4 = navigation.getParam('q4', 'NA');
    this.setState({q4 : `${ques4}`});
    const ques5 = navigation.getParam('q5', 'NA');
    this.setState({q5 : `${ques5}`});

    const ques6 = navigation.getParam('q6', 'NA');
    this.setState({q6 : `${ques6}`});
    const ques7a = navigation.getParam('q7a', 'NA');
    this.setState({q7a : `${ques7a}`});
    const ques7b = navigation.getParam('q7b', 'NA');
    this.setState({q7b : `${ques7b}`});
    const ques7c = navigation.getParam('q7c', 'NA');
    this.setState({q7c : `${ques7c}`});
    const ques7d = navigation.getParam('q7d', 'NA');
    this.setState({q7d : `${ques7d}`});

    const ques8a = navigation.getParam('q8a', 'NA');
    this.setState({q8a : `${ques8a}`});
    const ques8b = navigation.getParam('q8b', 'NA');
    this.setState({q8b : `${ques8b}`});
    const ques8c = navigation.getParam('q8c', 'NA');
    this.setState({q8c : `${ques8c}`});
    const ques8d = navigation.getParam('q8d', 'NA');
    this.setState({q8d : `${ques8d}`});

    const ques9a = navigation.getParam('q9a', 'NA');
    this.setState({q9a : `${ques9a}`});
    const ques9b = navigation.getParam('q9b', 'NA');
    this.setState({q9b : `${ques9b}`});
    const ques9c = navigation.getParam('q9c', 'NA');
    this.setState({q9c : `${ques9c}`});
    const ques9d = navigation.getParam('q9d', 'NA');
    this.setState({q9d : `${ques9d}`});

    const ques10 = navigation.getParam('q10', 'NA');
    this.setState({q10 : `${ques10}`});
    const ques11 = navigation.getParam('q11', 'NA');
    this.setState({q11 : `${ques11}`});
    const ques12 = navigation.getParam('q12', 'NA');
    this.setState({q12 : `${ques12}`});
    const ques13 = navigation.getParam('q13', 'NA');
    this.setState({q13 : `${ques13}`});
    const ques14 = navigation.getParam('q14', 'NA');
    this.setState({q14 : `${ques14}`});

    const ques15 = navigation.getParam('q15', 'NA');
    this.setState({q15 : `${ques15}`});
    const ques16a = navigation.getParam('q16a', 'NA');
    this.setState({q16a : `${ques16a}`});
    const ques16b = navigation.getParam('q16b', 'NA');
    this.setState({q16b : `${ques16b}`});
    const ques16c = navigation.getParam('q16c', 'NA');
    this.setState({q16c : `${ques16c}`});
    const ques16d = navigation.getParam('q16d', 'NA');
    this.setState({q16d : `${ques16d}`});

    const ques17a = navigation.getParam('q17a', 'NA');
    this.setState({q17a : `${ques17a}`});
    const ques17b = navigation.getParam('q17b', 'NA');
    this.setState({q17b : `${ques17b}`});
    const ques17c = navigation.getParam('q17c', 'NA');
    this.setState({q17c : `${ques17c}`});
    const ques17d = navigation.getParam('q17d', 'NA');
    this.setState({q17d : `${ques17d}`});

    const ques18a = navigation.getParam('q18a', 'NA');
    this.setState({q18a : `${ques18a}`});
    const ques18b = navigation.getParam('q18b', 'NA');
    this.setState({q18b : `${ques18b}`});
    const ques18c = navigation.getParam('q18c', 'NA');
    this.setState({q18c : `${ques18c}`});
    const ques18d = navigation.getParam('q18d', 'NA');
    this.setState({q18d : `${ques18d}`});

    const ques19 = navigation.getParam('q19', 'NA');
    this.setState({q19 : `${ques19}`});

    const event = navigation.getParam('eventID', 'NA');
    this.setState({eventID: `${event}`});
  }

  eventIdFunc(){
    let wEvent = Eventdata.events;
    // console.log(wEvent);
    let valueIndex;
    // console.log('event id is:', this.state.eventID);
    for(var i=0; i<wEvent.length; i++) {
      if(this.state.eventID === wEvent[i].value) {
        valueIndex = wEvent[i].A;
        //console.log('event id number:', valueIndex);
      }
    }
    // this.setState({eventIDnum: wEvent[valueIndex].A});
    // console.log('event number is', valueIndex);
    return valueIndex;
  }

  // Function for handling date picking
  _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });
  _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });

  _handleDatePicked = (date) => {
    let dateString = moment(date).format('MM-DD-YYYY');
    this.setState({chosenDate: dateString});
    this.setState({dob: dateString});
    this._hideDateTimePicker();
  };

  // Function for refreshing form
  resetForm = () => {
    const resetAction = StackActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName: 'Input' })],
    });
    this.props.navigation.dispatch(resetAction);
  }

  // Index is for knowing whether yes or no is selected...0 or 1 respectively
  updateIndex (q1) {
    this.setState({q1});
  }
  updateIndexTwo (q2) {
    this.setState({q2});
  }
  updateIndexThree (q3) {
    this.setState({q3});
  }
  updateIndexFour (q4) {
    this.setState({q4});
  }
  updateIndexFive (q5) {
    this.setState({q5});
  }
  updateIndexSix (q6) {
    this.setState({q6});
  }
  updateIndexSevenA (q7a) {
    this.setState({q7a});
  }
  updateIndexSevenB (q7b) {
    this.setState({q7b});
  }
  updateIndexSevenC (q7c) {
    this.setState({q7c});
  }
  updateIndexSevenD (q7d) {
    this.setState({q7d});
  }
  updateIndexEightA (q8a) {
    this.setState({q8a});
  }
  updateIndexEightB (q8b) {
    this.setState({q8b});
  }
  updateIndexEightC (q8c) {
    this.setState({q8c});
  }
  updateIndexEightD (q8d) {
    this.setState({q8d});
  }
  updateIndexNineA (q9a) {
    this.setState({q9a});
  }
  updateIndexNineB (q9b) {
    this.setState({q9b});
  }
  updateIndexNineC (q9c) {
    this.setState({q9c});
  }
  updateIndexNineD (q9d) {
    this.setState({q9d});
  }
  updateIndexTen (q10) {
    this.setState({q10});
  }
  updateIndexEleven (q11) {
    this.setState({q11});
  }
  updateIndexTwelve (q12) {
    this.setState({q12});
  }
  updateIndexOneThree (q13) {
    this.setState({q13});
  }
  updateIndexOneFour (q14) {
    this.setState({q14});
  }
  updateIndexOneFive (q15) {
    this.setState({q15});
  }
  updateIndexOneSix (q16) {
    this.setState({q16});
  }
  updateIndexOneSeven (q17) {
    this.setState({q17});
  }
  updateIndexOneEight (q18) {
    this.setState({q18});
  }
  updateIndexOneNine (q19) {
    this.setState({q19});
  }

  updateEventId (eventID) {
    this.setState({eventID});
  }
  // Set value for selected citizenship status
  updateStatus (value) {
    this.setState({value});
  }

  // Retreive eventID from storage
  getEventId() {
    AsyncStorage.getItem('eventID').then((value) => {
      this.setState({"eventID": value});
    });
  }

  // To store data async we pass 1 parameters (formdata)
  storeData(formData) {
    // Add items to async through pushing data to create an array.
    AsyncStorage
    .getItem('form')
    .then(favs => {
        favs = favs == null ? [] : JSON.parse(favs)
        favs.push(formData)
        return AsyncStorage.setItem('form', JSON.stringify(favs))
    });
    this.resetForm();
  }

  // POST data stored in AsynchStorage
  postAsync() {
    AsyncStorage.getItem('form').then((value) => {
      let jData = JSON.parse(value);
      let data;
      //loop through the stored data
      try {
        if(value !== null) {
          for(let i = 0; i < jData.length; i++) {
            data = {"lead":
              [
                {
                  "fname": `${jData[i].lead[0].fname}`,
                  "lname": `${jData[i].lead[0].lname}`,
                  "phone": `${jData[i].lead[0].phone}`,
                  "email": `${jData[i].lead[0].email}`,
                  "zip": `${jData[i].lead[0].zip}`,
                  "dob": `${jData[i].lead[0].dob}`,
                  "eventID": `${jData[i].lead[0].eventID}`,
                  "citizenshipStatus": `${jData[i].lead[0].citizenshipStatus}`,
                  "militaryService": `${jData[i].lead[0].militaryService}`,
                  "contactPref": `${jData[i].lead[0].contactPref}`,
                  "checked": `${jData[i].lead[0].checked}`
                }
              ]
            };
            // console.log('storeData: ', data);
            // Send the stored forms to the server
            fetch("http://18.216.137.121:8081/submitEventData", {
              method: "POST",
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(data)
            })
            .then(function(response){
              return response.json();
            })
            .then(function(data){
              console.log('dataSent:',data);
            })
            .catch(function(err){
              console.log(err);
            });
          }
        }
      } catch (error) {
        // Error retrieving data
        console.log('Apoligies sir or madame. We seem to have encountered an error retrieving your async data.');
      }
    })
    .then(res => {
      console.log('Hmm...');
    });

  }

  // Validate EMAIL
  validateEmail = (email) => {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  };

  // Validate text inputText
  validateText = (input) => {
    var re = /^[a-zA-Z ]+$/;
    return re.test(input);
  };

  // Submit form data to server
  submitForm() {
    // console.log('return id is:',this.eventIdFunc());
    // Prepare form data
    let data = {"lead":
      [
        {
          "fname": `${this.state.fname}`,
          "lname": `${this.state.lname}`,
          "phone": `${this.state.phone}`,
          "email": `${this.state.email}`,
          "zip": `${this.state.zip}`,
          "dob": `${this.state.dob}`,
          "eventID": `${this.eventIdFunc()}`,
          "citizenshipStatus": `${this.state.value}`,
          "militaryService": `${this.state.selectedIndex}`,
          "contactPref": `${this.state.selectedIndexTwo}`,
          "checked": `${this.state.checked}`
        }
      ]
    };
    // console.log('final data:',data);

    // Check if the internet connection type is true of false...save to asyncstorate and persist
    // Are we incorporating sqlite in case the is turned off?
    NetInfo.isConnected.fetch().done((isConnected) => {
      //console.log(isConnected);
      if(isConnected) {
        this.postAsync();
        AsyncStorage.removeItem('form');
        if(this.validateText(this.state.fname) && this.validateText(this.state.lname)
            && this.validateEmail(this.state.email) && this.state.eventID.length > 0
            && this.state.phone.length > 0 && this.state.zip.length > 0
            && this.state.dob.length > 0 && this.state.value.length > 0
            && this.state.checked){
          //AlertIOS.alert('Cool beans!');
          this.resetForm();
          fetch("http://18.216.137.121:8081/submitEventData", {
            method: "POST",
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
          })
          .then(function(response){
            //this.resetForm();
            return response.json();
          })
          .then(function(data){
            AlertIOS.alert('Success! This form has been sent!');
            console.log('success', data.successful);
          })
          .catch(function(err){
            this.storeData(data);
            console.log(err);
          });
        } else {
          AlertIOS.alert('Oops! Make sure you have filled out all required fields, used English characters only in the name fields, added a valid email address, and selected and event!')
        }
      } else {
        AlertIOS.alert('Oops! No connection. Your form will be sent once a connection is established');
        // call storeData function
        this.storeData(data);
      }
    });
    //console.log(data);
  }

  render() {
    const { q1 } = this.state;
    const { q2 } = this.state;
    const { q3 } = this.state;
    const { q4 } = this.state;
    const { q5 } = this.state;
    const { q6 } = this.state;
    const { q7a } = this.state;
    const { q7b } = this.state;
    const { q7c } = this.state;
    const { q7d } = this.state;
    const { q8a } = this.state;
    const { q8b } = this.state;
    const { q8c } = this.state;
    const { q8d } = this.state;
    const { q9a } = this.state;
    const { q9b } = this.state;
    const { q9c } = this.state;
    const { q9d } = this.state;
    const { q10 } = this.state;
    const { q11 } = this.state;
    const { q12 } = this.state;
    const { q13 } = this.state;
    const { q14 } = this.state;
    const { q15 } = this.state;
    const { q16 } = this.state;
    const { q17 } = this.state;
    const { q18 } = this.state;
    const { q19 } = this.state;

    return (
      <View style={styles.wrapper}>
        <View style={styles.imageContainer}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('InputTwo')}
          >
            <Image style={styles.iconBack} source={require('./back.png')} />
          </TouchableOpacity>
          <Image style={styles.image} source={require('./white-ang-logo.png')} />
        </View>
        <Text style={styles.subHeader}>LET'S TAKE THE FIRST STEPS!</Text>
        <View style={styles.container}>
          <View style={styles.formContainer}>
            <View style={styles.formItemD}>
              <Text style={styles.fromLabel}>{Questions.questions[0].q9.question}</Text>
              <View>
                <Text>{Questions.questions[0].q9.answers.a1.questions}</Text>
                <ButtonGroup
                  textStyle={{fontSize: 12}}
                  style={styles.buttongroupTwo}
                  onPress={this.updateIndexNineA}
                  selectedIndex={q9a}
                  selectedButtonStyle={{backgroundColor: 'steelblue'}}
                  titleStyle={{fontFamily: 'Bangla Sangam MN'}}
                  selectedTextStyle={{color: 'white'}}
                  buttons={Questions.questions[0].q9.answers.a1.answers}
                  containerStyle={{height: 50, borderRadius: 50}}
                />
              </View>
              <View>
                <Text>{Questions.questions[0].q9.answers.a2.questions}</Text>
                <ButtonGroup
                  textStyle={{fontSize: 12}}
                  style={styles.buttongroupTwo}
                  onPress={this.updateIndexNineB}
                  selectedIndex={q9b}
                  selectedButtonStyle={{backgroundColor: 'steelblue'}}
                  titleStyle={{fontFamily: 'Bangla Sangam MN'}}
                  selectedTextStyle={{color: 'white'}}
                  buttons={Questions.questions[0].q9.answers.a2.answers}
                  containerStyle={{height: 50, borderRadius: 50}}
                />
              </View>
              <View>
                <Text>{Questions.questions[0].q9.answers.a3.questions}</Text>
                <ButtonGroup
                  textStyle={{fontSize: 12}}
                  style={styles.buttongroupTwo}
                  onPress={this.updateIndexNineC}
                  selectedIndex={q9c}
                  selectedButtonStyle={{backgroundColor: 'steelblue'}}
                  titleStyle={{fontFamily: 'Bangla Sangam MN'}}
                  selectedTextStyle={{color: 'white'}}
                  buttons={Questions.questions[0].q9.answers.a3.answers}
                  containerStyle={{height: 50, borderRadius: 50}}
                />
              </View>
              <View>
                <Text>{Questions.questions[0].q9.answers.a4.questions}</Text>
                <ButtonGroup
                  textStyle={{fontSize: 12}}
                  style={styles.buttongroupTwo}
                  onPress={this.updateIndexNineD}
                  selectedIndex={q9d}
                  selectedButtonStyle={{backgroundColor: 'steelblue'}}
                  titleStyle={{fontFamily: 'Bangla Sangam MN'}}
                  selectedTextStyle={{color: 'white'}}
                  buttons={Questions.questions[0].q9.answers.a4.answers}
                  containerStyle={{height: 50, borderRadius: 50}}
                />
              </View>
            </View>
            <View style={styles.formItemD}>
              <Text style={styles.fromLabel}>{Questions.questions[0].q10.question}</Text>
              <ButtonGroup
                textStyle={{fontSize: 12}}
                style={styles.buttongroupTwo}
                onPress={this.updateIndexTen}
                selectedIndex={q10}
                selectedButtonStyle={{backgroundColor: 'steelblue'}}
                titleStyle={{fontFamily: 'Bangla Sangam MN'}}
                selectedTextStyle={{color: 'white'}}
                buttons={Questions.questions[0].q10.answers}
                containerStyle={{height: 50, borderRadius: 50}}
              />
            </View>
            <View style={styles.formItemD}>
              <Text style={styles.fromLabel}>{Questions.questions[0].q11.question}</Text>
              <ButtonGroup
                textStyle={{fontSize: 12}}
                style={styles.buttongroupTwo}
                onPress={this.updateIndexEleven}
                selectedIndex={q11}
                selectedButtonStyle={{backgroundColor: 'steelblue'}}
                titleStyle={{fontFamily: 'Bangla Sangam MN'}}
                selectedTextStyle={{color: 'white'}}
                buttons={Questions.questions[0].q11.answers}
                containerStyle={{height: 50, borderRadius: 50}}
              />
            </View>
            <View style={styles.formItemD}>
              <Text style={styles.fromLabel}>{Questions.questions[0].q12.question}</Text>
              <ButtonGroup
                textStyle={{fontSize: 12}}
                style={styles.buttongroupTwo}
                onPress={this.updateIndexTwelve}
                selectedIndex={q12}
                selectedButtonStyle={{backgroundColor: 'steelblue'}}
                titleStyle={{fontFamily: 'Bangla Sangam MN'}}
                selectedTextStyle={{color: 'white'}}
                buttons={Questions.questions[0].q12.answers}
                containerStyle={{height: 50, borderRadius: 50}}
              />
            </View>
            <View style={styles.formItemD}>
              <Text style={styles.fromLabel}>{Questions.questions[0].q13.question}</Text>
              <ButtonGroup
                textStyle={{fontSize: 12}}
                style={styles.buttongroupTwo}
                onPress={this.updateIndexOneThree}
                selectedIndex={q13}
                selectedButtonStyle={{backgroundColor: 'steelblue'}}
                titleStyle={{fontFamily: 'Bangla Sangam MN'}}
                selectedTextStyle={{color: 'white'}}
                buttons={Questions.questions[0].q13.answers}
                containerStyle={{height: 50, borderRadius: 50}}
              />
            </View>
          </View>
        </View>
        <View style={styles.submitContainer}>
          <Button
            title="NEXT"
            color="white"
            backgroundColor='steelblue'
            style={styles.submit}
            textStyle={{fontFamily: 'Bangla Sangam MN'}}
            onPress={() => {
              this.props.navigation.navigate('InputFour', {
                eventID: this.state.value,
                q1: this.state.q1,
                q2: this.state.q2,
                q3: this.state.q3,
                q4: this.state.q4,
                q5: this.state.q5,
                q6: this.state.q6,
                q7a: this.state.q7a,
                q7b: this.state.q7b,
                q7c: this.state.q7c,
                q7d: this.state.q7d,
                q8a: this.state.q8a,
                q8b: this.state.q8b,
                q8c: this.state.q8c,
                q8d: this.state.q8d,
                q9a: this.state.q9a,
                q9b: this.state.q9b,
                q9c: this.state.q9c,
                q9d: this.state.q9d,
                q10: this.state.q10,
                q11: this.state.q11,
                q12: this.state.q12,
                q13: this.state.q13,
                q14: this.state.q14,
                q15: this.state.q15,
                q16a: this.state.q16a,
                q16b: this.state.q16b,
                q16c: this.state.q16c,
                q16d: this.state.q16d,
                q17a: this.state.q17a,
                q17b: this.state.q17b,
                q17c: this.state.q17c,
                q17d: this.state.q17d,
                q18a: this.state.q18a,
                q18b: this.state.q18b,
                q18c: this.state.q18c,
                q18d: this.state.q18d,
                q19: this.state.q19
              });
            }}
          />
        </View>
        <View style={styles.footerContainer}>
          <Text style={styles.footerText}>PRIVACY POLICY | TERMS OF USE</Text>
        </View>
      </View>
    );
  }
}

class InputFour extends Component {
  constructor(props) {
    super(props);
    this.state = {
      eventID: '',
      q1: '',
      q2: '',
      q3: '',
      q4: '',
      q5: '',
      q6: '',
      q7a: '',
      q7b: '',
      q7c: '',
      q7d: '',
      q8a: '',
      q8b: '',
      q8c: '',
      q8d: '',
      q9a: '',
      q9b: '',
      q9c: '',
      q9d: '',
      q10: '',
      q11: '',
      q12: '',
      q13: '',
      q14: '',
      q15: '',
      q16a: '',
      q16b: '',
      q16c: '',
      q16d: '',
      q17a: '',
      q17b: '',
      q17c: '',
      q17d: '',
      q18a: '',
      q18b: '',
      q18c: '',
      q18d: '',
      q19: ''
    };

    this.updateIndex = this.updateIndex.bind(this);
    this.updateIndexTwo = this.updateIndexTwo.bind(this);
    this.updateIndexThree = this.updateIndexThree.bind(this);
    this.updateIndexFour = this.updateIndexFour.bind(this);
    this.updateIndexFive = this.updateIndexFive.bind(this);
    this.updateIndexSix = this.updateIndexSix.bind(this);

    this.updateIndexSevenA = this.updateIndexSevenA.bind(this);
    this.updateIndexSevenB = this.updateIndexSevenB.bind(this);
    this.updateIndexSevenC = this.updateIndexSevenC.bind(this);
    this.updateIndexSevenD = this.updateIndexSevenD.bind(this);

    this.updateIndexEightA = this.updateIndexEightA.bind(this);
    this.updateIndexEightB = this.updateIndexEightB.bind(this);
    this.updateIndexEightC = this.updateIndexEightC.bind(this);
    this.updateIndexEightD = this.updateIndexEightD.bind(this);

    this.updateIndexNineA = this.updateIndexNineA.bind(this);
    this.updateIndexNineB = this.updateIndexNineB.bind(this);
    this.updateIndexNineC = this.updateIndexNineC.bind(this);
    this.updateIndexNineD = this.updateIndexNineD.bind(this);

    this.updateIndexTen = this.updateIndexTen.bind(this);
    this.updateIndexEleven = this.updateIndexEleven.bind(this);
    this.updateIndexTwelve = this.updateIndexTwelve.bind(this);
    this.updateIndexOneThree = this.updateIndexOneThree.bind(this);
    this.updateIndexOneFour = this.updateIndexOneFour.bind(this);
    this.updateIndexOneFive = this.updateIndexOneFive.bind(this);

    this.updateIndexOneSixA = this.updateIndexOneSixA.bind(this);
    this.updateIndexOneSixB = this.updateIndexOneSixB.bind(this);
    this.updateIndexOneSixC = this.updateIndexOneSixC.bind(this);
    this.updateIndexOneSixD = this.updateIndexOneSixD.bind(this);

    this.updateIndexOneSeven = this.updateIndexOneSeven.bind(this);
    this.updateIndexOneEight = this.updateIndexOneEight.bind(this);
    this.updateIndexOneNine= this.updateIndexOneNine.bind(this);

    this.eventIdFunc = this.eventIdFunc.bind(this);
    this.updateStatus = this.updateStatus.bind(this);
    this.updateEventId = this.updateEventId.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  componentWillMount() {
    this.getEventId();
  }
  componentDidMount(){
    const { navigation } = this.props;
    const ques1 = navigation.getParam('q1', 'NA');
    this.setState({q1 : `${ques1}`});
    const ques2 = navigation.getParam('q2', 'NA');
    this.setState({q2 : `${ques2}`});
    const ques3 = navigation.getParam('q3', 'NA');
    this.setState({q3 : `${ques3}`});
    const ques4 = navigation.getParam('q4', 'NA');
    this.setState({q4 : `${ques4}`});
    const ques5 = navigation.getParam('q5', 'NA');
    this.setState({q5 : `${ques5}`});

    const ques6 = navigation.getParam('q6', 'NA');
    this.setState({q6 : `${ques6}`});
    const ques7a = navigation.getParam('q7a', 'NA');
    this.setState({q7a : `${ques7a}`});
    const ques7b = navigation.getParam('q7b', 'NA');
    this.setState({q7b : `${ques7b}`});
    const ques7c = navigation.getParam('q7c', 'NA');
    this.setState({q7c : `${ques7c}`});
    const ques7d = navigation.getParam('q7d', 'NA');
    this.setState({q7d : `${ques7d}`});

    const ques8a = navigation.getParam('q8a', 'NA');
    this.setState({q8a : `${ques8a}`});
    const ques8b = navigation.getParam('q8b', 'NA');
    this.setState({q8b : `${ques8b}`});
    const ques8c = navigation.getParam('q8c', 'NA');
    this.setState({q8c : `${ques8c}`});
    const ques8d = navigation.getParam('q8d', 'NA');
    this.setState({q8d : `${ques8d}`});

    const ques9a = navigation.getParam('q9a', 'NA');
    this.setState({q9a : `${ques9a}`});
    const ques9b = navigation.getParam('q9b', 'NA');
    this.setState({q9b : `${ques9b}`});
    const ques9c = navigation.getParam('q9c', 'NA');
    this.setState({q9c : `${ques9c}`});
    const ques9d = navigation.getParam('q9d', 'NA');
    this.setState({q9d : `${ques9d}`});

    const ques10 = navigation.getParam('q10', 'NA');
    this.setState({q10 : `${ques10}`});
    const ques11 = navigation.getParam('q11', 'NA');
    this.setState({q11 : `${ques11}`});
    const ques12 = navigation.getParam('q12', 'NA');
    this.setState({q12 : `${ques12}`});
    const ques13 = navigation.getParam('q13', 'NA');
    this.setState({q13 : `${ques13}`});
    const ques14 = navigation.getParam('q14', 'NA');
    this.setState({q14 : `${ques14}`});

    const ques15 = navigation.getParam('q15', 'NA');
    this.setState({q15 : `${ques15}`});
    const ques16a = navigation.getParam('q16a', 'NA');
    this.setState({q16a : `${ques16a}`});
    const ques16b = navigation.getParam('q16b', 'NA');
    this.setState({q16b : `${ques16b}`});
    const ques16c = navigation.getParam('q16c', 'NA');
    this.setState({q16c : `${ques16c}`});
    const ques16d = navigation.getParam('q16d', 'NA');
    this.setState({q16d : `${ques16d}`});

    const ques17a = navigation.getParam('q17a', 'NA');
    this.setState({q17a : `${ques17a}`});
    const ques17b = navigation.getParam('q17b', 'NA');
    this.setState({q17b : `${ques17b}`});
    const ques17c = navigation.getParam('q17c', 'NA');
    this.setState({q17c : `${ques17c}`});
    const ques17d = navigation.getParam('q17d', 'NA');
    this.setState({q17d : `${ques17d}`});

    const ques18a = navigation.getParam('q18a', 'NA');
    this.setState({q18a : `${ques18a}`});
    const ques18b = navigation.getParam('q18b', 'NA');
    this.setState({q18b : `${ques18b}`});
    const ques18c = navigation.getParam('q18c', 'NA');
    this.setState({q18c : `${ques18c}`});
    const ques18d = navigation.getParam('q18d', 'NA');
    this.setState({q18d : `${ques18d}`});

    const ques19 = navigation.getParam('q19', 'NA');
    this.setState({q19 : `${ques19}`});

    const event = navigation.getParam('eventID', 'NA');
    this.setState({eventID: `${event}`});
  }

  eventIdFunc(){
    let wEvent = Eventdata.events;
    // console.log(wEvent);
    let valueIndex;
    // console.log('event id is:', this.state.eventID);
    for(var i=0; i<wEvent.length; i++) {
      if(this.state.eventID === wEvent[i].value) {
        valueIndex = wEvent[i].A;
        //console.log('event id number:', valueIndex);
      }
    }
    // this.setState({eventIDnum: wEvent[valueIndex].A});
    // console.log('event number is', valueIndex);
    return valueIndex;
  }

  // Function for handling date picking
  _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });
  _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });

  _handleDatePicked = (date) => {
    let dateString = moment(date).format('MM-DD-YYYY');
    this.setState({chosenDate: dateString});
    this.setState({dob: dateString});
    this._hideDateTimePicker();
  };

  // Function for refreshing form
  resetForm = () => {
    const resetAction = StackActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName: 'Input' })],
    });
    this.props.navigation.dispatch(resetAction);
  }

  // Index is for knowing whether yes or no is selected...0 or 1 respectively
  updateIndex (q1) {
    this.setState({q1});
  }
  updateIndexTwo (q2) {
    this.setState({q2});
  }
  updateIndexThree (q3) {
    this.setState({q3});
  }
  updateIndexFour (q4) {
    this.setState({q4});
  }
  updateIndexFive (q5) {
    this.setState({q5});
  }
  updateIndexSix (q6) {
    this.setState({q6});
  }
  updateIndexSevenA (q7a) {
    this.setState({q7a});
  }
  updateIndexSevenB (q7b) {
    this.setState({q7b});
  }
  updateIndexSevenC (q7c) {
    this.setState({q7c});
  }
  updateIndexSevenD (q7d) {
    this.setState({q7d});
  }
  updateIndexEightA (q8a) {
    this.setState({q8a});
  }
  updateIndexEightB (q8b) {
    this.setState({q8b});
  }
  updateIndexEightC (q8c) {
    this.setState({q8c});
  }
  updateIndexEightD (q8d) {
    this.setState({q8d});
  }
  updateIndexNineA (q9a) {
    this.setState({q9a});
  }
  updateIndexNineB (q9b) {
    this.setState({q9b});
  }
  updateIndexNineC (q9c) {
    this.setState({q9c});
  }
  updateIndexNineD (q9d) {
    this.setState({q9d});
  }
  updateIndexTen (q10) {
    this.setState({q10});
  }
  updateIndexEleven (q11) {
    this.setState({q11});
  }
  updateIndexTwelve (q12) {
    this.setState({q12});
  }
  updateIndexOneThree (q13) {
    this.setState({q13});
  }
  updateIndexOneFour (q14) {
    this.setState({q14});
  }
  updateIndexOneFive (q15) {
    this.setState({q15});
  }
  updateIndexOneSixA (q16a) {
    this.setState({q16a});
  }
  updateIndexOneSixB (q16b) {
    this.setState({q16b});
  }
  updateIndexOneSixC (q16c) {
    this.setState({q16c});
  }
  updateIndexOneSixD (q16d) {
    this.setState({q16d});
  }
  updateIndexOneSeven (q17) {
    this.setState({q17});
  }
  updateIndexOneEight (q18) {
    this.setState({q18});
  }
  updateIndexOneNine (q19) {
    this.setState({q19});
  }

  updateEventId (eventID) {
    this.setState({eventID});
  }
  // Set value for selected citizenship status
  updateStatus (value) {
    this.setState({value});
  }

  // Retreive eventID from storage
  getEventId() {
    AsyncStorage.getItem('eventID').then((value) => {
      this.setState({"eventID": value});
    });
  }

  // To store data async we pass 1 parameters (formdata)
  storeData(formData) {
    // Add items to async through pushing data to create an array.
    AsyncStorage
    .getItem('form')
    .then(favs => {
        favs = favs == null ? [] : JSON.parse(favs)
        favs.push(formData)
        return AsyncStorage.setItem('form', JSON.stringify(favs))
    });
    this.resetForm();
  }

  // POST data stored in AsynchStorage
  postAsync() {
    AsyncStorage.getItem('form').then((value) => {
      let jData = JSON.parse(value);
      let data;
      //loop through the stored data
      try {
        if(value !== null) {
          for(let i = 0; i < jData.length; i++) {
            data = {"lead":
              [
                {
                  "fname": `${jData[i].lead[0].fname}`,
                  "lname": `${jData[i].lead[0].lname}`,
                  "phone": `${jData[i].lead[0].phone}`,
                  "email": `${jData[i].lead[0].email}`,
                  "zip": `${jData[i].lead[0].zip}`,
                  "dob": `${jData[i].lead[0].dob}`,
                  "eventID": `${jData[i].lead[0].eventID}`,
                  "citizenshipStatus": `${jData[i].lead[0].citizenshipStatus}`,
                  "militaryService": `${jData[i].lead[0].militaryService}`,
                  "contactPref": `${jData[i].lead[0].contactPref}`,
                  "checked": `${jData[i].lead[0].checked}`
                }
              ]
            };
            // console.log('storeData: ', data);
            // Send the stored forms to the server
            fetch("http://18.216.137.121:8081/submitEventData", {
              method: "POST",
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(data)
            })
            .then(function(response){
              return response.json();
            })
            .then(function(data){
              console.log('dataSent:',data);
            })
            .catch(function(err){
              console.log(err);
            });
          }
        }
      } catch (error) {
        // Error retrieving data
        console.log('Apoligies sir or madame. We seem to have encountered an error retrieving your async data.');
      }
    })
    .then(res => {
      console.log('Hmm...');
    });

  }

  // Validate EMAIL
  validateEmail = (email) => {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  };

  // Validate text inputText
  validateText = (input) => {
    var re = /^[a-zA-Z ]+$/;
    return re.test(input);
  };

  // Submit form data to server
  submitForm() {
    // console.log('return id is:',this.eventIdFunc());
    // Prepare form data
    let data = {"lead":
      [
        {
          "fname": `${this.state.fname}`,
          "lname": `${this.state.lname}`,
          "phone": `${this.state.phone}`,
          "email": `${this.state.email}`,
          "zip": `${this.state.zip}`,
          "dob": `${this.state.dob}`,
          "eventID": `${this.eventIdFunc()}`,
          "citizenshipStatus": `${this.state.value}`,
          "militaryService": `${this.state.selectedIndex}`,
          "contactPref": `${this.state.selectedIndexTwo}`,
          "checked": `${this.state.checked}`
        }
      ]
    };
    // console.log('final data:',data);

    // Check if the internet connection type is true of false...save to asyncstorate and persist
    // Are we incorporating sqlite in case the is turned off?
    NetInfo.isConnected.fetch().done((isConnected) => {
      //console.log(isConnected);
      if(isConnected) {
        this.postAsync();
        AsyncStorage.removeItem('form');
        if(this.validateText(this.state.fname) && this.validateText(this.state.lname)
            && this.validateEmail(this.state.email) && this.state.eventID.length > 0
            && this.state.phone.length > 0 && this.state.zip.length > 0
            && this.state.dob.length > 0 && this.state.value.length > 0
            && this.state.checked){
          //AlertIOS.alert('Cool beans!');
          this.resetForm();
          fetch("http://18.216.137.121:8081/submitEventData", {
            method: "POST",
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
          })
          .then(function(response){
            //this.resetForm();
            return response.json();
          })
          .then(function(data){
            AlertIOS.alert('Success! This form has been sent!');
            console.log('success', data.successful);
          })
          .catch(function(err){
            this.storeData(data);
            console.log(err);
          });
        } else {
          AlertIOS.alert('Oops! Make sure you have filled out all required fields, used English characters only in the name fields, added a valid email address, and selected and event!')
        }
      } else {
        AlertIOS.alert('Oops! No connection. Your form will be sent once a connection is established');
        // call storeData function
        this.storeData(data);
      }
    });
    //console.log(data);
  }

  render() {
    const { q1 } = this.state;
    const { q2 } = this.state;
    const { q3 } = this.state;
    const { q4 } = this.state;
    const { q5 } = this.state;
    const { q6 } = this.state;
    const { q7a } = this.state;
    const { q7b } = this.state;
    const { q7c } = this.state;
    const { q7d } = this.state;
    const { q8a } = this.state;
    const { q8b } = this.state;
    const { q8c } = this.state;
    const { q8d } = this.state;
    const { q9a } = this.state;
    const { q9b } = this.state;
    const { q9c } = this.state;
    const { q9d } = this.state;
    const { q10 } = this.state;
    const { q11 } = this.state;
    const { q12 } = this.state;
    const { q13 } = this.state;
    const { q14 } = this.state;
    const { q15 } = this.state;
    const { q16a } = this.state;
    const { q16b } = this.state;
    const { q16c } = this.state;
    const { q16d } = this.state;
    const { q17a } = this.state;
    const { q17b } = this.state;
    const { q17c } = this.state;
    const { q17d } = this.state;
    const { q18a } = this.state;
    const { q18b } = this.state;
    const { q18c } = this.state;
    const { q18d } = this.state;
    const { q19 } = this.state;

    return (
      <View style={styles.wrapper}>
        <View style={styles.imageContainer}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('InputThree')}
          >
            <Image style={styles.iconBack} source={require('./back.png')} />
          </TouchableOpacity>
          <Image style={styles.image} source={require('./white-ang-logo.png')} />
        </View>
        <Text style={styles.subHeader}>LET'S TAKE THE FIRST STEPS!</Text>
        <View style={styles.container}>
          <View style={styles.formContainer}>
            <View style={styles.formItemD}>
              <Text style={styles.fromLabel}>{Questions.questions[0].q14.question}</Text>
              <ButtonGroup
                textStyle={{fontSize: 12}}
                style={styles.buttongroupTwo}
                onPress={this.updateIndexOneFour}
                selectedIndex={q14}
                selectedButtonStyle={{backgroundColor: 'steelblue'}}
                titleStyle={{fontFamily: 'Bangla Sangam MN'}}
                selectedTextStyle={{color: 'white'}}
                buttons={Questions.questions[0].q14.answers}
                containerStyle={{height: 50, borderRadius: 50}}
              />
            </View>
            <View style={styles.formItemD}>
              <Text style={styles.fromLabel}>{Questions.questions[0].q15.question}</Text>
              <ButtonGroup
                textStyle={{fontSize: 12}}
                style={styles.buttongroupTwo}
                onPress={this.updateIndexOneFive}
                selectedIndex={q15}
                selectedButtonStyle={{backgroundColor: 'steelblue'}}
                titleStyle={{fontFamily: 'Bangla Sangam MN'}}
                selectedTextStyle={{color: 'white'}}
                buttons={Questions.questions[0].q15.answers}
                containerStyle={{height: 50, borderRadius: 50}}
              />
            </View>
            <View style={styles.formItemD}>
              <Text style={styles.fromLabel}>{Questions.questions[0].q16.question}</Text>
              <View>
                <Text>{Questions.questions[0].q16.answers.a1.questions}</Text>
                <ButtonGroup
                  textStyle={{fontSize: 12}}
                  style={styles.buttongroupTwo}
                  onPress={this.updateIndexOneSixA}
                  selectedIndex={q16a}
                  selectedButtonStyle={{backgroundColor: 'steelblue'}}
                  titleStyle={{fontFamily: 'Bangla Sangam MN'}}
                  selectedTextStyle={{color: 'white'}}
                  buttons={Questions.questions[0].q16.answers.a1.answers}
                  containerStyle={{height: 50, borderRadius: 50}}
                />
              </View>
              <View>
                <Text>{Questions.questions[0].q16.answers.a2.questions}</Text>
                <ButtonGroup
                  textStyle={{fontSize: 12}}
                  style={styles.buttongroupTwo}
                  onPress={this.updateIndexOneSixB}
                  selectedIndex={q16b}
                  selectedButtonStyle={{backgroundColor: 'steelblue'}}
                  titleStyle={{fontFamily: 'Bangla Sangam MN'}}
                  selectedTextStyle={{color: 'white'}}
                  buttons={Questions.questions[0].q16.answers.a2.answers}
                  containerStyle={{height: 50, borderRadius: 50}}
                />
              </View>
              <View>
                <Text>{Questions.questions[0].q16.answers.a3.questions}</Text>
                <ButtonGroup
                  textStyle={{fontSize: 12}}
                  style={styles.buttongroupTwo}
                  onPress={this.updateIndexOneSixC}
                  selectedIndex={q16c}
                  selectedButtonStyle={{backgroundColor: 'steelblue'}}
                  titleStyle={{fontFamily: 'Bangla Sangam MN'}}
                  selectedTextStyle={{color: 'white'}}
                  buttons={Questions.questions[0].q16.answers.a3.answers}
                  containerStyle={{height: 50, borderRadius: 50}}
                />
              </View>
              <View>
                <Text>{Questions.questions[0].q16.answers.a4.questions}</Text>
                <ButtonGroup
                  textStyle={{fontSize: 12}}
                  style={styles.buttongroupTwo}
                  onPress={this.updateIndexOneSixD}
                  selectedIndex={q16d}
                  selectedButtonStyle={{backgroundColor: 'steelblue'}}
                  titleStyle={{fontFamily: 'Bangla Sangam MN'}}
                  selectedTextStyle={{color: 'white'}}
                  buttons={Questions.questions[0].q16.answers.a4.answers}
                  containerStyle={{height: 50, borderRadius: 50}}
                />
              </View>
            </View>
            <View style={styles.formItemD}>
              <Text style={styles.fromLabel}>{Questions.questions[0].q19.question}</Text>
              <ButtonGroup
                textStyle={{fontSize: 12}}
                style={styles.buttongroupTwo}
                onPress={this.updateIndexOneNine}
                selectedIndex={q19}
                selectedButtonStyle={{backgroundColor: 'steelblue'}}
                titleStyle={{fontFamily: 'Bangla Sangam MN'}}
                selectedTextStyle={{color: 'white'}}
                buttons={Questions.questions[0].q19.answers}
                containerStyle={{height: 50, borderRadius: 50}}
              />
            </View>
          </View>
        </View>
        <View style={styles.submitContainer}>
          <Button
            title="NEXT"
            color="white"
            backgroundColor='steelblue'
            style={styles.submit}
            textStyle={{fontFamily: 'Bangla Sangam MN'}}
            onPress={() => {
              this.props.navigation.navigate('InputFive', {
                eventID: this.state.value,
                q1: this.state.q1,
                q2: this.state.q2,
                q3: this.state.q3,
                q4: this.state.q4,
                q5: this.state.q5,
                q6: this.state.q6,
                q7a: this.state.q7a,
                q7b: this.state.q7b,
                q7c: this.state.q7c,
                q7d: this.state.q7d,
                q8a: this.state.q8a,
                q8b: this.state.q8b,
                q8c: this.state.q8c,
                q8d: this.state.q8d,
                q9a: this.state.q9a,
                q9b: this.state.q9b,
                q9c: this.state.q9c,
                q9d: this.state.q9d,
                q10: this.state.q10,
                q11: this.state.q11,
                q12: this.state.q12,
                q13: this.state.q13,
                q14: this.state.q14,
                q15: this.state.q15,
                q16a: this.state.q16a,
                q16b: this.state.q16b,
                q16c: this.state.q16c,
                q16d: this.state.q16d,
                q17a: this.state.q17a,
                q17b: this.state.q17b,
                q17c: this.state.q17c,
                q17d: this.state.q17d,
                q18a: this.state.q18a,
                q18b: this.state.q18b,
                q18c: this.state.q18c,
                q18d: this.state.q18d,
                q19: this.state.q19
              });
            }}
          />
        </View>
        <View style={styles.footerContainer}>
          <Text style={styles.footerText}>PRIVACY POLICY | TERMS OF USE</Text>
        </View>
      </View>
    );
  }
}

class InputFive extends Component {
  constructor(props) {
    super(props);
    this.state = {
      eventID: '',
      q1: '',
      q2: '',
      q3: '',
      q4: '',
      q5: '',
      q6: '',
      q7a: '',
      q7b: '',
      q7c: '',
      q7d: '',
      q8a: '',
      q8b: '',
      q8c: '',
      q8d: '',
      q9a: '',
      q9b: '',
      q9c: '',
      q9d: '',
      q10: '',
      q11: '',
      q12: '',
      q13: '',
      q14: '',
      q15: '',
      q16a: '',
      q16b: '',
      q16c: '',
      q16d: '',
      q17a: '',
      q17b: '',
      q17c: '',
      q17d: '',
      q18a: '',
      q18b: '',
      q18c: '',
      q18d: '',
      q19: ''
    };

    this.updateIndex = this.updateIndex.bind(this);
    this.updateIndexTwo = this.updateIndexTwo.bind(this);
    this.updateIndexThree = this.updateIndexThree.bind(this);
    this.updateIndexFour = this.updateIndexFour.bind(this);
    this.updateIndexFive = this.updateIndexFive.bind(this);
    this.updateIndexSix = this.updateIndexSix.bind(this);
    this.updateIndexSeven = this.updateIndexSeven.bind(this);
    this.updateIndexEight = this.updateIndexEight.bind(this);
    this.updateIndexNine = this.updateIndexNine.bind(this);
    this.updateIndexTen = this.updateIndexTen.bind(this);
    this.updateIndexEleven = this.updateIndexEleven.bind(this);
    this.updateIndexTwelve = this.updateIndexTwelve.bind(this);
    this.updateIndexOneThree = this.updateIndexOneThree.bind(this);
    this.updateIndexOneFour = this.updateIndexOneFour.bind(this);
    this.updateIndexOneFive = this.updateIndexOneFive.bind(this);
    this.updateIndexOneSix = this.updateIndexOneSix.bind(this);

    this.updateIndexOneSevenA = this.updateIndexOneSevenA.bind(this);
    this.updateIndexOneSevenB = this.updateIndexOneSevenB.bind(this);
    this.updateIndexOneSevenC = this.updateIndexOneSevenC.bind(this);
    this.updateIndexOneSevenD = this.updateIndexOneSevenD.bind(this);

    this.updateIndexOneEightA = this.updateIndexOneEightA.bind(this);
    this.updateIndexOneEightB = this.updateIndexOneEightB.bind(this);
    this.updateIndexOneEightC = this.updateIndexOneEightC.bind(this);
    this.updateIndexOneEightD = this.updateIndexOneEightD.bind(this);

    this.updateIndexOneNine= this.updateIndexOneNine.bind(this);

    this.eventIdFunc = this.eventIdFunc.bind(this);
    this.updateStatus = this.updateStatus.bind(this);
    this.updateEventId = this.updateEventId.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  componentWillMount() {
    this.getEventId();
  }
  componentDidMount(){
    const { navigation } = this.props;
    const ques1 = navigation.getParam('q1', 'NA');
    this.setState({q1 : `${ques1}`});
    const ques2 = navigation.getParam('q2', 'NA');
    this.setState({q2 : `${ques2}`});
    const ques3 = navigation.getParam('q3', 'NA');
    this.setState({q3 : `${ques3}`});
    const ques4 = navigation.getParam('q4', 'NA');
    this.setState({q4 : `${ques4}`});
    const ques5 = navigation.getParam('q5', 'NA');
    this.setState({q5 : `${ques5}`});

    const ques6 = navigation.getParam('q6', 'NA');
    this.setState({q6 : `${ques6}`});
    const ques7a = navigation.getParam('q7a', 'NA');
    this.setState({q7a : `${ques7a}`});
    const ques7b = navigation.getParam('q7b', 'NA');
    this.setState({q7b : `${ques7b}`});
    const ques7c = navigation.getParam('q7c', 'NA');
    this.setState({q7c : `${ques7c}`});
    const ques7d = navigation.getParam('q7d', 'NA');
    this.setState({q7d : `${ques7d}`});

    const ques8a = navigation.getParam('q8a', 'NA');
    this.setState({q8a : `${ques8a}`});
    const ques8b = navigation.getParam('q8b', 'NA');
    this.setState({q8b : `${ques8b}`});
    const ques8c = navigation.getParam('q8c', 'NA');
    this.setState({q8c : `${ques8c}`});
    const ques8d = navigation.getParam('q8d', 'NA');
    this.setState({q8d : `${ques8d}`});

    const ques9a = navigation.getParam('q9a', 'NA');
    this.setState({q9a : `${ques9a}`});
    const ques9b = navigation.getParam('q9b', 'NA');
    this.setState({q9b : `${ques9b}`});
    const ques9c = navigation.getParam('q9c', 'NA');
    this.setState({q9c : `${ques9c}`});
    const ques9d = navigation.getParam('q9d', 'NA');
    this.setState({q9d : `${ques9d}`});

    const ques10 = navigation.getParam('q10', 'NA');
    this.setState({q10 : `${ques10}`});
    const ques11 = navigation.getParam('q11', 'NA');
    this.setState({q11 : `${ques11}`});
    const ques12 = navigation.getParam('q12', 'NA');
    this.setState({q12 : `${ques12}`});
    const ques13 = navigation.getParam('q13', 'NA');
    this.setState({q13 : `${ques13}`});
    const ques14 = navigation.getParam('q14', 'NA');
    this.setState({q14 : `${ques14}`});

    const ques15 = navigation.getParam('q15', 'NA');
    this.setState({q15 : `${ques15}`});
    const ques16a = navigation.getParam('q16a', 'NA');
    this.setState({q16a : `${ques16a}`});
    const ques16b = navigation.getParam('q16b', 'NA');
    this.setState({q16b : `${ques16b}`});
    const ques16c = navigation.getParam('q16c', 'NA');
    this.setState({q16c : `${ques16c}`});
    const ques16d = navigation.getParam('q16d', 'NA');
    this.setState({q16d : `${ques16d}`});

    const ques17a = navigation.getParam('q17a', 'NA');
    this.setState({q17a : `${ques17a}`});
    const ques17b = navigation.getParam('q17b', 'NA');
    this.setState({q17b : `${ques17b}`});
    const ques17c = navigation.getParam('q17c', 'NA');
    this.setState({q17c : `${ques17c}`});
    const ques17d = navigation.getParam('q17d', 'NA');
    this.setState({q17d : `${ques17d}`});

    const ques18a = navigation.getParam('q18a', 'NA');
    this.setState({q18a : `${ques18a}`});
    const ques18b = navigation.getParam('q18b', 'NA');
    this.setState({q18b : `${ques18b}`});
    const ques18c = navigation.getParam('q18c', 'NA');
    this.setState({q18c : `${ques18c}`});
    const ques18d = navigation.getParam('q18d', 'NA');
    this.setState({q18d : `${ques18d}`});

    const ques19 = navigation.getParam('q19', 'NA');
    this.setState({q19 : `${ques19}`});

    const event = navigation.getParam('eventID', 'NA');
    this.setState({eventID: `${event}`});
  }

  eventIdFunc(){
    let wEvent = Eventdata.events;
    // console.log(wEvent);
    let valueIndex;
    // console.log('event id is:', this.state.eventID);
    for(var i=0; i<wEvent.length; i++) {
      if(this.state.eventID === wEvent[i].value) {
        valueIndex = wEvent[i].A;
        //console.log('event id number:', valueIndex);
      }
    }
    // this.setState({eventIDnum: wEvent[valueIndex].A});
    // console.log('event number is', valueIndex);
    return valueIndex;
  }

  // Function for handling date picking
  _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });
  _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });

  _handleDatePicked = (date) => {
    let dateString = moment(date).format('MM-DD-YYYY');
    this.setState({chosenDate: dateString});
    this.setState({dob: dateString});
    this._hideDateTimePicker();
  };

  // Function for refreshing form
  resetForm = () => {
    const resetAction = StackActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName: 'Input' })],
    });
    this.props.navigation.dispatch(resetAction);
  }

  // Index is for knowing whether yes or no is selected...0 or 1 respectively
  updateIndex (q1) {
    this.setState({q1});
  }
  updateIndexTwo (q2) {
    this.setState({q2});
  }
  updateIndexThree (q3) {
    this.setState({q3});
  }
  updateIndexFour (q4) {
    this.setState({q4});
  }
  updateIndexFive (q5) {
    this.setState({q5});
  }
  updateIndexSix (q6) {
    this.setState({q6});
  }
  updateIndexSeven (q7) {
    this.setState({q7});
  }
  updateIndexEight (q8) {
    this.setState({q8});
  }
  updateIndexNine (q9) {
    this.setState({q9});
  }
  updateIndexTen (q10) {
    this.setState({q10});
  }
  updateIndexEleven (q11) {
    this.setState({q11});
  }
  updateIndexTwelve (q12) {
    this.setState({q12});
  }
  updateIndexOneThree (q13) {
    this.setState({q13});
  }
  updateIndexOneFour (q14) {
    this.setState({q14});
  }
  updateIndexOneFive (q15) {
    this.setState({q15});
  }
  updateIndexOneSix (q16) {
    this.setState({q16});
  }
  updateIndexOneSevenA (q17a) {
    this.setState({q17a});
  }
  updateIndexOneSevenB (q17b) {
    this.setState({q17b});
  }
  updateIndexOneSevenC (q17c) {
    this.setState({q17c});
  }
  updateIndexOneSevenD (q17d) {
    this.setState({q17d});
  }
  updateIndexOneEightA (q18a) {
    this.setState({q18a});
  }
  updateIndexOneEightB (q18b) {
    this.setState({q18b});
  }
  updateIndexOneEightC (q18c) {
    this.setState({q18c});
  }
  updateIndexOneEightD (q18d) {
    this.setState({q18d});
  }
  updateIndexOneNine (q19) {
    this.setState({q19});
  }

  updateEventId (eventID) {
    this.setState({eventID});
  }
  // Set value for selected citizenship status
  updateStatus (value) {
    this.setState({value});
  }

  // Retreive eventID from storage
  getEventId() {
    AsyncStorage.getItem('eventID').then((value) => {
      this.setState({"eventID": value});
    });
  }

  // To store data async we pass 1 parameters (formdata)
  storeData(formData) {
    // Add items to async through pushing data to create an array.
    AsyncStorage
    .getItem('survey')
    .then(favs => {
        favs = favs == null ? [] : JSON.parse(favs)
        favs.push(formData)
        return AsyncStorage.setItem('survey', JSON.stringify(favs))
    });
    this.resetForm();
  }

  // POST data stored in AsynchStorage
  postAsync() {
    AsyncStorage.getItem('survey').then((value) => {
      let jData = JSON.parse(value);
      let data;
      //loop through the stored data
      try {
        if(value !== null) {
          for(let i = 0; i < jData.length; i++) {
            data = {"lead":
              [
                {
                  eventID: `${jData[i].lead[0].eventID}`,
                  "q1": `${jData[i].lead[0].q1}`,
                  "q2": `${jData[i].lead[0].q2}`,
                  "q3": `${jData[i].lead[0].q3}`,
                  "q4": `${jData[i].lead[0].q4}`,
                  "q5": `${jData[i].lead[0].q5}`,
                  "q6": `${jData[i].lead[0].q6}`,
                  "q7a": `${jData[i].lead[0].q7a}`,
                  "q7b": `${jData[i].lead[0].q7b}`,
                  "q7c": `${jData[i].lead[0].q7c}`,
                  "q7d": `${jData[i].lead[0].q7d}`,
                  "q8a": `${jData[i].lead[0].q8a}`,
                  "q8b": `${jData[i].lead[0].q8b}`,
                  "q8c": `${jData[i].lead[0].q8c}`,
                  "q8d": `${jData[i].lead[0].q8d}`,
                  "q9a": `${jData[i].lead[0].q9a}`,
                  "q9b": `${jData[i].lead[0].q9b}`,
                  "q9c": `${jData[i].lead[0].q9c}`,
                  "q9d": `${jData[i].lead[0].q9d}`,
                  "q10": `${jData[i].lead[0].q10}`,
                  "q11": `${jData[i].lead[0].q11}`,
                  "q12": `${jData[i].lead[0].q12}`,
                  "q13": `${jData[i].lead[0].q13}`,
                  "q14": `${jData[i].lead[0].q14}`,
                  "q15": `${jData[i].lead[0].q15}`,
                  "q16a": `${jData[i].lead[0].q16a}`,
                  "q16b": `${jData[i].lead[0].q16b}`,
                  "q16c": `${jData[i].lead[0].q16c}`,
                  "q16d": `${jData[i].lead[0].q16d}`,
                  "q17a": `${jData[i].lead[0].q17a}`,
                  "q17b": `${jData[i].lead[0].q17b}`,
                  "q17c": `${jData[i].lead[0].q17c}`,
                  "q17d": `${jData[i].lead[0].q17d}`,
                  "q18a": `${jData[i].lead[0].q18a}`,
                  "q18b": `${jData[i].lead[0].q18b}`,
                  "q18c": `${jData[i].lead[0].q18c}`,
                  "q18d": `${jData[i].lead[0].q18d}`,
                  "q19": `${jData[i].lead[0].q19}`
                }
              ]
            };
            console.log('storeData: ', data);
            // Send the stored forms to the server
            fetch("http://18.217.127.86:6061/submitSurveyData", {
              method: "POST",
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(data)
            })
            .then(function(response){
              return response.json();
            })
            .then(function(data){
              console.log('dataSent:',data);
            })
            .catch(function(err){
              console.log(err);
            });
          }
        }
      } catch (error) {
        // Error retrieving data
        console.log('Apoligies sir or madame. We seem to have encountered an error retrieving your async data.');
      }
    })
    .then(res => {
      console.log('Hmm...');
    });

  }

  // Validate EMAIL
  validateEmail = (email) => {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  };

  // Validate text inputText
  validateText = (input) => {
    var re = /^[a-zA-Z ]+$/;
    return re.test(input);
  };

  // Submit form data to server
  submitForm() {
    // console.log('return id is:',this.eventIdFunc());
    this.postAsync();
    // Prepare form data
    let data = {"lead":
      [
        {
          "eventID": `${this.state.eventID}`,
          "q1": `${this.state.q1}`,
          "q2": `${this.state.q2}`,
          "q3": `${this.state.q3}`,
          "q4": `${this.state.q4}`,
          "q5": `${this.state.q5}`,
          "q6": `${this.state.q6}`,
          "q7a": `${this.state.q7a}`,
          "q7b": `${this.state.q7b}`,
          "q7c": `${this.state.q7c}`,
          "q7d": `${this.state.q7d}`,
          "q8a": `${this.state.q8a}`,
          "q8b": `${this.state.q8b}`,
          "q8c": `${this.state.q8c}`,
          "q8d": `${this.state.q8d}`,
          "q9a": `${this.state.q9a}`,
          "q9b": `${this.state.q9b}`,
          "q9c": `${this.state.q9c}`,
          "q9d": `${this.state.q9d}`,
          "q10": `${this.state.q10}`,
          "q11": `${this.state.q11}`,
          "q12": `${this.state.q12}`,
          "q13": `${this.state.q13}`,
          "q14": `${this.state.q14}`,
          "q15": `${this.state.q15}`,
          "q16a": `${this.state.q16a}`,
          "q16b": `${this.state.q16b}`,
          "q16c": `${this.state.q16c}`,
          "q16d": `${this.state.q16d}`,
          "q17a": `${this.state.q17a}`,
          "q17b": `${this.state.q17b}`,
          "q17c": `${this.state.q17c}`,
          "q17d": `${this.state.q17d}`,
          "q18a": `${this.state.q18a}`,
          "q18b": `${this.state.q18b}`,
          "q18c": `${this.state.q18c}`,
          "q18d": `${this.state.q18d}`,
          "q19":`${this.state.q19}`
        }
      ]
    };
    //console.log('final data:',data);

    // Check if the internet connection type is true of false...save to asyncstorate and persist
    // Are we incorporating sqlite in case the is turned off?
    NetInfo.isConnected.fetch().done((isConnected) => {
      //console.log(isConnected);
      if(isConnected) {
        this.postAsync();
        if(this.state.checked){
          //AlertIOS.alert('Cool beans!');
          this.resetForm();
          fetch("http://18.217.127.86:6061/submitSurveyData", {
            method: "POST",
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
          })
          .then(function(response){
            //this.resetForm();
            return response.json();
          })
          .then(function(data){
            AlertIOS.alert('Success! This form has been sent!');
            AsyncStorage.removeItem('survey');
            console.log('success', data.successful);
          })
          .catch(function(err){
            this.storeData(data);
            console.log(err);
          });
        } else {
          AlertIOS.alert('Oops! You must agree to terms and conditions')
        }
      } else {
        AlertIOS.alert('Oops! No connection. We will submit this later');
        // call storeData function
        this.storeData(data);
      }
    });
    console.log(data);
  }

  render() {
    const { q1 } = this.state;
    const { q2 } = this.state;
    const { q3 } = this.state;
    const { q4 } = this.state;
    const { q5 } = this.state;
    const { q6 } = this.state;
    const { q7 } = this.state;
    const { q8 } = this.state;
    const { q9 } = this.state;
    const { q10 } = this.state;
    const { q11 } = this.state;
    const { q12 } = this.state;
    const { q13 } = this.state;
    const { q14 } = this.state;
    const { q15 } = this.state;
    const { q16 } = this.state;
    const { q17a } = this.state;
    const { q17b } = this.state;
    const { q17c } = this.state;
    const { q17d } = this.state;
    const { q18a } = this.state;
    const { q18b } = this.state;
    const { q18c } = this.state;
    const { q18d } = this.state;
    const { q19 } = this.state;

    return (
      <View style={styles.wrapper}>
        <View style={styles.imageContainer}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('InputFour')}
          >
            <Image style={styles.iconBack} source={require('./back.png')} />
          </TouchableOpacity>
          <Image style={styles.image} source={require('./white-ang-logo.png')} />
        </View>
        <Text style={styles.subHeader}>LET'S TAKE THE FIRST STEPS!</Text>
        <View style={styles.container}>
          <View style={styles.formContainer}>
            <View style={styles.formItemD}>
              <Text style={styles.fromLabel}>{Questions.questions[0].q17.question}</Text>
              <View>
                <Text>{Questions.questions[0].q17.answers.a1.questions}</Text>
                <ButtonGroup
                  textStyle={{fontSize: 12}}
                  style={styles.buttongroupTwo}
                  onPress={this.updateIndexOneSevenA}
                  selectedIndex={q17a}
                  selectedButtonStyle={{backgroundColor: 'steelblue'}}
                  titleStyle={{fontFamily: 'Bangla Sangam MN'}}
                  selectedTextStyle={{color: 'white'}}
                  buttons={Questions.questions[0].q17.answers.a1.answers}
                  containerStyle={{height: 50, borderRadius: 50}}
                />
              </View>
              <View>
                <Text>{Questions.questions[0].q17.answers.a2.questions}</Text>
                <ButtonGroup
                  textStyle={{fontSize: 12}}
                  style={styles.buttongroupTwo}
                  onPress={this.updateIndexOneSevenB}
                  selectedIndex={q17b}
                  selectedButtonStyle={{backgroundColor: 'steelblue'}}
                  titleStyle={{fontFamily: 'Bangla Sangam MN'}}
                  selectedTextStyle={{color: 'white'}}
                  buttons={Questions.questions[0].q17.answers.a2.answers}
                  containerStyle={{height: 50, borderRadius: 50}}
                />
              </View>
              <View>
                <Text>{Questions.questions[0].q17.answers.a3.questions}</Text>
                <ButtonGroup
                  textStyle={{fontSize: 12}}
                  style={styles.buttongroupTwo}
                  onPress={this.updateIndexOneSevenC}
                  selectedIndex={q17c}
                  selectedButtonStyle={{backgroundColor: 'steelblue'}}
                  titleStyle={{fontFamily: 'Bangla Sangam MN'}}
                  selectedTextStyle={{color: 'white'}}
                  buttons={Questions.questions[0].q17.answers.a3.answers}
                  containerStyle={{height: 50, borderRadius: 50}}
                />
              </View>
              <View>
                <Text>{Questions.questions[0].q17.answers.a4.questions}</Text>
                <ButtonGroup
                  textStyle={{fontSize: 12}}
                  style={styles.buttongroupTwo}
                  onPress={this.updateIndexOneSevenD}
                  selectedIndex={q17d}
                  selectedButtonStyle={{backgroundColor: 'steelblue'}}
                  titleStyle={{fontFamily: 'Bangla Sangam MN'}}
                  selectedTextStyle={{color: 'white'}}
                  buttons={Questions.questions[0].q17.answers.a4.answers}
                  containerStyle={{height: 50, borderRadius: 50}}
                />
              </View>
            </View>
            <View style={styles.formItemD}>
              <Text style={styles.fromLabel}>{Questions.questions[0].q18.question}</Text>
              <View>
                <Text>{Questions.questions[0].q18.answers.a1.questions}</Text>
                <ButtonGroup
                  textStyle={{fontSize: 12}}
                  style={styles.buttongroupTwo}
                  onPress={this.updateIndexOneEightA}
                  selectedIndex={q18a}
                  selectedButtonStyle={{backgroundColor: 'steelblue'}}
                  titleStyle={{fontFamily: 'Bangla Sangam MN'}}
                  selectedTextStyle={{color: 'white'}}
                  buttons={Questions.questions[0].q18.answers.a1.answers}
                  containerStyle={{height: 50, borderRadius: 50}}
                />
              </View>
              <View>
                <Text>{Questions.questions[0].q18.answers.a2.questions}</Text>
                <ButtonGroup
                  textStyle={{fontSize: 12}}
                  style={styles.buttongroupTwo}
                  onPress={this.updateIndexOneEightB}
                  selectedIndex={q18b}
                  selectedButtonStyle={{backgroundColor: 'steelblue'}}
                  titleStyle={{fontFamily: 'Bangla Sangam MN'}}
                  selectedTextStyle={{color: 'white'}}
                  buttons={Questions.questions[0].q18.answers.a2.answers}
                  containerStyle={{height: 50, borderRadius: 50}}
                />
              </View>
              <View>
                <Text>{Questions.questions[0].q18.answers.a3.questions}</Text>
                <ButtonGroup
                  textStyle={{fontSize: 12}}
                  style={styles.buttongroupTwo}
                  onPress={this.updateIndexOneEightC}
                  selectedIndex={q18c}
                  selectedButtonStyle={{backgroundColor: 'steelblue'}}
                  titleStyle={{fontFamily: 'Bangla Sangam MN'}}
                  selectedTextStyle={{color: 'white'}}
                  buttons={Questions.questions[0].q18.answers.a3.answers}
                  containerStyle={{height: 50, borderRadius: 50}}
                />
              </View>
              <View>
                <Text>{Questions.questions[0].q18.answers.a4.questions}</Text>
                <ButtonGroup
                  textStyle={{fontSize: 12}}
                  style={styles.buttongroupTwo}
                  onPress={this.updateIndexOneEightD}
                  selectedIndex={q18d}
                  selectedButtonStyle={{backgroundColor: 'steelblue'}}
                  titleStyle={{fontFamily: 'Bangla Sangam MN'}}
                  selectedTextStyle={{color: 'white'}}
                  buttons={Questions.questions[0].q18.answers.a4.answers}
                  containerStyle={{height: 50, borderRadius: 50}}
                />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.submitContainer}>
          <Button
            title="SUBMIT"
            color="white"
            backgroundColor='steelblue'
            style={styles.submit}
            textStyle={{fontFamily: 'Bangla Sangam MN'}}
            onPress={this.submitForm}
          />
        </View>
        <CheckBox
          center
          title='I agree to terms and conditions'
          checked={this.state.checked}
          onPress={() => this.setState({checked: !this.state.checked})}
          containerStyle={{backgroundColor: 'transparent', borderWidth: 0, margin: 0}}
        />
        <View style={styles.footerContainer}>
          <Text style={styles.footerText}>PRIVACY POLICY | TERMS OF USE</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    height: '100%',
  },
  fromLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'Bangla Sangam MN'
  },
  imageContainerHome: {
    justifyContent: 'center',
    backgroundColor: 'steelblue',
    flexDirection: 'row'
  },
  imageContainer: {
    backgroundColor: 'steelblue',
    flexDirection: 'row',
    alignItems: 'stretch'
  },
  subHeader: {
    color: 'steelblue',
    marginBottom: 10,
    textAlign: 'center',
    fontWeight: 'bold',
    fontFamily: 'Bangla Sangam MN'
  },
  imageHome: {
    width: 250,
    height: 80,
  },
  image: {
    width: 250,
    height: 80,
    marginLeft: '30%'
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
    margin: 10
  },
  formContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  formItemD: {
    width: '100%',
    textAlign: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
    paddingBottom: 10,
    marginBottom: 10
  },
  formItemS: {
    width: '100%',
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 20,
    paddingBottom: 20
  },
  formItemC: {
    width: '100%',
  },
  inputText: {
    borderColor: 'steelblue',
    borderWidth: 1,
    height: 50,
    fontSize: 25
  },
  inputTextdob: {
    borderColor: 'steelblue',
    borderWidth: 1,
    height: 50,
    width: '96%',
    fontSize: 25
  },
  checkbox: {
    width: 20
  },
  iconBack: {
    width: 30,
    height: 30,
    marginTop: 30
  },
  iconCont: {
    height: 50,
    backgroundColor: 'steelblue'
  },
  calendarIcon: {
    width: 30,
    height: 30,
    marginTop: 8
  },
  datePick: {

  },
  pickerStyle: {

  },
  buttonRow: {
    flexDirection: 'row',
  },
  buttongroup: {
    height: 50,
    borderRadius: 50
  },
  buttongroupTwo: {
    height: 50,
  },
  button: {
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 10,
    width: 50,
    borderColor: 'steelblue'
  },
  buttonTwo: {
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 10,
    width: '100%',
    borderColor: 'steelblue'
  },
  submitContainer: {
    alignItems: 'center',
    marginBottom: 5
  },
  submit: {
    width: 175,
  },
  footerContainer: {
    alignItems: 'center',
    backgroundColor: 'steelblue'
  },
  footerText: {
    color: 'white',
    marginTop: 5,
    marginBottom: 5,
    fontFamily: 'Bangla Sangam MN'
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      header: null
    }
  },
  Input: {
    screen: Input,
    navigationOptions: {
      header: null
    }
  },
  InputTwo: {
    screen: InputTwo,
    navigationOptions: {
      header: null
    }
  },
  InputThree: {
    screen: InputThree,
    navigationOptions: {
      header: null
    }
  },
  InputFour: {
    screen: InputFour,
    navigationOptions: {
      header: null
    }
  },
  InputFive: {
    screen: InputFive,
    navigationOptions: {
      header: null
    }
  },
}, {
    initialRouteName: 'Home',
});

export default createAppContainer(AppNavigator);
