export default function Error() {
    return(
        <>
        <div className="errorpage d-flex flex-column justify-content-center align-items-center">
                <h1 className="text-center">404 ... There's no Pokémon with the ID or name you're looking for. </h1>
                <div>You can try again</div>
                <iframe className="mt-5" src="https://giphy.com/embed/DRfu7BT8ZK1uo" />
        </div>
        </>
    )
}