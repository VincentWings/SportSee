import PropTypes from "prop-types"

/**
 * Custom tooltip component for the activity chart
 * Displays weight (kg) and calories (kcal) when hovering over bars
 */

function CustomToolTip({ active = false, payload = [] }) {
  if (!active || !payload.length) return null // Avoid rendering if inactive or no data

  return (
    <div className="activity-chart--tooltip">
      <span>{`${payload[0]?.value} kg`}</span>
      <span>{`${payload[1]?.value} Kcal`}</span>
    </div>
  )
}

// Define expected prop types
CustomToolTip.propTypes = {
  active: PropTypes.bool, // Tooltip visibility status
  payload: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.number // Ensure 'value' is a number
    })
  )
}

export default CustomToolTip