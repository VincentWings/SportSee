import PropTypes from "prop-types"
import "./CustomToolTip.css"

// Custom tooltip component for displaying session length
function CustomToolTip({ active, payload }) {
  // Check if the tooltip should be visible and if there's data to display
  if (active && payload && payload.length) {
    return (
      <div className="session-length-chart--tooltip">
        {/* Display the session length in minutes */}
        <span>{payload[0].value + " min"}</span>
      </div>
    )
  }

  // If no data or not active, return null (no tooltip)
  return null
}

// Prop validation for the component
CustomToolTip.propTypes = {
  active: PropTypes.bool, // Determines if the tooltip is active
  payload: PropTypes.arrayOf(PropTypes.object) // Data passed to the tooltip
}

export default CustomToolTip