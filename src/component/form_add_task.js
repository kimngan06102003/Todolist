import { useDispatch } from 'react-redux'
import { Them } from '../reducers/Slice';
import { useRef } from 'react';

function FormAddTask() {
    const TenTask = useRef()
    const dispatch = useDispatch();

    const ThemTask = () => {
        dispatch(Them(TenTask.current.value));
    }

    return (
        <>
        <div className="form-add-task">
            <label>Task name:</label>
            <input type="text" placeholder="Input name of task" ref={TenTask} />
            <button onClick={ThemTask}>Add</button>
        </div>
        </>
    );
}

export default FormAddTask;