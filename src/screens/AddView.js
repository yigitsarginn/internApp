import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Modal,
} from 'react-native';
import React, {useState} from 'react';

const AddView = ({modalVisible, setModalVisible, handleModal}) => {
  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.modalView}>
          <View style={styles.header}>
            <TouchableOpacity onPress={handleModal}>
              <Image
                style={styles.icon}
                source={require('../assets/icons/close.png')}
              />
            </TouchableOpacity>
            <Text style={styles.title}>Start a post</Text>
            <TouchableOpacity style={styles.postButton}>
              <Text style={{color: '#000', fontWeight: '600'}}>Post</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.profileDetails}>
            <Image
              style={styles.profileIcon}
              source={require('../assets/icons/pp.png')}
            />
            <TouchableOpacity style={styles.borderButton}>
              <Image
                style={styles.groupIcon}
                source={require('../assets/icons/group.png')}
              />
              <Text style={styles.borderText}>Yigit Sargin</Text>
              <Image
                style={[styles.groupIcon, {marginLeft: 5, marginTop: 2}]}
                source={require('../assets/icons/dropdown.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.borderButton}>
              <Image
                style={styles.groupIcon}
                source={require('../assets/icons/group.png')}
              />
              <Text style={styles.borderText}>Public</Text>
              <Image
                style={[styles.groupIcon, {marginLeft: 5, marginTop: 2}]}
                source={require('../assets/icons/earth.png')}
              />
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default AddView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    width: '100%',
    alignSelf: 'center',
    height: '100%',
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 9,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },

  header: {
    width: '100%',
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  icon: {
    width: 24,
    height: 24,
    opacity: 0.4,
  },
  title: {
    fontSize: 20,
    opacity: 0.4,
  },
  postButton: {
    width: 70,
    height: 35,
    backgroundColor: '#8e8e8e',
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileDetails: {
    width: '100%',
    flexDirection: 'row',
  },
  profileIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  groupIcon: {
    width: 20,
    height: 20,
    marginBottom: 5,
  },
  borderButton: {
    marginLeft: 20,
    borderWidth: 0.5,
    padding: 10,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    height: 35,
    opacity: 0.5,
  },
  borderText: {
    height: 20,
    fontWeight: '600',
    marginLeft: 5,
  },
});
