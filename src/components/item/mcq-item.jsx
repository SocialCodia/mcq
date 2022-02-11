
const McqItem = ({ data,index }) => {

    return (
        <div className="card mt-2">
            <h6 className="card-header">{index} ) {data.question}</h6>
            <div className="card-body">
                <div className="row">
                    <div className="col-lg-6 col-xl-l col-sm-6 col-md-6 col-6">
                        <p className={data.opOne == data.answer ? 'rightAnswer' : ''}>1) {data.opOne}</p>
                    </div>
                    <div className="col-lg-6 col-xl-l col-sm-6 col-md-6 col-6">
                        <p className={data.opTwo == data.answer ? 'rightAnswer' : ''}>2) {data.opTwo}</p>
                    </div>
                    <div className="col-lg-6 col-xl-l col-sm-6 col-md-6 col-6">
                        <p className={data.opThree == data.answer ? 'rightAnswer' : ''}>3) {data.opThree}</p>
                    </div>
                    <div className="col-lg-6 col-xl-l col-sm-6 col-md-6 col-6">
                        <p className={data.opFour == data.answer ? 'rightAnswer' : ''}>4) {data.opFour}</p>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default McqItem;