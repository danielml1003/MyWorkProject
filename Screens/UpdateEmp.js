import React, { useState , useEffect}  from 'react';
import { View, Text, TextInput, Button, FlatList} from 'react-native';
import { styles } from '../Style/style';


export const UpdateEmp = ({ navigation }) => {
    const [data, setData] = useState('')
    const [id, setId] = useState('')
    const [Worker, setWorker ] = useState('')
    const [Age, setAge ] = useState('')
    const [Salary, setSalary ] = useState('')
    

    const updateData = async (id, Worker, Salary, Age) => {
        fetch('http://dummy.restapiexample.com/api/v1/update/' + id.toString(),{
            method: 'PUT',
                headers: {
                    'Content-Type' : 'application/json'
                },
                
                body: JSON.stringify({
                    name:Worker,
                    Salary:Salary,
                    Age:Age,
                    id:id
                })
            }).then(res => {
                console.log(res)
                return res.json()
                })
                .then(data=> console.log(data))
                .catch(error => console.log('ERROR', error))
              }
            
    

    return <View style = {styles.container}>
    <TextInput
        style = {styles.input} 
        placeholder = "id"
        value={id}
        onChangeText = {(id) => setId (id)}>
        </TextInput>
    <TextInput
        style = {styles.input} 
        placeholder = "Worker"
        value={Worker}
        onChangeText = {(Worker) => setWorker (Worker)}>
     </TextInput>
     <TextInput
        style = {styles.input} 
        placeholder = "Age"
        value={Age}
        onChangeText = {(Age) => setAge (Age)}>
     </TextInput>
     <TextInput
        style = {styles.input} 
        placeholder = "Salary"
        value={Salary}
        onChangeText = {(Salary) => setSalary (Salary)}>
     </TextInput>
    <Button
        title = "update the user by inserting id"
        onPress ={() => {updateData(id, Worker, Age, Salary); navigation.navigate("AfterLoginScreen")}}
    />
    <Button
        title = "back"
        onPress = {() => navigation.navigate("AfterLoginScreen")} 
    />
    </View>
}
