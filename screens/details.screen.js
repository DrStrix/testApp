import React from 'react';
import {
    Image,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from 'react-native';

export default function DetailsScreen({ route }) {
    console.log('details', route.params.userData);
    const { userData } = route.params; 
    return (
        <ScrollView
            contentContainerStyle={styles.content}
        >
            <Image
                style={styles.img}
                source={{
                    uri: userData.actor.avatar_url,
                }}
            />
            <View style={styles.textContainer}>
                <Text style={styles.label}>Логин:</Text>
                <Text>{userData.actor.display_login}</Text>
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.label}>Имя репозитория:</Text>
                <Text>{userData.repo.name}</Text>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    content: {
        padding: 20,
    },
    img: {
        width: '100%',
        height: 300,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
        borderRadius: 5,
    },
    textContainer: {
        flex: 1,
        marginBottom: 20,
    },
    label: {
        color: 'black',
    }
})