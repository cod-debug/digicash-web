export default function (props) {
    return (
        <div className="custom-card">
            <div className="cc-body text-center text-orange py-12">
                <h1 className="font-big"><i class={props.content.icon}></i></h1>
                <p className="font-md text-[#545555] font-bold">{props.content.title}</p>
                <p className="text-[#545555] font-custom-sm">{props.content.description}</p>
            </div>
        </div>
    )
}