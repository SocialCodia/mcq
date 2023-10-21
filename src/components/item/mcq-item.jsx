
const McqItem = ({ data, index }) => {

    return (
        <div className="card mt-2">
            <h6 className="card-header">{index} ) {data.question}</h6>
            <div className="card-body">
                <div className="row">
                    <div className="col-lg-6 col-xl-l col-sm-6 col-md-6 col-6">
                        <p className={data.opOne === data.answer ? 'rightAnswer' : ''}>1) {data.opOne}</p>
                    </div>
                    <div className="col-lg-6 col-xl-l col-sm-6 col-md-6 col-6">
                        <p className={data.opTwo === data.answer ? 'rightAnswer' : ''}>2) {data.opTwo}</p>
                    </div>
                    <div className="col-lg-6 col-xl-l col-sm-6 col-md-6 col-6">
                        <p className={data.opThree === data.answer ? 'rightAnswer' : ''}>3) {data.opThree}</p>
                    </div>
                    <div className="col-lg-6 col-xl-l col-sm-6 col-md-6 col-6">
                        <p className={data.opFour === data.answer ? 'rightAnswer' : ''}>4) {data.opFour}</p>
                    </div>
                </div>
                <div className="verifiedBadge">
                    <i class={`fa ${data.verified ? 'fa-check' : 'fa-remove'} rounded-circle ${data.verified ? 'bg-primary' : 'bg-danger'} text-white p-1 m-1`}></i>
                </div>
                <div className="addedBy chip">
                    <strong>Added By : </strong>{data.addedBy}
                </div>
            </div>
        </div>
    )

}

export default McqItem;