import {Dimensions} from 'react-native';

const width = Dimensions.get('window').width;

export default function getWidth() {
  return width;
}
