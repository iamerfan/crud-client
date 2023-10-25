import Todo from "@/components/Todo";
export default function Todos({ todos, handleDelete, handleEditValue }) {
  console.log(todos.length);
  return (
    <div className="h-full overflow-y-auto max-h-80 pb-3">
      {todos.length <= 0 ? (
        <h3 className="text-xl py-5 opacity-50  w-full text-center text-black font-bold">
          opps no Todos has been Added yet
        </h3>
      ) : (
        todos.map((todo, i) => (
          <Todo
            key={i}
            i={i}
            handleDelete={handleDelete}
            handleEditValue={handleEditValue}
            data={todo}
          />
        ))
      )}
    </div>
  );
}
