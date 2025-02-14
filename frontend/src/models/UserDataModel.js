// The UserDataModel class is responsible for structuring and simplifying user data
class UserDataModel {
	// Constructor is used to initialize the model with the provided data
	constructor(data) {
	  // Store user ID for future reference
	  this.id = data.id
  
	  // Destructure the user information for easier access
	  this.userInfos = {
		firstName: data.userInfos.firstName, // User's first name
		lastName: data.userInfos.lastName,   // User's last name
		age: data.userInfos.age              // User's age
	  };
  
	  // Handle score data, check for different possible data formats (todayScore or score)
	  this.score = data.todayScore || data.score // Fallback to 'score' if 'todayScore' is not available
  
	  // Simplify key data like calories, protein, carbs, and fat by renaming the fields
	  this.keyData = {
		calories: data.keyData.calorieCount,    // Calories count
		protein: data.keyData.proteinCount,     // Protein count
		carbs: data.keyData.carbohydrateCount,  // Carbohydrates count
		fat: data.keyData.lipidCount            // Fat count
	  }
	}
  }
  
  // Export the class so it can be used in other parts of the application
  export default UserDataModel  