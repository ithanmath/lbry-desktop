import { connect } from 'react-redux';
import {
  selectBalance,
  selectIsStillEditing,
  makeSelectPublishFormValue,
  doUpdatePublishForm,
  doToast,
  doClearPublish,
} from 'lbry-redux';
import { selectFfmpegStatus } from 'redux/selectors/settings';
import PublishPage from './view';

const select = state => ({
  name: makeSelectPublishFormValue('name')(state),
  filePath: makeSelectPublishFormValue('filePath')(state),
  optimize: makeSelectPublishFormValue('optimize')(state),
  isStillEditing: selectIsStillEditing(state),
  balance: selectBalance(state),
  publishing: makeSelectPublishFormValue('publishing')(state),
  ffmpegStatus: selectFfmpegStatus(state),
});

const perform = dispatch => ({
  clearPublish: () => dispatch(doClearPublish()),
  updatePublishForm: value => dispatch(doUpdatePublishForm(value)),
  showToast: message => dispatch(doToast({ message, isError: true })),
});

export default connect(
  select,
  perform
)(PublishPage);
