// Define the UserAverageSessionsModel class to handle user average sessions data
class UserAverageSessionsModel {
	// Constructor to initialize the UserAverageSessionsModel with data
	constructor(data) {
	  // Initialize userId from the provided data
	  this.userId = data.userId
  
	  // Map the sessions array to extract only necessary information
	  this.sessions = data.sessions.map(session => ({
		day: session.day,            // The date of the session
		sessionLength: session.sessionLength // The length of the session
	  }))
	}
  }
  
  // Export the UserAverageSessionsModel class for use in other parts of the application
  export default UserAverageSessionsModel