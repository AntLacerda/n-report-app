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
    User: {
        id: string,
        name: string
    }
    PoliceStation: {
        id: string,
        name: string,
        phone: string,
    },
    Images: {
        id: string,
        path: string;
    }[]
}

export default Ocurrence;