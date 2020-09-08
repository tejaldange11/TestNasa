import React, { Component } from 'react';
import { Text, View, StyleSheet,TextInput,TouchableOpacity,FlatList } from 'react-native';
import Navigation from './Navigation';


export default class Nasa extends Component {
        constructor(){
            super();
            this.state={
                dataSource:[],
                astroidId:'',
                showData:false,
                data:false
            }
        }
        componentDidMount(){
            fetch("https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=Gm0GowOLicT74YPJ2SDXZ8pir4Nylj5HAqo3yBty")
            .then(response => response.json())
            .then((responseJson)=> {
              this.setState({
               loading: false,
               dataSource: responseJson.near_earth_objects
              })
              console.log("responseJson",JSON.stringify(responseJson))
            })
            .catch(error=>console.log(error)) //to catch the errors if any
            }

                submit(){
                    const data=this.state.dataSource
                    console.log("dataaa",JSON.stringify(data))

                    for(let i=0; i<data.length; i++){
                        if(data[i].id == this.state.astroidId){
                            console.log("true")
                            this.props.navigation.navigate('Details',{nasa_jpl_url:data[i].nasa_jpl_url,
                            name:data[i].name,
                            is_potentially_hazardous_asteroid:data[i].is_potentially_hazardous_asteroid.toString()})
                        }
                        else{
                            this.setState({data:true})
                        }
                    }
                }
                renderItem(data){
                    console.log("vvvv",data)
                    return(
                        <View style={{marginTop:30,alignItems:'center',justifyContent:'center'}}>
                       <TouchableOpacity 
                       onPress={()=>
                        this.props.navigation.navigate('Details',{nasa_jpl_url:data.item.nasa_jpl_url,
                            name:data.item.name,
                            is_potentially_hazardous_asteroid:data.item.is_potentially_hazardous_asteroid.toString()})
                       }
                       style={{width:'50%',height:45,borderRadius:22,padding:10,borderWidth:0.3,textAlign:'center'}}>
                       <Text>{data.item.id}</Text>
                       </TouchableOpacity>
                        </View>
                    )
                }

        render(){
            return(
                <View style={{marginTop:50}}>
                <View style={{alignItems:'center'}}>
                <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                onChangeText={(astroidId) => this.setState({astroidId})}
                value={this.state.astroidId}
                placeholder="enter astroid Id"
                style={{width:'70%',height:45,borderWidth:0.5,borderRadius:22,padding:10}}
                />  
                <TouchableOpacity
                onPress={()=>
                this.submit()}
                style={{width:'65%',height:45,borderWidth:0.5,borderRadius:22,padding:10,
                backgroundColor:this.state.astroidId.length>1 ? 'red' : 'pink',marginTop:30}}>
                    <Text style={{alignSelf:'center',fontSize:18,fontWeight:'bold'}}>Submit</Text>
                </TouchableOpacity>

                <TouchableOpacity
                onPress={()=>
                this.setState({
                    showData:true,data:false
                })}
                style={{width:'65%',height:45,borderWidth:0.5,borderRadius:22,padding:10,
                backgroundColor:'blue',marginTop:30}}>
                    <Text style={{alignSelf:'center',fontSize:18,fontWeight:'bold',color:'#fff'}}>Random Asteroid</Text>
                </TouchableOpacity>
                    </View>


             

                {this.state.data ? 

                    <Text style={{alignSelf:'center',fontSize:18,fontWeight:'bold',marginTop:30}}>Data not found</Text>

                            
                            :

                        this.state.showData ?
                            <FlatList
                            data={this.state.dataSource}
                            renderItem={item => this.renderItem(item)}
                            keyExtractor={item => item.id}/>

                                :
                               null
                        
                        
                } 
                    
                  
                </View>
            )
        }
    }





