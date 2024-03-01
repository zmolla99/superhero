import React, { useEffect, useState } from 'react'

const Page = () => {
    const [bio, setBio] = useState({})
    const [image, setImage] = useState({ url: {} })
    const [loading, setLoading] = useState(false)

    const getBio = async () => {
        const response = await fetch('https://www.superheroapi.com/api.php/7367275066665484/586/biography')
        const data = await response.json()
        setBio(data)
        setLoading(false)
    }

    const getImage = async () => {
        const response = await fetch('https://www.superheroapi.com/api.php/7367275066665484/586/image')
        const data = await response.json()
        setImage(data)
    }

    useEffect(() => {
        setLoading(true)
    }, [])

    useEffect(() => {
        getBio()
        getImage()
    }, [loading])

    return (
        <div className='page'>
            <h1 className='name'>{bio.name}</h1>
            <img src={image.url} className='image' />
        </div>
    )
}

export default Page