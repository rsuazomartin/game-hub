// Section 8- Building a Video Game Discovery App

// 36a: Shipping platforms as static data

// import useData from "./useData" (no longer needed)

import platforms from "../data/platforms"

interface Platform {
    id: number,
    name: string,
    slug: string
}

const usePlatform = () => ({ data: platforms, error: null });

export default usePlatform;