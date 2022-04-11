import FeebackItem from "./FeedbackItem";

function FeedbackList({ feedback }) {
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
}
export default FeedbackList;
