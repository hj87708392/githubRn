import React, {Component} from 'react';
import {View, Text, StyleSheet,SafeAreaView,Button,FlatList,RefreshControl} from 'react-native';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
import {createAppContainer, ThemeColors} from 'react-navigation';
import NavigationUtil from '../navigator/NavigationUtil';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {connect} from 'react-redux';
import actions from '../store/action';
const URL = 'https://api.github.com/search/repositories?q=';
const QUERY_STR = '&sort=stars';
const THEME_COLOR='red'
export default class PopularPage extends Component {
    constructor(props) {
        super(props);
        this.tabNames = ['Java', 'Android', 'iOS', 'React', 'React Native', 'PHP'];
    }

    _genTabs() {
        const tabs = {};
        this.tabNames.forEach((item, index) => {
            tabs[`tab${index}`] = {
                screen: props => <PopularTabPage {...props} tabLabel={item}/>,
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
            </SafeAreaView>
        );
    }

}

class PopularTab extends Component {
    constructor(props){
        super(props);
        const {tabLabel} =this.props;
        this.storeName=tabLabel;
    }
    componentWillMount(){
        const {onLoadPopularData}=this.props;
        const url = this.genFetchUrl(this.storeName);
        onLoadPopularData(this.storeName,url)
    }
    genFetchUrl(key) {
        return URL + key + QUERY_STR;
    }
    renderItem(data) {
        const item=data.item;
        return (
            <View>
                    <Text>{JSON.stringify(item)}</Text>
            </View>
        )
    }
    render() {
        const {popular}=this.props;
        let store=popular[this.storeName];
       
        if(!store){
            store={
                items:[],
                isLoading:false
            }
        }
        console.log(store.item)
        return (
            <View  style={styles.container}>
                <FlatList
                    data={store.items} 
                    keyExtractor={items => "" + items.id}
                    renderItem={data => this.renderItem(data)}
                    refreshControl={
                        <RefreshControl
                            title={'Loading'}
                            titleColor={THEME_COLOR}
                            colors={[THEME_COLOR]}
                            refreshing={store.isLoading}
                            onRefresh={() => this.loadData()}
                            tintColor={THEME_COLOR}
                        />
                   }
                />
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
const mapStateToProps = state => ({
    popular: state.popular
});
const mapDispatchToProps = (dispatch) => {
    return {
        onLoadPopularData(storeName,url){
            dispatch(actions.onLoadPopularData(storeName,url))
        }
    }
    //onThemeChange: theme => dispatch(actions.onThemeChange(theme)),
};
const PopularTabPage = connect(mapStateToProps, mapDispatchToProps)(PopularTab);
// export default connect(mapStateToProps, mapDispatchToProps)(PopularTab);