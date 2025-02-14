// The UserPerformanceModel class is used to simplify and structure user performance data
class UserPerformanceModel {
	// The constructor is called when a new instance of the class is created
	constructor(data) {
	  // Store the userId to uniquely identify the user
	  this.userId = data.userId
  
	  // Store the 'kind' value directly (type of performance data)
	  this.kind = data.kind
  
	  // Simplify the performance data by mapping each item to a new structure
	  this.data = data.data.map((item) => ({
		value: item.value,  // Store the performance value (e.g., number of repetitions or distance)
		kind: item.kind     // Store the type of performance data (e.g., "running", "swimming")
	  }))
	}
  }
  
  // Export the class so it can be used elsewhere in the application
  export default UserPerformanceModel
  