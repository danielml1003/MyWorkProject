
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View } from 'react-native';


 export default class getEmpFromApi extends React.Component{
  constructor(props) {
    super(props);




  };
  


  // export default App = () => {
  //   const [isLoading, setLoading] = useState(true);
  //   const [data, setData] = useState([]);
  
  //   useEffect(() => {
  //     fetch('https://reactnative.dev/movies.json')
  //       .then((response) => response.json())
  //       .then((json) => setData(json.movies))
  //       .catch((error) => console.error(error))
  //       .finally(() => setLoading(false));
  //   }, []);
  
  //   return (
  //     <View style={{ flex: 1, padding: 24 }}>
  //       {isLoading ? <ActivityIndicator/> : (
  //         <FlatList
  //           data={data}
  //           keyExtractor={({ id }, index) => id}
  //           renderItem={({ item }) => (
  //             <Text>{item.title}, {item.releaseYear}</Text>
  //           )}
  //         />
  //       )}
  //     </View>
  //   );
  // };
}





// fetch('http://dummy.restapiexample.com/api/v1/create', {
// method: 'POST',
// headers:{
//   'Content-Type': 'application/json'
// },
// data: JSON.stringify({
//   name: 'test',
//   salary: '123',
//   age: '23',
//   id: '25'

// })

// }).then(res => {
// return res.json()
// })
// .then(data => console.log(data))
// .catch(error => console.log('ERROR'))