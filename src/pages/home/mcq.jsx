import { useSelector } from "react-redux";
import McqItem from "../../components/item/mcq-item";


const Mcq = () => {

    const { filteredMcqs, isMcqsLoading } = useSelector(state => state.mcqSlice);

    return (
        isMcqsLoading? <div className="text-center"><h4>Loading...</h4></div> 
        : filteredMcqs.map((x,i)=> <McqItem key={i} data={x} index={i+1}/>)
    );
}

export default Mcq;