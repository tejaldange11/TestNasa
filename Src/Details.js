import React, { Component } from 'react';
import { Text, View, StyleSheet,TextInput,TouchableOpacity,FlatList } from 'react-native';


export default class Details extends Component {
        constructor(){
            super();
            this.state={
              
            }
        }

        render(){
            const name =this.props.route.params.name,
            is_potentially_hazardous_asteroid =this.props.route.params.is_potentially_hazardous_asteroid,
            nasa_jpl_url =this.props.route.params.nasa_jpl_url
            return(
                <View style={{alignSelf:'center',width:'95%',height:'auto',elevation:3,borderWidth:0.1,marginTop:40}}>
                <View style={{width:'85%'}}>
                <View style={{flexDirection:'row'}}>
                <Text style={{fontWeight:'bold',fontSize:15,color:'red',padding:10}}>Name:-</Text>
                <Text style={{fontWeight:'bold',fontSize:15,padding:10}}>{name}</Text>
                </View>
                <View style={{flexDirection:'row'}}>
                <Text style={{fontWeight:'bold',fontSize:15,color:'red',padding:10}}>nasa_jpl_url:-</Text>
                <Text style={{fontWeight:'bold',fontSize:15,padding:10}}>{nasa_jpl_url}</Text>
                </View>
                <View style={{flexDirection:'row'}}>
                <Text style={{fontWeight:'bold',fontSize:15,color:'red',padding:10}}>is_potentially_hazardous_asteroid:-</Text>
                <Text style={{fontWeight:'bold',fontSize:15,padding:10}}>{is_potentially_hazardous_asteroid}</Text>
                </View>
                </View>

                </View>
            )
        }
    }