import { useNavigation, useFocusEffect } from '@react-navigation/core';
import React, { useCallback, useEffect, useState } from 'react';
import {
  Text,
  View,
  FlatList,
  StyleSheet,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import ListItem from '../components/ListItem.component';
import { appendFetchHomeData, appendSetHomeData, getHomeData, setHomeData } from '../store/actions/home.action';

export default function HomeScreen() {
    const list_data = useSelector(state => state.home_data);
    const dispatch = useDispatch();
    const navigation = useNavigation();
    const [page, setPage] = useState(1);
    const [updatingTime, setUpdatingTime] = useState(null);

    const getList = (number = 1) => {
        setUpdatingTime(new Date());
        fetch(`https://api.github.com/events?per_page=25&page=${number}`).then(res => {
            return res.json();
        }).then(result => {
            let payload = {
                data: result,
                error: false,
            }
            if (result.message) {
                payload = {
                    data: [],
                    error: result.message,
                }
            }
            dispatch(appendSetHomeData(payload))
        })
    }
    useFocusEffect(useCallback(() => {
            setPage(1);
            dispatch(getHomeData())
            getList(1);
        }, [navigation])
    )

    useEffect(() => {
        if (page == 1) {
            dispatch(getHomeData())
        } else {
            dispatch(appendFetchHomeData())
        }
        getList(page);
    }, [page])

    const itemPress = (data) => () => {
        navigation.navigate('Details', { userData: data })
    }
    const listItem = ({ item }) => {
        return <ListItem data={item} onPress={itemPress}/>
    }
    const keyExtractor = (item, index) => `${index}`;

    const appendData = () => {
        if (!list_data.error) {
            setPage(page + 1);
        }
    }

    const refreshList = () => {
        console.log(new Date(), updatingTime, new Date() - updatingTime);
        if ((new Date() - updatingTime) > 15000) {
            dispatch(getHomeData())
            getList();
        }
    }

    return (
        <View style={{ flex: 1 }}>
            <FlatList
                data={list_data.data || []}
                renderItem={listItem}
                keyExtractor={keyExtractor}
                contentContainerStyle={styles.content}
                onEndReached={appendData}
                onRefresh={refreshList}
                refreshing={list_data.fetching}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    content: {
        padding: 20,
    },
})