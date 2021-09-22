import React from "react";
import { Text, View, FlatList, TouchableOpacity, Image, StyleSheet} from 'react-native';
import { Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import tw from "tailwind-react-native-classnames";
import { selectOrigin } from '../slices/navSlice';
import { useSelector } from 'react-redux';
 

const data= [
    { 
        id: '123',
        title: 'Get a ride',
        image: 'https://links.papareact.com/3pn',
        screen: 'MapScreen',
    },
    { 
        id: '456',
        title: 'Order Food',
        image: 'https://links.papareact.com/28w',
        screen: 'EatScreen',
    }
];
const NavOptions = () => {
   const navigation = useNavigation();
   const origin = useSelector(selectOrigin);

    return (
        <FlatList 
         data={data}
         horizontal
         keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
                <TouchableOpacity
                    onPress= {() => navigation.navigate(item.screen)}
                    style={tw`p-2 pl-8 pb-6 pt-2 bg-gray-200  m-2 w-60`}
                    disabled={!origin}
                >
                   <View style={tw `${!origin && 'opacity-20'}`}>
                       <Image style={ {width: 90, height: 120, resizeMode:"contain"}}
                            source= {{ uri: item.image }}  
                       />
                        <Text style={tw `mt-2 text-lg font-semibold`}>{item.title}</Text>
                        <Icon style={tw `p-2 bg-black rounded-full w-10 mt-4`} 
                        name="arrow-right" size={20} color="white" type="entypo" />   
                   </View>
                </TouchableOpacity>
            )}
        />

        
        
    );
};

export default NavOptions;

const styles = StyleSheet.create({

})  


