import React, { useState , useEffect}  from 'react';
import { View, Text, TextInput, Button, FlatList} from 'react-native';
import { styles } from '../Style/style';



export const FindById = ({ navigation }) => {


    
        const [data, setData] = useState([]);
        const [worker, setWorker] = useState([]);
        const [selector, setSelector] = useState(0);
    
        useEffect(() => {
            fetch('http://dummy.restapiexample.com/api/v1/employees')
            .then((response) => response.json())
            .then((json) => setData(json.data))
            .catch((error) => console.error(error))
        }, []);
        
        const deleteData = async (id) => {
            console.log(id)
            fetch('http://dummy.restapiexample.com/api/v1/delete/' + id.toString() ,{
                method: 'DELETE',
                headers: {
                    'Content-Type' : 'application/json'
                },
                
                body: JSON.stringify(id)
            })
            .then(res => {
            return res.json()
            })
            .then(data=> console.log(data))
            .catch(error => console.log('ERROR', error))
          }
        return (
          <View style={styles.container}>
              <FlatList
                data={data}
                keyExtractor={({ id }) => id}
                renderItem={({ item }) => ( 
                    <View>
                        <Text style = {styles.title}> {item.employee_name}, {item.employee_age}, {item.employee_salary} </Text>
                        <Button title="delete" onPress={() => deleteData(item.id)} />
                    </View>
                )}
              />           

            <Button
            title = "back"
            onPress = {() => {navigation.navigate("AfterLoginScreen")}}
            />
    
          </View>
        );  
    


}