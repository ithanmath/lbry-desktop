import { connect } from 'react-redux';
import { selectFollowedTags } from 'redux/selectors/tags';
import { selectBlockedChannels } from 'redux/selectors/blocked';
import { selectSubscriptions } from 'redux/selectors/subscriptions';
import { selectHomepageData } from 'redux/selectors/settings';
import ChannelsFollowingManagePage from './view';

const select = state => ({
  followedTags: selectFollowedTags(state),
  subscribedChannels: selectSubscriptions(state),
  blockedChannels: selectBlockedChannels(state),
  homepageData: selectHomepageData(state),
});

export default connect(select)(ChannelsFollowingManagePage);
