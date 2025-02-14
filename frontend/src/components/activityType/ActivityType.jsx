import { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { getUserPerformance } from "../../service/MockData"
import {
  RadarChart as RadarChartPrimitive,
  PolarGrid,
  PolarAngleAxis,
  Radar,
  ResponsiveContainer,
} from "recharts"

import "./ActivityType.css"

// Component to display the user's activity performance in a radar chart
const ActivityType = ({ userId }) => {
  // State to manage chart data, loading state, and error state
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  // Fetch the color from the root CSS variables
  const rootStyles = getComputedStyle(document.documentElement)
  const backgroundColor = rootStyles.getPropertyValue("--color-black-alt").trim()

  // Effect to fetch data when the userId changes
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Call to the mock service to get user performance data
        const userPerformance = await getUserPerformance(userId)
        if (!userPerformance || !userPerformance.data) {
          throw new Error("No performance data found.")
        }

        // Mapping of activity type IDs to labels
        const kindToLabel = {
          1: "Cardio",
          2: "Énergie",
          3: "Endurance",
          4: "Force",
          5: "Vitesse",
          6: "Intensité",
        }

        // Format the data for the radar chart
        const formattedData = userPerformance.data.map((item) => ({
          label: kindToLabel[item.kind],
          value: item.value,
        }))

        setData(formattedData) // Set the formatted data in state
      } catch (err) {
        // If there's an error, log it and set the error state
        console.error("Error fetching data:", err)
        setError(err.message)
      } finally {
        // Stop loading when the fetch is complete
        setLoading(false)
      }
    }

    fetchData() // Fetch data when the component mounts or userId changes
  }, [userId])

  // If the data is still loading, show a loading message
  if (loading) return <p>Loading data...</p>

  // If there is an error, show an error message
  if (error) return <p className="error-message">{error}</p>

  // Return the radar chart wrapped in a div with dynamic styling
  return (
    <div
      className="activity-type-chart"
      style={{
        backgroundColor, // Dynamic background color from CSS variable
        padding: "20px",
        borderRadius: "10px",
      }}
    >
      <ResponsiveContainer width="100%" height={220}>
        <RadarChartPrimitive cx="50%" cy="50%" outerRadius="60%" data={data}>
          <PolarGrid gridType="polygon" />
          <PolarAngleAxis
            dataKey="label"
            stroke="white"
            tickLine={false}
            axisLine={false}
            dy={3}
          />
          <Radar dataKey="value" stroke="#FF0101" fill="#FF0101" fillOpacity={0.7} />
        </RadarChartPrimitive>
      </ResponsiveContainer>
    </div>
  )
}

// Prop types for the component, ensuring userId is a number
ActivityType.propTypes = {
  userId: PropTypes.number.isRequired,
}

export default ActivityType
