import * as React from 'react';
import { View, StyleSheet, Image, FlatList } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import CustomText from '/Users/lindsayclifford/Desktop/REACT-APPS/BEST-BEATS/best-beats/src/components/CustomText.js';
import Playlists from '/Users/lindsayclifford/Desktop/REACT-APPS/BEST-BEATS/best-beats/src/components/Playlists.js';

export default function ProfileScreen({ navigation, route }) {
    //const { userData } = route.params; // Extracting user data from route params
    // Dummy data for the FlatList
    const playlistsData = [
        { id: 1, name: 'Playlist 1', description: 'Description 1' },
        { id: 2, name: 'Playlist 2', description: 'Description 2' },
        { id: 3, name: 'Playlist 3', description: 'Description 3' },
        { id: 4, name: 'Playlist 4', description: 'Description 4' },
        { id: 5, name: 'Playlist 5', description: 'Description 5' },
        { id: 6, name: 'Playlist 6', description: 'Description 6' },
        { id: 7, name: 'Playlist 7', description: 'Description 7' },
        { id: 8, name: 'Playlist 8', description: 'Description 8' },
        { id: 9, name: 'Playlist 9', description: 'Description 9' },
        // Add more data as needed
    ];


    return (
        <LinearGradient
            colors={['#9E00FF', '#0E0017']}
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 0.6 }}
            style={styles.gradient}
        >
            <View style={styles.container}>

                {/* Middle Section */}
                <View style={styles.main}>
                    <View style={styles.imageContainer}>
                        <Image style={styles.image} source={require("/Users/lindsayclifford/Desktop/REACT-APPS/BEST-BEATS/best-beats/assets/PFP.png")} />
                        <CustomText style={styles.displayName} color="white" weight="bold">{"userData.display_name"}</CustomText>
                        <CustomText style={styles.email} color="gray">{"userData.email"}</CustomText>
                    </View>

                    <View style={styles.middleSectionTextContainer}>

                        <View style={styles.middleSectionText}>
                            <CustomText style={styles.bottomtext} color="white">18</CustomText>
                            <CustomText style={styles.toptext} color="white">Following</CustomText>
                        </View>

                        <View style={styles.middleSectionText}>
                            <CustomText style={styles.bottomtext} color="white">73</CustomText>
                            <CustomText style={styles.toptext} color="white">Followers</CustomText>
                        </View>

                        <View style={styles.middleSectionText}>
                            <CustomText style={styles.bottomtext} color="white">28</CustomText>
                            <CustomText style={styles.toptext} color="white">Playlists</CustomText>
                        </View>

                    </View>
                    {/* End of Middle Section */}

                    {/* Bottom Section */}
                    <View style={styles.bottomSectionText}>
                        <CustomText style={styles.bottomSectionHeading} color="white">Playlists</CustomText>
                    </View>
                    {/* End of Bottom Section */}

                </View>

                {/* FlatList Container */}
                <View style={styles.flatListContainer}>
                    {/* FlatList for Playlists */}
                    <FlatList
                        data={playlistsData} // Pass your data array here
                        renderItem={({ item }) => (
                            <Playlists name={item.name} description={item.description} />
                        )}
                        keyExtractor={(item) => item.id.toString()} // Use the item's ID as the key
                    />
                </View>
            </View>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flex: 1,
        alignItems: 'flex-start', // Align content to the start (top) of the container
        justifyContent: 'flex-start', // Align content to the start (top) of the container
        paddingTop: 30, // Add padding to further move content up
    },
    gradient: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    main: {
        marginTop: 0,

    },
    imageContainer: {
        justifyContent: "center",
        alignItems: "center",
    },
    image: {
        marginTop: 50, // Top of top section 
        width: 130,
        height: 130,
        borderRadius: 90,   // Circle radius 
        marginBottom: 30,
    },
    displayName: {
        fontSize: 16,
        color: "white",
        marginBottom: 5,
    },
    email: {
        fontSize: 16,
        color: "gray",
        marginBottom: 20,
    },
    middleSectionTextContainer: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        marginTop: 20,
    },
    middleSectionText: {
        justifyContent: "center",
        alignItems: "center",
        marginLeft: 30, // Add margin to create space between texts
        marginRight: 30,
    },
    toptext: {
        color: "white",
    },
    bottomtext: {
        color: "white",
    },
    bottomSectionText: {
        marginTop: 20,
        marginRight: 260,
        justifyContent: "center",
        alignItems: "center",

    },
    bottomSectionHeading: {
        fontSize: 20,
        color: "white",
        paddingBottom: 20,
    },
    flatListContainer: {
        flex: 1,
        width: '100%',
        paddingHorizontal: 20, // Add horizontal padding
    },
});

