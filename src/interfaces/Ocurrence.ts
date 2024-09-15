interface Ocurrence {
    id: string,
    title: string,
    description: string,
    type: string,
    latitude: number,
    longitude: number,
    date: string,
    time: string,
    resolved: boolean,
    PoliceStation: {
        select: {
            name: true,
            phone: true,
        }
    },
    Images: {
        path: string;
    }[]
}

export default Ocurrence;