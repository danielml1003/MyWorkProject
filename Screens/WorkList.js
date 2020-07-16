import React, { useState , useEffect}  from 'react';
import { styles } from '../Style/style';
import { View, Text, ActivityIndicator, FlatList, TextInput, Button} from 'react-native';
import { AfterLoginScreen } from './AfterLoginScreen';

export const WorkerList = ({ navigation }) => {

    const [data, setData] = useState([]);
    const [worker, setWorker] = useState([]);

    useEffect(() => {
        fetch('http://dummy.restapiexample.com/api/v1/employees')
        .then((response) => response.json())
        .then((json) => setData(json.data))
        .catch((error) => console.error(error))
    }, []);

    return (
      <View style={styles.container}>

       
          <FlatList
            data={data}
            keyExtractor={({ id }) => id}
            renderItem={({ item }) => ( 
                <Text style = {styles.title}> {item.id}, {item.employee_name}, {item.employee_age}, {item.employee_salary} </Text>
            )}
            onPress={(id) => {SelectedItem(id)}}
          />
        
        <Button
        title = "back"
        onPress = {() => {navigation.navigate("AfterLoginScreen")}}
        />

      </View>
    );  
};