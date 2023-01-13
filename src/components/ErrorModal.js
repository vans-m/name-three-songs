import React from 'react'

const ErrorModal = ({ show, message, actionTxt, actionUrl }) => {
	if (!show) {
		return null
	}
	return (
		<div className="modal-wrapper">
			<div className="modal-content">
				{message}
				{actionTxt && actionUrl && (
					<React.Fragment>
						<span>Please log in to continue</span>
						<a className="button button--primary" href={actionUrl}>
							{actionTxt}
						</a>
					</React.Fragment>
				)}
			</div>
		</div>
	)
}

export default ErrorModal
