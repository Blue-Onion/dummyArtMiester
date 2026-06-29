"use client"

import { useParams } from "next/navigation"

const Batch = () => {
    const params = useParams()
    console.log(params.batchId)
    return (
        <div>
            <p>Batch ID: {params.batchId}</p>
        </div>
    )
}

export default page