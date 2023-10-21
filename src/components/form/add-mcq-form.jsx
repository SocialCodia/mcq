import { useState } from "react";
import { toast } from "react-toastify";
import { addMcq } from '../../http';

const AddMcqForm = () => {

    const initialState = {
        question: '',
        opOne: '',
        opTwo: '',
        opThree: '',
        opFour: '',
        answer: 1,
        verified:true
    }

    const [formData, setFormData] = useState(initialState);

    const [loading, setLoading] = useState(false);
    const [count, setCount] = useState(0);

    const inputEvent = (e) => {
        const { name, value } = e.target;
        console.log({ name, value });
        setFormData((old) => {
            return {
                ...old,
                [name]: value
            }
        })
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        if (!formData.question) return toast.error('Enter Question');
        setLoading(true);
        const res = await addMcq(formData);
        setLoading(false);
        if (res.success) {
            setFormData(initialState);
            setCount(count + 1);
            toast.success(`${count + 1} Question Added`);
        }

    }

    return (
        <div className="row formContainer1">
            <div className="col-xl-6 offset-xl-3 col-lg-6 offset-lg-6 col-md-8 offset-md-2">
                <div className="card cardAddFormMcq">
                    <h6 className="card-header text-center">{count < 1 ? 'Add Question' : `${count} Question Added`}</h6>
                    <div className="card-body">
                        <form method="post" onSubmit={onSubmit}>
                            <div className="row">
                                <div className="form-group mb-4">
                                    <input type="text" readOnly={loading} onChange={inputEvent} value={formData.question} className="form-control" id="question" name="question" placeholder="Enter Question" />
                                </div>
                                <div className="form-group col-xl-6 col-lg-6  col-md-6 mb-4">
                                    <input type="text" readOnly={loading} onChange={inputEvent} value={formData.opOne} className="form-control" id="opOne" name="opOne" placeholder="First Option" />
                                </div>
                                <div className="form-group col-xl-6 col-lg-6  col-md-6 mb-4">
                                    <input type="text" readOnly={loading} onChange={inputEvent} value={formData.opTwo} className="form-control" id="opTwo" name="opTwo" placeholder="Second Option" />
                                </div>
                                <div className="form-group col-xl-6 col-lg-6  col-md-6 mb-4">
                                    <input type="text" readOnly={loading} onChange={inputEvent} value={formData.opThree} className="form-control" id="opThree" name="opThree" placeholder="Third Option" />
                                </div>
                                <div className="form-group col-xl-6 col-lg-6  col-md-6 mb-4">
                                    <input type="text" readOnly={loading} onChange={inputEvent} value={formData.opFour} className="form-control" id="opFour" name="opFour" placeholder="Fourth Option" />
                                </div>

                                <div className="col-xl-6 offset-xl-3 col-lg-6 offset-lg-6 col-md-8 offset-md-2 mb-4 d-flex">
                                    <input type="number" readOnly={loading} onChange={inputEvent} value={formData.answer} className="form-control" max={4} min={1} id="answer" name="answer" placeholder="Fourth Option" />
                                    <i onClick={()=>setFormData((old)=> {return {...old,'verified':!formData.verified}})} class={`fa ${formData.verified ? 'fa-check' : 'fa-remove'} rounded-circle ${formData.verified ? 'bg-primary' : 'bg-danger'} text-white p-2 m-1`}></i>
                                </div>
                                <div className="text-center ">
                                    <button disabled={loading} className="btn btn-primary w-100">Add MCQ</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default AddMcqForm;