import { StyleSheet } from 'react-native';
import { width, height} from '../utils/index';
 
export const commonStyle = StyleSheet.create({
    header:{
        height: height(150),
        backgroundColor: '#373a3f',
        paddingRight: width(70)
    },
    headerTools: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
        flexDirection: 'row'
    },
    headerIcon:{
        alignItems: 'center',
        justifyContent: 'center',
        width: height(150),
        height: height(150)
    }
});

export const homeStyle = StyleSheet.create({
    
});

export const mainStyle = StyleSheet.create({
    listItem:{
        height: height(400)
    }
});

export const footerStyle = StyleSheet.create({
    footer:{
        // flex: 1,
        height: height(160),
        backgroundColor: '#fff',
        // position: 'absolute',
        // bottom: 0
    }
});