import { Text, StyleSheet, View, Button, ActivityIndicator} from 'react-native'
import React, {useState} from 'react'

export default function ActivityScreens () {
    const [loading, setLoading] = useState(false);

    const startLoading = () => {
        setLoading(true);
        setTimeout(()=> setLoading(false), 3000);
    };
    if(loading){
        return(
       <View>
        <View>
          <ActivityIndicator size="large" color="#f6c71dff" animating={true}hidesWhenStopped={true}
          
          />
          <Text style={styles.Text}>Cargando...</Text>
        </View>
       </View>
        );
    }
    return (
      <View style={styles.container}> 
       <Text style={styles.Titulo}>ActivityIndicator</Text>
        <Button 
        title="Mostrar indicador de carga"
        onPress={startLoading}
        />
      </View>
    );
  }

const styles = StyleSheet.create({
container: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
    backgroundColor: '#25a0a0ff',
  },
  title: {
    fontSize: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  loaderContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    marginTop: 10,
    fontSize: 20,
  },


})