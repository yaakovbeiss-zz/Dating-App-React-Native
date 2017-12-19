import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import StarRating from 'react-native-star-rating';
import { createRating, updateRating } from '../actions/rating_actions';
import { View, StyleSheet } from 'react-native';

class Rater extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      starCount: 0,
    };
  }

  componentDidUpdate(prevProps, prevState) {
    const { ratedId } = this.props;
    if (prevState.starCount !== this.state.starCount) {
      let rating = { rater_id: this.props.currentUser.id, rated_id: ratedId, rating: this.state.starCount }
      if (this.props.ratings[ratedId]) {
        rating["id"] = this.props.ratings[ratedId].id;
        this.props.updateRating(rating);
      } else {
        this.props.createRating(rating);
      }
    }
  }

  _onStarRatingPress(rating) {
    if (this.state.starCount === 1 && rating === 1) {
      rating = 0;
    }
    this.setState({
      starCount: rating
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <StarRating
          disabled={false}
          maxStars={5}
          rating={this.state.starCount}
          selectedStar={(rating) => this._onStarRatingPress(rating)}
          starColor={'gold'}
        />
      </View>
    );
  }

}

Rater.propTypes = {
  ratedId: PropTypes.number,
};

const mapStateToProps = ({ session, rating }) => ({
  ratings: rating.entities,
  currentUser: session.currentUser,
});

const mapDispatchToProps = dispatch => ({
  createRating: (rating) => dispatch(createRating(rating)),
  updateRating: (rating) => dispatch(updateRating(rating)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Rater)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
