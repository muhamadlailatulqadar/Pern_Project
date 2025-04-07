import  React, { Fragment, useState }   from  'react' ;

const EditTodo = ({ todo }) => {
    const [description, setDescription] = useState(todo.description);


    //edit description function
    const updateDescription = async e => {
        e.preventDefault();
        try {
            const body = { description };
            const response = await fetch(`http://localhost:5300/todo/${todo.todo_id}`, 
            {
                method: "PUT",
                headers: { 'Content-type': 'application/json' },
                body: JSON.stringify(body)
            })

            window.location = "/";
        } catch (err) {
            console.error(err.message);
            
        }
    }

    return (
        <Fragment>
  <button type="button" class="btn btn-success" data-toggle="modal" data-target={`#id${todo.todo_id}`}>
    Edit
  </button>

  {/* 
   id = id(id$)10(todo.todo_id); = id={`id${todo.todo_id}`}>
  */}
  <div class="modal" id={`id${todo.todo_id}` } onClick={ () => setDescription(todo.description) } >
    <div class="modal-dialog">
      <div class="modal-content">
      
        
        <div class="modal-header">
          <h4 class="modal-title">Edit Question</h4>
          <button type="button" class="close" data-dismiss="modal" onClick={() => setDescription(todo.description)}>&times;</button>
        </div>
        
        
        <div class="modal-body">
          <input type='text' className='form-control' value={description} onChange={e => setDescription(e.target.value)}/>
        </div>
        
        
        <div class="modal-footer">
          <button type="button" class="btn btn-success" data-dismiss="modal" onClick={e => updateDescription(e)}>Edit</button>
          <button type="button" class="btn btn-danger" data-dismiss="modal" onClick={() => setDescription(todo.description)}>Close</button>
        </div>
        
      </div>
    </div>
  </div>
        </Fragment>
    );
};

export default EditTodo;