import { useState } from 'react';
import AddTodo from './AddTodo.js';
import TaskList from './TaskList.js';
import TrafficLight from './Trafficlight';
import NumbersTable from './NumbersTable';
import Facebook from './Facebook.js';



/*challenge 1 */ 

/*
const initialProducts = [{
  id: 0,
  name: 'Baklava',
  count: 1,
}, {
  id: 1,
  name: 'Cheese',
  count: 5,
}, {
  id: 2,
  name: 'Spaghetti',
  count: 2,
}];

export default function ShoppingCart() {
  const [
    products,
    setProducts
  ] = useState(initialProducts)

  function handleIncreaseClick(productId) {
    let newProducts = products.map ((product) => { 
       if(product.id === productId){
         product.count++
        }
      return product
    })
    
    setProducts(newProducts) 
  }

  return (
    <ul>
      {products.map(product => (
        <li key={product.id}>
          {product.name}
          {' '}
          (<b>{product.count}</b>)
          <button onClick={() => {
            handleIncreaseClick(product.id);
          }}>
            +
          </button>
        </li>
      ))}
    </ul>
  );
}
*/

/*challenge 2 */

/*
const initialProducts = [{
  id: 0,
  name: 'Baklava',
  count: 1,
}, {
  id: 1,
  name: 'Cheese',
  count: 5,
}, {
  id: 2,
  name: 'Spaghetti',
  count: 2,
}];

export default function ShoppingCart() {
  const [
    products,
    setProducts
  ] = useState(initialProducts)

  function handleIncreaseClick(productId) {
    setProducts(products.map(product => {
      if (product.id === productId) {
        return {
          ...product,
          count: product.count + 1
        };
      } else {
        return product;
      }
    }))
  }

   function handleDecreaseClick(productId) {
     const filteredProducts = products.filter(product => 
      product.count >= 2
    );
   
    setProducts(filteredProducts.map(product => {
      if (product.id === productId) {
        if (product.count === 1 ) {
          return product.remove
        }
        return {
          ...product,
          count: product.count - 1
        };
      } else {
        return product;
      }
    }))
  }

  

  return (
    <ul>
      {products.map(product => (
        <li key={product.id}>
          {product.name}
          {' '}
          (<b>{product.count}</b>)
          <button onClick={() => {
            handleIncreaseClick(product.id);
          }}>
            +
          </button>
          <button onClick={() => {
            handleDecreaseClick(product.id);
          }}>
            –
          </button>
        </li>
      ))}
    </ul>
  );
}
*/

/* challenge 3 */


const initialTodos = [
  { id: 0, title: 'Buy milk', done: true },
  { id: 1, title: 'Eat tacos', done: false },
  { id: 2, title: 'Brew tea', done: false },
];

export default function TaskApp() {
  const [todos, setTodos] = useState(
    initialTodos
  );
  const [id, setId] = useState(initialTodos.length);

  function handleAddTodo(title) {
    const newObject = {
      id: id,
      title: title,
      done: false
    }
    setId(id + 1)
    setTodos([...todos, newObject])
    
  }

  function handleChangeTodo(nextTodo) {
    const edited = todos.map(t => {
      if(t.id === nextTodo.id){
        t.title = nextTodo.title;
        t.done = nextTodo.done;
      }
      return t;
    });
    setTodos(edited)
    

  }

  function handleDeleteTodo(todoId) {
    setTodos(todos.filter((todo) => todo.id !== todoId))
  }

  return (
    <>
      <AddTodo
        onAddTodo={handleAddTodo}
      />
      <TaskList
        todos={todos}
        onChangeTodo={handleChangeTodo}
        onDeleteTodo={handleDeleteTodo}
      />
      <div>
        <TrafficLight />
      </div>
      <div>
        <NumbersTable limit={12}/>
      </div>
      <div>
        <Facebook/>
      </div>
      
    </>
  );
}

