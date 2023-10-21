import { useState } from "react";
import { useDispatch } from "react-redux";
import { filterMcqByAnswer, filterMcqByQuestion } from "../../store/mcq-slice";

const SearchForm = () => {

    const dispatch = useDispatch();

    const [formData, setFormData] = useState({
        question: '',
        answer: ''
    });

    const inputEvent = (e) => {
        const { name, value } = e.target;
        setFormData({ [name]: value });
        if (name === 'question')
            dispatch(filterMcqByQuestion(value));
        else
            dispatch(filterMcqByAnswer(value));
    }

    // const inputEvent = (e) => {
    //     const { name, value } = e.target;
    //     setFormData((old) => {
    //         return {
    //             ...old,
    //             [name]: value
    //         }
    //     })
    // }

    return (
        <div className="card mb-3">
            <div className="card-body">
                <div className="form-group m-3">
                    <input type="text" name="question" onChange={inputEvent} value={formData.question} className="form-control" placeholder="Search Questions" />
                </div>
                <div className="form-group m-3">
                    <input type="text" name="answer" onChange={inputEvent} value={formData.answer} className="form-control" placeholder="Search Answer" />
                </div>
            </div>
        </div>
    )

}

export default SearchForm;