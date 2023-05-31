export default function (props){
    return <>
        <div className="specific-cards">
            <div className="scc-body text-center">
                <div className="scc-icon-holder">
                    <i class={props.icon}></i>
                </div>
                <div className="scc-title py-8 font-bold text-xl">
                    { props.title }
                </div>
                <div className="scc-description text-[#8d949e]">
                    { props.description }
                </div>
                <div className="scc-btn-holder py-8">
                    <a className="btn btn-rounded btn-animate orange-btn" href={props.buttonURL}>{props.buttonTitle}</a>
                </div>
            </div>
        </div>
    </>
}