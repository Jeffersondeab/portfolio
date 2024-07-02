import React from 'react'; // Assuming you're using React

const JsonItem = ({ comandone }) => {
  return (
    <p className="li" data-teste={comandone}>
      OI - {comandone}
    </p>
  );
};

const App = () => {
  const jsonData = [
    { comandone: 'teste 01' },
    { comandone: 'teste 02' },
  ];

  return (
    <div>
      {jsonData.map((item) => (
        <JsonItem key={item.comandone} comandone={item.comandone} />
      ))}
    </div>
  );
};

export default App;
