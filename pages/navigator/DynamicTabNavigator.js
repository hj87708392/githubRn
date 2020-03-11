import React from 'react';
import PopularPage from '../../pages/PopularPage';
import TrendingPage from '../../pages/TrendingPage';
import FavoritePage from '../../pages/FavoritePage';
import MyPage from '../../pages/MyPage';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {createAppContainer} from 'react-navigation';
import {BottomTabBar, createBottomTabNavigator} from 'react-navigation-tabs';

const TABS = {//在这里配置页面的路由
    PopularPage: {
        screen: PopularPage,
        navigationOptions: {
            tabBarLabel: '最热',
            tabBarIcon: ({tintColor, focused}) => (
                <MaterialIcons
                    name={'whatshot'}
                    size={26}
                    style={{color: tintColor}}

                />
            ),
        },
    },
    TrendingPage: {
        screen: TrendingPage,
        navigationOptions: {
            tabBarLabel: '趋势',
            tabBarIcon: ({tintColor, focused}) => (
                <Ionicons
                    name={'md-trending-up'}
                    size={26}
                    style={{color: tintColor}}

                />
            ),
        },
    },
    FavoritePage: {
        screen: FavoritePage,
        navigationOptions: {
            tabBarLabel: '收藏',
            tabBarIcon: ({tintColor, focused}) => (
                <MaterialIcons
                    name={'favorite'}
                    size={26}
                    style={{color: tintColor}}

                />
            ),
        },
    },
    MyPage: {
        screen: MyPage,
        navigationOptions: {
            tabBarLabel: '我的',
            tabBarIcon: ({tintColor, focused}) => (
                <Entypo
                    name={'user'}
                    size={26}
                    style={{color: tintColor}}

                />
            ),
        },
    },
};

export default class DynamicTabNavigator extends React.Component {
    constructor(props) {
        super(props);
        console.disableYellowBox = true;//关闭黄色警告弹框
    }

    _tabNavigator() {
        if (this.Tabs) {
            return this.Tabs;
        }
        const {PopularPage, TrendingPage, FavoritePage, MyPage} = TABS;
        const tabs = {PopularPage, TrendingPage, FavoritePage, MyPage};
        PopularPage.navigationOptions.tabBarLabel = '最热';//动态修改Tab属性
        return this.Tabs = createAppContainer(createBottomTabNavigator(
            tabs, {
                tabBarComponent: TabBarComponent
                // props => {
                //     return <TabBarComponent theme={this.theme} {...props}/>;
                // },
            },
        ));
    }

    render() {
        const Tab = this._tabNavigator();
        return <Tab/>;
    }

}

class TabBarComponent extends React.Component {
    constructor(props){
        super(props);
        console.log(props)
        this.theme={
            tintColor:props.activeTintColor,
        }
    }
    render() {
        console.log(this.props)
        const {routes,index}=this.props.navigation.state;
        if(routes[index].params){
            const {theme}=routes[index].params
            this.theme=theme;
        }
        return <BottomTabBar
            {...this.props}
            activeTintColor={this.theme.tintColor}
        />;
    }

}

// const mapStateToProps = state => ({
//     theme: state.theme.theme,
// });
// export default connect(mapStateToProps)(DynamicTabNavigator);