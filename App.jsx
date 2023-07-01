import { StyleSheet, Text, View } from 'react-native';
import Title from './src/components/Title';
import Header from './src/components/Header';
import User from './src/components/User';
import Users from './src/components/Users';

 const App = () => {
  return (
    <View style={styles.container}>
      <Header/>
      <Title text="Dummy Title" color="red"  numberOfLines={1}/>
      <Title text="Dummy Title2" color="pink" numberOfLines={2}/>
      <Title text="Dummy Title3" color="orange" numberOfLines={3}/>
      <User data={{id: 1, name: "Mehmet"}} />
      <Users data={['Ahmet', 'Mehmet', 'Ayşe', 'Fatma']}/>
      <View style={[styles.box, styles.box1]}>
        <Text style={styles.txt}>React Native</Text>
      </View>
      <View style={styles.box}>
        <Text style={styles.txt}>React Native</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 200,
    height: 200,
    backgroundColor: 'black',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  box1: {
    backgroundColor: 'blue' 
  },
  txt: {
    color: '#fff',
    backgroundColor: 'gray',
    fontSize: 30,
    width: '100%',
    textAlign: 'center',
  }
});

export default App;
