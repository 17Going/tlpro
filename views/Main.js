import React, { Component } from 'react';

import {
    View,
    Text,
    FlatList
} from 'react-native';

import {mainStyle as style} from '../assets/Styles';


export default class Main extends Component {
    render() {
        return (
            <FlatList
                data={[
                    {key: 'Devin'},
                    {key: 'Jackson'},
                    {key: 'James'},
                    {key: 'Joel'},
                    {key: 'John'},
                    {key: 'Jillian'},
                    {key: 'Jimmy'},
                    {key: 'Julie'},
                ]}
              renderItem={({item}) => <Text style={style.listItem}>{item.key}</Text>}
            >

            </FlatList>
        )
    }
}