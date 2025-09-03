import React, { useState } from "react";


function simpleSimilarity(str1, str2) {
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();

  let matches = 0;
  let length = Math.max(str1.length, str2.length);

  for (let i = 0; i < Math.min(str1.length, str2.length); i++) {
    if (str1[i] === str2[i]) matches++;
  }

  return matches / length; 
}

// Check if similar
function isSimilar(name1, name2, threshold = 0.5) {
  return simpleSimilarity(name1, name2) >= threshold;
}


// React Component
export default function NameChecker() {
  const [inputName, setInputName] = useState("");
  const [result, setResult] = useState("");
  const names = ["Ali", "Ahmed", "Ayesha", "Sara", "Arham", "Usman"];

  const handleCheck = () => {
    let foundName = null;

    for (let name of names) {
      if (isSimilar(inputName, name)) {
        foundName = name;
        break;
      }
    }

    if (foundName) {
      setResult(`Name found: ${foundName}`);
    } else {
      setResult(" Name not found");
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-blue-50 rounded-2xl shadow">
      <h2 className="text-xl font-bold mb-4 text-center">Name Checker</h2>
      <p className="mb-3 text-gray-700 font-medium">Available Names:</p>
      <ul className="grid grid-cols-2 gap-2 mb-4">
        {names.map((name, index) => (
          <li
            key={index}
            className="p-2 bg-white rounded shadow text-center hover:bg-blue-100"
          >
            {name}
          </li>
        ))}
      </ul>

      <input
        type="text"
        placeholder="Enter a name"
        value={inputName}
        onChange={(e) => setInputName(e.target.value)}
        className="border p-2 w-full mb-3 rounded"
      />
      <button
        onClick={handleCheck}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full"
      >
        Check Name
      </button>
      {result && <p className="mt-4 text-center font-semibold">{result}</p>}
    </div>
  );
}
