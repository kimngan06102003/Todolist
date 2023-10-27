import { useDispatch, useSelector } from 'react-redux'
import { Xoa} from '../reducers/Slice';

function DsTasks() {
    const dispatch = useDispatch();
    const tasks = useSelector((state) => state.task.list); 

    const XoaTask = (name)=> 
    {
        dispatch(XoaTask(name));
    }

    return (
        <>
        <div className="list-tasks">
            <h3 className="mb-5">List of tasks:</h3>
            {
                tasks.map(function(task, idx){
                    return (
                        <div className="task" key={idx}>
                            <p>{task}</p>
                            <button onClick={() => XoaTask(task)}>X</button>
                        </div>
                    );
                })
            }
        </div>
        </>
    );
}

export default DsTasks;