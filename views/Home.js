import React , {Component} from 'react';
import {
    View,
    Text
} from 'react-native';
import {homeStyle as style} from '../assets/Styles';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

export default class Home extends Component{
    render() {
        return (
            <View>
                <Header/>
                <Footer/>
            </View>
        )
    }
}