import { connect } from 'react-redux';
import {
  taskPopUpEditOpen,
} from '../../../../redux/componentController/componentActions';
import {
  putTaskToEditMode,
  removeTaskFromEditMode,
} from '../../../../redux/tasks/taskActions';
import { getTaskInEditMode } from '../../../../redux/tasks/tasksSelectors';

import EditButton from './EditButton';

const mSTP = state => ({
  taskInEditMode: getTaskInEditMode(state),
});

const mDtP = dispatch => ({
  onClick: isEditOpen => dispatch(taskPopUpEditOpen(isEditOpen)),
  TaskToEditMode: task => dispatch(putTaskToEditMode(task)),
  removeTaskFromEditMode: () => dispatch(removeTaskFromEditMode()),
});

export default connect(
  mSTP,
  mDtP,
)(EditButton);
