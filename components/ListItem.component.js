import React from 'react';
import {
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

export default function ListItem(props) {
    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.user}
                activeOpacity={0.5}
                onPress={props.onPress(props.data)}
            >
                <Image
                    source={{ uri: props.data.actor.avatar_url }}
                    style={styles.img}
                />
                <View style={styles.textContainer}>
                    <Text ellipsizeMode={'tail'} numberOfLines={1}>{props.data.actor.display_login}</Text>
                    <Text ellipsizeMode={'tail'} numberOfLines={1}>{props.data.repo.name}</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#C4C4C4',
        borderRadius: 5,
        marginBottom: 10,
    },
    img: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: '#C4C4C4',
        marginRight: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    user: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    textContainer: {
        flex: 1,
    },
})