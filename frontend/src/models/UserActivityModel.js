// Define the UserActivityModel class to handle user activity data
class UserActivityModel {
	// Constructor to initialize user activity model
	constructor(data) {
	  // Initialize userId from the provided data
	  this.userId = data.userId
  
	  // Map sessions to a cleaner structure with specific properties
	  this.sessions = data.sessions.map((session) => ({
		day: session.day,        // The date of the session
		kg: session.kilogram,    // The weight recorded on that day
		calories: session.calories // The calories burned during that session
	  }))
	}
  }
  
  // Export the UserActivityModel class for use in other parts of the application
  export default UserActivityModel