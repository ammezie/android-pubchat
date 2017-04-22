/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView
} from 'react-native';
// import native base components
import { Container, Content, Footer, Button} from 'native-base';
//import pusher
import Pusher from 'pusher-js/react-native'
//react-native class
export default class pubchat extends Component {
//load constructor
constructor(props){
  super(props);
  //declare an array of messages
  var messages_array = [];
  // declare initial states
   this.state ={
    messages_array,
    text:'' 
   }
  
  //instantiate pusher
  var pusher = new Pusher('XXX_PUSHER_KEY');
  //subscribe to the public chat channel
  var my_channel = pusher.subscribe('pubchat');
  //bind and listen for chat events
  my_channel.bind("message_sent", (data)=> {
     this.state.messages_array.push(data);
        this.setState({
          text:''
        })
  });

 
}

  //function that sends messahe
  send_message(){
    //check that the text input isnt empty
    if(this.state.text !=""){
      fetch('XXX_IP_ADDRESS', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: this.state.text
        })
      })
      .then((response) => response.json()) 
      .then((responseJson) => {}) 
      .catch((error) => { console.error(error); });
       
    }
   
  
  }

  
  //function that loops over our messages and displays them
  loop(){
      var element = [];
     for (var index = 0; index < this.state.messages_array.length; index++) {
        
            element.push(<View key={"container"+index} >
                            <Text key = {"author"+index}>
                              {this.state.messages_array[index].name}
                            </Text>
                            <Text key = {index} style={styles.bubble_you} >
                              {this.state.messages_array[index].message}
                            </Text>
                        </View>);
        }
         return element;
  };

  //render function that actually shows the page
  render() {
    //execute the loop function and store its response into a variable
    myloop = this.loop();
    
    return (
      <Container>
      <ScrollView >
        <View style={styles.container}>
          <Text style={styles.welcome}>
            Welcome to public chat room!
          </Text>
              {myloop}
        </View>
        </ScrollView>
        <Footer >
              <TextInput
          value ={this.state.text}
          style={{width: '80%'}}
          placeholder="Enter Your message!"
          onChangeText={(text) => this.setState({text})}
        />
                <Button onPress={()=> this.send_message()}>
                    <Text>Send</Text>
                </Button>
            
        </Footer>
      </Container>
    );
  }
}

//stylesheet 
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  bubble_you: {
	color: '#fff',
	backgroundColor: '#00b0ff',
  width: '50%',
  borderRadius: 25,
  padding: 7,
  marginBottom: 2,
  
  },
});

AppRegistry.registerComponent('pubchat', () => pubchat);
