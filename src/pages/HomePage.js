import FormAddTask from '../component/form_add_task';
import DsTasks from '../component/list_tasks';


function HomePage(props) {
  // render UI
  return (
    <>
      <FormAddTask />
      <DsTasks />
    </>

  );
}

export default HomePage;