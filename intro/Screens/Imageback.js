import { Text, StyleSheet, View, ImageBackground,
  Animated,Easing} from 'react-native'
import React,{useEffect,useState} from 'react';


export default function backimagenScreen() {
  const[cargando,setcargador]=useState(true);
  const desvanecido = new Animated.Value(1);

  useEffect(()=>{
      const timer=setTimeout(()=>{
        Animated.timing(desvanecido,{
          toValue:0,
          duration: 800,
          easing: Easing.out(Easing.ease),
        }).start(()=> setcargador(false));

      },2000);
      return () => clearTimeout(timer)
    },[]);

  if(cargando){
    return(
      <Animated.View style={[styles.splashCont, {opacity:desvanecido}]}>
        <ImageBackground style={styles.splashImage}
        source={require('../assets/Fondo1.jpg')}
        resizeMode='contain'
        >
          <Text style={styles.splashtext}>Cargando...</Text>
        </ImageBackground>
      </Animated.View>
    );
  }

    return (
      <ImageBackground style={styles.Background}
      source={require('../assets/Fondo2.jpg')}
      resizeMode='cover'
      >
        <View style={styles.textconterin}>
        <Text style={styles.texto}>Bienvenido a mi app</Text>
        </View>

      </ImageBackground>

        
    )
  }


const styles = StyleSheet.create({
  Background:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    width:'100%',
    height: '100%',
  },
  texto:{
    color: '#00d4d0ff',
    fontWeight:'bold',
    fontSize:35,
  },
  splashCont:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    padding: 50,
  },
  splashImage:{
    flex:1,
    width:'100%',
    justifyContent:'center',
    alignItems:'center',
  },
  splashtext:{
    position:'absolute',
    marginBottom:50,
    fontSize:30,
    color:'#97e9ffff'
  },
  textconterin:{
    backgroundColor:'black',
    padding:5,
  },
});