import React from 'react'
import noImage from '../img/noImage.png'

const ResultItem = ({ img, title, sub, isResult }) => {
	return (
		<div className={isResult ? 'result-item' : 'result-item link'}>
			<div className="result-item__img-wrapper">
				<img className="result-item__img" src={img || noImage} />
			</div>
			<div className="result-item__content">
				<span className="result-item__title">{title}</span>
				<span className="result-item__subtitle">{sub}</span>
			</div>
		</div>
	)
}

export default ResultItem
