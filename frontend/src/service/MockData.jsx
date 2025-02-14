// Simple toggle for using mock data or real API
const useMockData = true

// Base URL for the real API
const ApiBaseUrl = "http://localhost:3000"

// Import data models
import UserDataModel from "../models/UserDataModel"
import UserActivityModel from "../models/UserActivityModel"
import UserAverageSessionsModel from "../models/UserAverageSessionsModel"
import UserPerformanceModel from "../models/UserPerformanceModel"

// Function to fetch mock data from the public folder
const fetchMockData = async () => {
  try {
    const response = await fetch("/mockData.json")
    if (!response.ok) throw new Error("Failed to load mock data")
    return await response.json()  // Return mock data
  } catch (error) {
    console.error("Error fetching mock data:", error)
    return null  // If error occurs, return null
  }
}

// Function to fetch real API data
const fetchApiData = async (endpoint) => {
  try {
    const response = await fetch(`${ApiBaseUrl}${endpoint}`)
    if (!response.ok) throw new Error(`Error fetching data from ${endpoint}`)
    return await response.json()  // Return parsed API data
  } catch (error) {
    console.error(`Error fetching data from ${endpoint}:`, error)
    return null  // If error occurs, return null
  }
}

// Generic function to fetch user data (either from mock data or API)
const getUserData = async (userId, endpoint, model) => {
  let data

  // If using mock data, fetch it from the mockData.json file
  if (useMockData) {
    const mockData = await fetchMockData()
    if (mockData && mockData[endpoint]) {
      // Find the user data matching the userId
      data = mockData[endpoint].find(item => item.userId === parseInt(userId, 10))
    }
  }

  // If mock data is not available or using real API, fetch data from the API
  if (!data) {
    const apiData = await fetchApiData(`${endpoint.replace("{userId}", userId)}`)
    data = apiData ? apiData.data : null
  }

  // If data is found, return the model with that data
  if (data) {
    return new model(data)
  } else {
    console.error(`No data found for userId ${userId}`)
    return null  // Return null if no data is found
  }
}

// Fetch user main data using the generic getUserData function
export const getUserMainData = (userId) => getUserData(userId, "/user/{userId}", UserDataModel)

// Fetch user activity data using the generic getUserData function
export const getUserActivity = (userId) => getUserData(userId, "/user/{userId}/activity", UserActivityModel)

// Fetch user average sessions data using the generic getUserData function
export const getUserAverageSessions = (userId) => getUserData(userId, "/user/{userId}/average-sessions", UserAverageSessionsModel)

// Fetch user performance data using the generic getUserData function
export const getUserPerformance = (userId) => getUserData(userId, "/user/{userId}/performance", UserPerformanceModel)