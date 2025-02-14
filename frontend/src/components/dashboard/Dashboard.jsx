import UserActivity from "../../components/userActivity/UserActivity"
import SessionLength from "../../components/sessionLength/SessionLength"
import ActivityType from "../../components/activityType/ActivityType"
import Score from "../../components/score/Score"
import SpentEnergy from "../../components/spentEnergy/SpentEnergy.jsx"

import caloriesIcon from "../../assets/images/icon-calories.svg"
import proteinIcon from "../../assets/images/icon-protein.svg"
import carbsIcon from "../../assets/images/icon-carbs.svg"
import fatIcon from "../../assets/images/icon-fat.svg"

import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { useUser } from "../../context/UserContext"
import { getUserMainData } from "../../service/MockData"

import "./Dashboard.css"

const Dashboard = () => {
	const { id } = useParams() // Get ID from URL
	const numericUserId = parseInt(id, 10) // Convert string to number
	const { setUserId } = useUser()
	const [user, setUser] = useState(null)
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState(null)

	// Update context to store ID
	useEffect(() => {
		setUserId(numericUserId)

		const fetchData = async () => {
			try {
				const userData = await getUserMainData(id)
				setUser(userData)
			} catch (err) {
				setError("Failed to load user data.")
				console.error(err)
			} finally {
				setLoading(false)
			}
		}

		fetchData()
	}, [id, numericUserId, setUserId])

	if (loading) return <p>Loading...</p>
	if (error) return <p>{error}</p>

	const { calories = 0, protein = 0, carbs = 0, fat = 0 } = user.keyData || {}

	const energyList = [
		{ icon: caloriesIcon, number: calories.toLocaleString("fr-FR"), unit: "kCal", name: "Calories" },
		{ icon: proteinIcon, number: protein, unit: "g", name: "Protéines" },
		{ icon: carbsIcon, number: carbs, unit: "g", name: "Glucides" },
		{ icon: fatIcon, number: fat, unit: "g", name: "Lipides" }
	]

	return (
		<div className="dashboard">
			<section className="dashboard-header">
				<h1 className="dashboard-title">
					Bonjour <span className="highlight">{user.userInfos.firstName}</span>
				</h1>
				
				<p className="dashboard-subtitle">Félicitations ! Vous avez explosé vos objectifs hier 👏</p>
			</section>

			<section className="dashboard-content">
				<div className="charts-container">
					<UserActivity userId={numericUserId} />

					<div className="small-charts">
						<SessionLength userId={numericUserId} />

						<ActivityType userId={numericUserId} />

						<Score userId={numericUserId} />
					</div>
				</div>

				<div className="stats-container">
					{energyList.map((data, index) => (
						<SpentEnergy key={index} icon={data.icon} number={data.number} unit={data.unit} name={data.name} />
					))}
				</div>
			</section>
		</div>
	)
}

export default Dashboard