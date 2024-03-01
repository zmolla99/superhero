import { useState, useEffect } from 'react'
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts'

const Powers = () => {
    const [pow, setPow] = useState({ intelligence: {}, strength: {}, speed: {}, durability: {}, combat: {}, power: {} })
    const [loading, setLoading] = useState(false)

    const getPow = async () => {
        const response = await fetch('https://www.superheroapi.com/api.php/7367275066665484/586/powerstats')
        const data = await response.json()
        setPow(data)
        setLoading(false)
        console.log(pow)
    }

    useEffect(() => {
        setLoading(true)
    }, [])

    useEffect(() => {
        getPow()
    }, [loading])


    const SuperheroStatsChart = () => {
        const chartData = Object.keys(pow)
            .filter(key => key !== 'name' && key !== 'response' && key !== 'id')
            .map(label => ({ label: label.charAt(0).toUpperCase() + label.slice(1), value: pow[label] }))

        return (
            <div className='bar'>
                <h1>Power Stats</h1>
                <BarChart width={800} height={400} data={chartData} >
                    <XAxis dataKey="label" interval={0} />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="value" fill="rgba(247,184,0,0.9)" />
                </BarChart>
            </div>
        )
    }

    return (
        <div className='cont-3'>
            <SuperheroStatsChart />
        </div>

    )
}

export default Powers