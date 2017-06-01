const imgsFilter = (state = true, action) => {
	switch (action.type) {
		case 'TOGGLE_IMGS':
			return !state

		default:
			return state
	}
}

export default imgsFilter