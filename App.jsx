import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Button,
  TouchableOpacity,
  TouchableHighlight,
  Image
} from "react-native";
import Title from "./src/components/Title";
import Header from "./src/components/Header";
import User from "./src/components/User";
import Users from "./src/components/Users";

const image = { uri: "https://legacy.reactjs.org/logo-og.png" };

const App = () => {
  const handleClick = () => {
    alert("Click");
  };
  return (
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <View style={styles.container}>
        <Header />
        <Title
          text="Dummy Title"
          color="red"
          numberOfLines={1}
          isVisible={true}
        />
        <Title text="Dummy Title2" color="pink" numberOfLines={2} />
        <Title text="Dummy Title3" color="orange" numberOfLines={3} />
        <User data={{ id: 1, name: "Mehmet" }} />
        <Users data={["Ahmet", "Mehmet", "Ayşe", "Fatma"]} />
        <View style={[styles.box, styles.box1]}>
          <Text style={styles.txt}>React Native</Text>
          <Image 
            style={{width: "100%", height: 180,}}
            source={require("./assets/icon.png")}
          />
        </View>
        <View style={styles.box}>
          <Text style={styles.txt}>React Native</Text>
        </View>
      </View>
      <Button title="Hello" onPress={handleClick} />
      <TouchableOpacity onPress={handleClick}>
        <Text>Helloooo</Text>
      </TouchableOpacity>
      <TouchableHighlight
        activeOpacity={0.6}
        underlayColor="red"
        onPress={handleClick}
      >
        <Text>Helloooo</Text>
      </TouchableHighlight>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  box: {
    width: 200,
    height: 200,
    backgroundColor: "black",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  box1: {
    backgroundColor: "blue",
  },
  txt: {
    color: "#fff",
    backgroundColor: "gray",
    fontSize: 30,
    width: "100%",
    textAlign: "center",
  },
});

export default App;
