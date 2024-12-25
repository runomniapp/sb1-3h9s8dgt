import React, { useState } from 'react';
import { Dice6 } from 'lucide-react';

function App() {
  const [minNumber, setMinNumber] = useState<string>('');
  const [maxNumber, setMaxNumber] = useState<string>('');
  const [result, setResult] = useState<number | null>(null);

  const generateRandomNumber = () => {
    const min = parseInt(minNumber);
    const max = parseInt(maxNumber);
    
    if (isNaN(min) || isNaN(max)) {
      alert('Lütfen geçerli sayılar giriniz');
      return;
    }
    
    if (min >= max) {
      alert('İlk sayı ikinci sayıdan küçük olmalıdır');
      return;
    }
    
    const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    setResult(randomNum);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-xl shadow-lg max-w-md w-full">
        <div className="flex items-center justify-center mb-6">
          <Dice6 className="w-12 h-12 text-indigo-600" />
          <h1 className="text-2xl font-bold text-gray-800 ml-3">Rastgele Sayı Üreteci</h1>
        </div>
        
        <div className="space-y-4">
          <div>
            <label htmlFor="min" className="block text-sm font-medium text-gray-700 mb-1">
              Minimum Sayı
            </label>
            <input
              id="min"
              type="number"
              value={minNumber}
              onChange={(e) => setMinNumber(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Minimum sayıyı girin"
            />
          </div>
          
          <div>
            <label htmlFor="max" className="block text-sm font-medium text-gray-700 mb-1">
              Maksimum Sayı
            </label>
            <input
              id="max"
              type="number"
              value={maxNumber}
              onChange={(e) => setMaxNumber(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Maksimum sayıyı girin"
            />
          </div>
          
          <button
            onClick={generateRandomNumber}
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors duration-200 flex items-center justify-center"
          >
            <Dice6 className="w-5 h-5 mr-2" />
            Rastgele Sayı Üret
          </button>
          
          {result !== null && (
            <div className="mt-6 text-center">
              <h2 className="text-lg font-medium text-gray-700">Sonuç:</h2>
              <p className="text-4xl font-bold text-indigo-600 mt-2">{result}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;