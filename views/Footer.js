import React, {Component} from 'react';
import TabNavigator from 'react-native-tab-navigator';
import {
    View,
    Text
} from 'react-native';

import { HomeIcon } from '../assets/Svg';
import {footerStyle as style} from '../assets/Styles';

export default class Footer extends Component{
    render() {
        return (
            <View style={style.footer}>
                <TabNavigator>
                    <TabNavigator.Item
                        selected={true}
                        title="Home"
                        renderIcon={() => <HomeIcon color={'#ccc'}/>}
                        renderSelectedIcon={() => <HomeIcon color={'#47c01b'}/>}
                        badgeText="1"
                        onPress={() => this.setState({ selectedTab: 'home' })}>
                        <Text>ssss</Text>
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={false}
                        title="Other"
                        renderIcon={() => <Text>Other</Text>}
                        renderSelectedIcon={() => <Text>home</Text>}
                        badgeText="1"
                        onPress={() => this.setState({ selectedTab: 'Other' })}>
                        <Text>aaaa</Text>
                    </TabNavigator.Item>
                </TabNavigator>
            </View>
        )
    }   
}