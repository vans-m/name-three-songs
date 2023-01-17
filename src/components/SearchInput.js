import React from 'react'

const SearchInput = ({ isFocused, ...inputProps }) => (
	<div className={isFocused ? 'form-control focused' : 'form-control'}>
		<label htmlFor="search-band">Search band</label>
		<input id="search-band" type="text" className="text-input" {...inputProps} />
	</div>
)

export default SearchInput
