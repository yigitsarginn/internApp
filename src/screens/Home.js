import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import AddView from './AddView';
import CreateModal from './CreateModal';

const Home = () => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [createModalVisible, setCreateModalVisible] = useState(false);

  const handleModal = () => {
    setModalVisible(!modalVisible);
  };
  const handleCreateModal = () => {
    setCreateModalVisible(!createModalVisible);
    console.log(createModalVisible);
  };

  return (
    <>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity>
            <Image
              style={styles.userIcon}
              source={require('../assets/icons/pp.png')}
            />
          </TouchableOpacity>
          <View style={styles.searchBox}>
            <Image
              style={styles.icon}
              source={require('../assets/icons/search.png')}
            />
            <TextInput placeholder="Search" style={styles.textInput} />
          </View>
          <TouchableOpacity onPress={handleCreateModal}>
            <Image
              style={styles.icon}
              source={require('../assets/icons/message.png')}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={handleModal} style={styles.editBox}>
          <Image source={require('../assets/icons/edit.png')} />
          <Text style={{marginLeft: 15, fontSize: 16, opacity: 0.4}}>
            Start a post
          </Text>
        </TouchableOpacity>
        <View style={styles.postType}>
          <TouchableOpacity style={styles.postTab}>
            <Image
              style={styles.iconGallery}
              source={require('../assets/icons/gallery.png')}
            />
            <Text style={styles.postTabText}>Photo/Video</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.postTab}>
            <Image
              style={styles.iconGallery}
              source={require('../assets/icons/event.png')}
            />
            <Text style={styles.postTabText}>Event</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.postTab}>
            <Image
              style={styles.iconGallery}
              source={require('../assets/icons/event.png')}
            />
            <Text style={styles.postTabText}>Write</Text>
          </TouchableOpacity>
        </View>
      </View>
      <AddView
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        handleModal={handleModal}
      />
      <CreateModal
        createModalVisible={createModalVisible}
        setCreateModalVisible={setCreateModalVisible}
      />
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 60,
    width: '100%',
    elevation: 5,
    backgroundColor: '#FFF',
    shadowColor: '#000',
    shadowRadius: 3,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    shadowOffset: {
      x: 1,
      y: 1,
    },
  },
  userIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  searchBox: {
    flexDirection: 'row',
    width: '75%',
    height: '65%',
    backgroundColor: '#F4F4F4',
    borderRadius: 10,
    alignItems: 'center',
    // paddingHorizontal: 5,
  },
  icon: {
    width: 25,
    height: 25,
    marginLeft: 5,
    opacity: 0.5,
  },
  textInput: {
    marginLeft: 5,
    fontSize: 16,
  },
  editBox: {
    width: '100%',
    height: 50,
    backgroundColor: '#EFEFEF',
    flexDirection: 'row',

    borderTopWidth: 0.5,
    borderTopColor: '#D8D8D8',

    borderBottomWidth: 0.5,
    borderBottomColor: '#D8D8D8',
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    paddingLeft: 20,
  },
  postType: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    width: '100%',
    height: 50,
    borderBottomWidth: 0.5,
    borderbottomColor: '#D8D8D8',
    backgroundColor: '#FFFFFF',
  },
  postTab: {
    height: 40,
    justifyContent: 'center',
    alignitems: 'center',
    flexDirection: 'row',
  },
  iconGallery: {
    width: 24,
    height: 24,
    alignSelf: 'center',
  },
  postTabText: {
    marginLeft: 10,
    opacity: 0.4,
    fontSize: 12,
    alignSelf: 'center',
  },
});

export default Home;
