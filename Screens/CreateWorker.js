import React, { useState }  from 'react';
import { styles } from '../Style/style';
import { View, Text, TextInput, Button} from 'react-native';



export const CreateWorker = ({ navigation }) => {

    const [Worker, setWorker ] = useState('')
    const [WorkerLN, setWorkerLN] = useState('');
    const [Age, setAge] = useState('');
    const [Salary, setSalary] = useState('');
    

    return <View style={styles.container}>
     
     <Text style={styles.title}> put your workers here! </Text>
     <TextInput
        style = {styles.input} 
        placeholder = "Worker"
        value={Worker}
        onChangeText = {(Worker) => setWorker (Worker)}>
     </TextInput>
     <TextInput 
     style = {styles.input}
     placeholder = "Worker last name"
     value = {WorkerLN}
     onChangeText = {(WorkerLN) => setWorkerLN (WorkerLN)}
     ></TextInput>
     <TextInput 
     style = {styles.input}
     placeholder = "Age"
     value = {Age}
     onChangeText = {(Age) => setAge (Age)}
     ></TextInput>
     <TextInput 
     style = {styles.input}
     placeholder = "Salary"
     value = {Salary}
     onChangeText = {(Salary) => setSalary (Salary)}
     ></TextInput>
   
     <Button
      title = "import Worker"
      onPress = {() =>
         {fetch('http://dummy.restapiexample.com/api/v1/create', {
            method: 'POST',
            headers:{
              'Content-Type': 'application/json'
            },
            data: JSON.stringify({
              name: Worker,
              salary: Salary,
              age: Age,
            })
            }).then(res => {
            return res.json()
            })
            .then(data => console.log(data))
            .catch(error => console.log('ERROR')); navigation.navigate("AfterLoginScreen")}
      }
     />
     <Button
        title = "back"
        onPress = {() => {navigation.navigate("AfterLoginScreen")}}
     />
    </View>
};