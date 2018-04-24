import React, {Component} from 'react';
import {
    View,
    Text,
    TouchableHighlight
} from 'react-native';

import {commonStyle as style} from '../assets/Styles';
import {Add, Search} from '../assets/Svg';

export default class Header extends Component{
    search() {
        alert(1)
    }
    create() {
        alert(2)
    }
    render() {
        return (
            <View style={style.header}>
                <View style={style.headerTools}>
                    <TouchableHighlight onPress={this.search} >
                        <View style={style.headerIcon}>
                            <Search color={'#fff'}></Search>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={this.create} >
                        <View style={style.headerIcon}>
                            <Add color={'#fff'}></Add>
                        </View>
                    </TouchableHighlight>
                </View>
            </View>
        );
    }
}