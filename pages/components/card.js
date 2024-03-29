export default function Card(props){
    return (
        <div className=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 card">
            <div href={props.cardData.url} className="card-img-handler" style={
                {backgroundImage: `url(${props.cardData.image})`}
            }>
            </div>
            <div className="p-5 text-center">
                <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{ props.cardData.title }</h5>
                </a>
                <div className="py-5"></div>
                <p className="mb-3 font-sm text-gray-700 dark:text-gray-400">{ props.cardData.subtitle }</p>
                <div className="py-5"></div>
                <div className="w-100 text-center minus-mb">
                    <a href={props.cardData.url} className="btn primary-btn btn-circle">
                        <svg aria-hidden="true" className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                    </a>
                </div>
            </div>
        </div>
    )
}