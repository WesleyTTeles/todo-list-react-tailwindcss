const InputField = ({ value, handleInputChange, handleAddTask }) => {
  return (
    <div className="w-full flex justify-center p-4">
      <input
        type="text"
        placeholder="Adicionar novas tarefas"
        className="border rounded-s-xl p-2 w-96"
        value={value}
        onChange={handleInputChange}
      />
      <div
        className="bg-blue-950 rounded-e-xl p-2 text-white cursor-pointer"
        onClick={handleAddTask}
      >
        Adicionar
      </div>
    </div>
  );
};

export default InputField;
