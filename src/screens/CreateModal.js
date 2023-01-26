import {
  StyleSheet,
  Text,
  View,
  Modal,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';

const CreateModal = ({createModalVisible, setCreateModalVisible}) => {
  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={createModalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setCreateModalVisible(!createModalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.headerWrapper}>
              <Text style={styles.headerText}>Edit Card</Text>
              <TouchableOpacity
                style={styles.closeWrapper}
                onPress={() => setCreateModalVisible(!createModalVisible)}>
                <Image
                  style={styles.closeButton}
                  source={require('../assets/icons/close.png')}
                />
              </TouchableOpacity>
            </View>
            <TextInput placeholder="Name" style={styles.inputStyle} />
            <TextInput placeholder="Title" style={styles.inputStyle} />
            <TextInput placeholder="Email" style={styles.inputStyle} />
            <TextInput placeholder="Mobile Phone" style={styles.inputStyle} />
            <TextInput placeholder="Business Phone" style={styles.inputStyle} />
            <TextInput placeholder="Address" style={styles.inputStyle} />
            <TouchableOpacity style={styles.updateButton}>
              <Text style={styles.updateText}>Update</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default CreateModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    width: '80%',
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
  button: {
    display: 'none',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  inputStyle: {
    borderRadius: 5,
    backgroundColor: '#rgba(0, 0, 0, 0.05)',
    width: '100%',
    height: 40,
    padding: 4,
    marginVertical: 9,
  },
  updateButton: {
    backgroundColor: '#088B61',
    height: 42,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    borderRadius: 5,
    marginTop: 20,
  },
  updateText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 12,
  },
  closeWrapper: {
    top: 0,
    right: 0,
    // backgroundColor: 'lightgray',
    width: 50,
    borderRadius: 5,
    marginLeft: 150,
  },
  closeButton: {
    marginVertical: 15,
    marginHorizontal: 10,
    fontWeight: 'bold',
    alignSelf: 'flex-end',
    justifyContent: 'center',
  },
  headerWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'left',
  },
});
