import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import Discovery from '../components/Discovery';
import {
  discoverDevices
} from '../actions/discovery';
import { counterStateType } from '../reducers/types';

function mapStateToProps(state: counterStateType) {
  return {
    counter: state.counter
  };
}

function mapDispatchToProps(dispatch: Dispatch) {
  return bindActionCreators(
    {
      discoverDevices
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Discovery);
