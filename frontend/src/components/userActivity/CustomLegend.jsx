import PropTypes from "prop-types"

function CustomLegend({ payload }) {
  // Ensure payload exists before mapping to avoid errors
  if (!payload || payload.length === 0) return null

  return (
    <div className="custom-legend">
      {/* Title of the chart */}
      <h2 className="chart-title">Activité quotidienne</h2>

      {/* Mapping over the legend items */}
      {payload.map((entry, index) => (
        <div key={index} className="chart-legend">
          {/* Small colored circle representing the data */}
          <div
            className="legend-color"
            style={{
              backgroundColor: entry.color
            }}
          />

          {/* Legend text */}
          <span className="activity-chart--legend">{entry.value}</span>
        </div>
      ))}
    </div>
  )
}

// PropTypes for type checking
CustomLegend.propTypes = {
  payload: PropTypes.arrayOf(
    PropTypes.shape({
      color: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired
    })
  ).isRequired
}

export default CustomLegend