import PropTypes from "prop-types";

const Card = ({ children, reverse }) => {
	// return <div className={reverse ? "card reverse" : "card"}>{children}</div>;

	// Example of a conditional style vs a conditional class
	return (
		<div
			className="card"
			style={{
				backgroundColor: reverse ? "rgba(0,0,0,0.4)" : "#fff",
				color: reverse ? "#fff" : "rgba(0,0,0,0.4)",
			}}
		>
			{children}
		</div>
	);
};

Card.defaultProps = {
	reverse: false,
};

Card.propTypes = {
	children: PropTypes.node.isRequired,
	reverse: PropTypes.bool,
};

export default Card;
