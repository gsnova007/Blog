import createDataContext from './createDataContext';
import jsonServer from '../api/jsonServer'

const reducer = (state, action) => {
  switch (action.type) {
  	case 'get_blogPost':
  	return action.payload;

  	case 'update_blogpost':
  	return state.map((allblogs) => { return(allblogs.id === action.payload.id ? action.payload : allblogs )});

  	case 'delete_blogpost':
  		return(state.filter((blogPost) => blogPost.id !== action.payload ));

    case 'add_blogpost':
      return [...state, { id: Math.floor(Math.random() * 999999999), title: action.payload.title, content: action.payload.content }];
    
    default:
      return state;
  }
};

const updateBlog= (dispatch) => {
	return((id, title, content, callback) => {
		dispatch({ type: 'update_blogpost', payload:{ id, title, content } });
		callback();
	});
}

const createBlog = (dispatch) => {
	return (title, content, callback) => {
  		dispatch({ type: 'add_blogpost', payload:{ title, content } });
  		callback();
	};
};

const deleteBlog = (dispatch) => {
	return((id) => {
		dispatch({ type: 'delete_blogpost', payload: id });
	}) ;
};

const getBlogs = (dispatch) => {
	return(
		async () => {
			const response = await jsonServer.get("/blogs");
			dispatch({type: "get_blogpost", payload : response.data});
		}
	);
}

export const { Context, Provider } = createDataContext(reducer, {createBlog, deleteBlog, updateBlog, getBlogs}, []);