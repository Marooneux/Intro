import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {useState , useEffect} from 'react';
import fetch from './request';

export default function App() {

  const TriviaComponent = () => {
    const [trivia, setTrivia] = useState({});  // State to store the trivia object

    useEffect(() => {
        const getTrivia = async () => {
            const result = await fetch();
            if (result && result.length > 0) {
                setTrivia(result[0]); // Assuming the first trivia object is needed
            }
        };

        getTrivia();
    }, []); // Empty dependency array means it runs once when the component mounts
  return (
    <View style={styles.container}>
      <Text>Question: {trivia.question}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})};
