import styles from './Todo.module.scss'
// props add to the function { to call them used correctly in the component from the parent}
export default function Todo({ todo, buttonAction, buttonText }) {
    return(
        <div className={styles.todo}>{todo.title}
            <button
             className={styles.button} 
             onClick={() => buttonAction(todo._id)}
             >
                    {buttonText}
             </button>
        </div>
    )
}