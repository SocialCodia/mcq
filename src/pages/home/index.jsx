import { useEffect } from "react";
import { useDispatch } from "react-redux";
import SearchForm from "../../components/form/search-form";
import Header from "../../components/header";
import { getMcqs } from '../../http';
import { setMcqs } from "../../store/mcq-slice";
import Mcq from "./mcq";

const HomePage = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        (async () => {
            const res = await getMcqs();
            if (res.success)
                dispatch(setMcqs(res.data));
        })()
    })

    return (
        <>
            <Header />
            <div className="container mt-3">
                <SearchForm />
                <Mcq />
            </div>
        </>
    )

}

export default HomePage;