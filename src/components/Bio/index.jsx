import { useEffect, useState } from 'react'

const Bio = () => {
    const [bio, setBio] = useState({ aliases: [] })
    const [loading, setLoading] = useState(false)

    const getBio = async () => {
        const response = await fetch('https://www.superheroapi.com/api.php/7367275066665484/586/biography')
        const data = await response.json()
        setBio(data)
        setLoading(false)
        console.log(bio)
    }

    useEffect(() => {
        setLoading(true)
    }, [])

    useEffect(() => {
        getBio()
    }, [loading])


    return (
        <div className='cont-2'>
            <h1>Aliases:<ul>{bio.aliases.map(alias => <li>{alias}</li>)}</ul></h1>
            <h2>Alignment: {bio.alignment}</h2>
            <h3>Place of Birth: {bio['place-of-birth']}</h3>
            <br />
            <h5>Publisher: {bio.publisher}</h5>
        </div>
    )
}

export default Bio