export default function ConferenceId({params}) {
    return (
        <>
            <h1>Hello {params.slug[0]}</h1>
            <h1>Hello {params.slug[1]}</h1>
        </>)
}