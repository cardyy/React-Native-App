import React, {useState} from 'react';
import * as Font from 'expo-font';
import Login from './components/login/Login';
import {AppLoading} from 'expo';
import Navigator from './routes/drawer';
import GlobalState from './context/GlobalState';


const getFonts = ()=> Font.loadAsync({
		'poppins-regular':require('./assets/fonts/Poppins-Regular.ttf')
});

export default function App() {
	const [fontsLoaded, setFontsLoaded] = useState(false);
	
	if(fontsLoaded){
	 return (
	 <GlobalState>
    < Login />
    </GlobalState>
  );	
	}  else {
		return(
		<AppLoading
		startAsync = {getFonts}
		onFinish={()=> setFontsLoaded(true)}
		/>
			
		)
	}
 
}


 