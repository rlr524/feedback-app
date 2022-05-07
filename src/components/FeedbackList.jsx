import PropTypes from "prop-types";
import FeebackItem from "./FeedbackItem";

const FeedbackList = ({ feedback }) => {
	if (!feedback || feedback.length === 0) {
		return <p>No Feedback Yet</p>;
	} else {
		return (
			<div className="feedback-list">
				{feedback.map((item) => (
					<FeebackItem key={item.id} item={item}></FeebackItem>
				))}
			</div>
		);
	}
};

FeedbackList.propTypes = {
	feedback: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number.isRequired,
			rating: PropTypes.number.isRequired,
			text: PropTypes.string.isRequired,
		})
	),
};

export default FeedbackList;
