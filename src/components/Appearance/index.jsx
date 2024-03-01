import React, { useEffect, useState } from 'react'

const Appearance = () => {
    const [app, setApp] = useState({ height: {}, weight: {} })
    const [loading, setLoading] = useState(false)

    const getApp = async () => {
        const response = await fetch('https://www.superheroapi.com/api.php/7367275066665484/586/appearance')
        const data = await response.json()
        setApp(data)
        setLoading(false)
        console.log(app)
    }

    useEffect(() => {
        setLoading(true)
    }, [])

    useEffect(() => {
        getApp()
    }, [loading])

    return (
        <div className='cont-1'>
            <h1>Gender: {app.gender}</h1>
            <h2>Height : {app.height[1]}</h2>
            <h2>Weight: {app.weight[1]}</h2>
            <h3>Hair Colour: {app['hair-color']}</h3>
            <h3>Eye Colour: {app['eye-color']}</h3>
        </div>
    )
}

export default Appearance