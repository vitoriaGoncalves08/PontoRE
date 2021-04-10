import{StyleSheet}from 'react-native';

const css = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    container2:{
        flex: 1,
        flexDirection:'row',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button_home:{
      margin:15
    },
    img_home:{
      resizeMode:'contain',
      width:150,
    },
    darkbg:{
      backgroundColor:'#333'
    },
    login__logomarca:{
      marginBottom:10
    },
    login__msg:(text='none') =>({
      fontWeight:"bold",
      fontSize:22,
      color:"red",
      marginBottom: 10,
      display: text
    }),
    login__form:{
      width:"80%"
    },
    login__input:{
      padding: 0,
      marginBottom: 5,
    },
    login__button:{
      padding:12,
      backgroundColor:'#649597',
      alignSelf:'center',
      borderRadius: 5
    },
    login__buttonText:{
      fontWeight:"bold",
      fontSize:22,
      color:"#333"
    }

  });
  export{css};
  