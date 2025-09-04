import React, { useState } from "react";

export default function NameChecker() {
  const [inputName, setInputName] = useState("");
  const [result, setResult] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const allNames = ["Abeeha", "Areeba", "Ayessha", "Aseema", "Ayesha"];

 
  const nameRegex = /^A\w{3,5}a$/i;

  const handleInputChange = (value) => {
    setInputName(value);

    if (!value) {
      setResult("");
      setSuggestions([]);
      return;
    }

   
    const exactMatch = allNames.find(
      (n) => n.toLowerCase() === value.toLowerCase()
    );
    if (exactMatch) {
      setResult(` Exact match: ${exactMatch}`);
      setSuggestions([]);
      return;
    }

  
    if (nameRegex.test(value)) {
      const matchedNames = allNames.filter((n) => nameRegex.test(n));
      if (matchedNames.length > 0) {
        setResult(" Possible matches:");
        setSuggestions(matchedNames);
        return;
      }
    }

   
    setResult(" Name not found");
    setSuggestions([]);
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-blue-50 rounded-2xl shadow">
      <h2 className="text-xl font-bold mb-4 text-center">Name Checker</h2>

      <input
        type="text"
        placeholder="Enter a name"
        value={inputName}
        onChange={(e) => handleInputChange(e.target.value)}
        className="border p-2 w-full mb-3 rounded"
      />

      {result && <p className="mt-4 text-center font-semibold">{result}</p>}

      {suggestions.length > 0 && (
        <ul className="mt-3 space-y-2">
          {suggestions.map((name, i) => (
            <li
              key={i}
              className="p-2 bg-white rounded shadow text-center hover:bg-blue-100 cursor-pointer"
              onClick={() => {
                setInputName(name);
                setSuggestions([]);
                setResult(` Selected: ${name}`);
              }}
            >
              {name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
