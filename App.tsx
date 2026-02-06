import React from 'react';

const App: React.FC = () => {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">
          ✅ Проект успешно запущен
        </h1>
        <p className="text-lg text-gray-400">
          Приложение работает корректно. Начинайте строить!
        </p>
      </div>
    </div>
  );
};

export default App;
