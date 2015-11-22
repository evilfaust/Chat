{
	id: {
		name: {
			type: String,
			unique: true
		}
	}

	date: {
		type: Date,
		unique: true
	}
	time: {
		type: Timestamp,
		unique: true
	}
	message: {
		type: Array,
		unique: false
	}
}