import React, {Component} from 'react';
import {View, Text, StyleSheet,SafeAreaView,Button} from 'react-native';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
import {createAppContainer} from 'react-navigation';
import NavigationUtil from '../navigator/NavigationUtil';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {connect} from 'react-redux';
import actions from '../store/action';
class PopularPage extends Component {
    constructor(props) {
        super(props);
        this.tabNames = ['Java', 'Android', 'iOS', 'React', 'React Native', 'PHP'];
    }

    _genTabs() {
        const tabs = {};
        this.tabNames.forEach((item, index) => {
            tabs[`tab${index}`] = {
                screen: props => <PopularTab {...props} tabLabel={item}/>,
                navigationOptions: {
                    title: item,
                },

            };
        });
        return tabs;
    }

    render() {
        const {navigation} =this.props;
        const TabNavigator = createAppContainer(createMaterialTopTabNavigator(
            this._genTabs(),
            {
                tabBarOptions: {
                    tabStyle: styles.tabStyle,
                    upperCaseLabel: false,
                    scrollEnabled: true,
                    style: {
                        backgroundColor: '#4579FB',
                    },
                    indicatorStyle: styles.indicatorStyle,
                    labelStyle: styles.labelStyle,
                },
            },
        ));
        return (
            <SafeAreaView style={styles.container}>
                 <TabNavigator />
                <View>
                    <Button
                        title={'修改主题'}
                        onPress={() => this.props.onThemeChange('red')}
                        // onPress={() =>{
                        //     navigation.setParams({
                        //         theme:{
                        //             tintColor:'blue'
                        //         }
                        //     })
                        // } }
                    />
                </View>
               
            </SafeAreaView>
        );
    }

}

class PopularTab extends Component {
    render() {
        return (
            <View>
                <Text>PopularTab</Text>
                <Text onPress={
                    () => {
                        NavigationUtil.goPage({navigation:this.props.navigation}, 'DetailPage');
                    }
                }>跳转到详情页</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // marginTop: 130,
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    tabStyle: {
        minWidth: 50,
    },
    indicatorStyle: {
        height: 2,
        backgroundColor: 'white',
    },
    labelStyle: {
        fontSize: 13,
        marginTop: 6,
        marginBottom: 6,
    },
});
const mapDispatchToProps = dispatch => ({
    onThemeChange: theme => dispatch(actions.onThemeChange(theme)),
});
export default connect(null, mapDispatchToProps)(PopularPage);