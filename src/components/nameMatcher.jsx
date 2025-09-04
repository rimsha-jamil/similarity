import React, { useState } from "react";

export default function NameChecker() {
  const [inputName, setInputName] = useState("");
  const [result, setResult] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const actualName = "Ayesha";
  const nameRegex = /^A\w{4,6}a$/i; // A + 4–6 chars + a

  // Sample names
  const allNames = ["Abeeha", "Areeba", "Ayessha", "Aseema", "Ayesha"];

  function getSimilarity(str1, str2) {
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();

    let matches = 0;
    let minLen = Math.min(str1.length, str2.length);

    for (let i = 0; i < minLen; i++) {
      if (str1[i] === str2[i]) matches++;
    }

    return matches / Math.max(str1.length, str2.length);
  }

  function isOrderCorrect(input, target) {
    let i = 0,
      j = 0;
    input = input.toLowerCase();
    target = target.toLowerCase();

    while (i < input.length && j < target.length) {
      if (input[i] === target[j]) {
        i++;
      }
      j++;
    }
    return i === input.length;
  }

  const handleInputChange = (value) => {
    setInputName(value);

    // If exact match
    if (value.toLowerCase() === actualName.toLowerCase()) {
      setResult(`✅ Name found: ${actualName}`);
      setSuggestions([]);
      return;
    }

    // If regex matches → suggest possible names
    if (nameRegex.test(value)) {
      const matchedNames = allNames.filter((n) => nameRegex.test(n));
      setSuggestions(matchedNames);
      setResult("🔎 Possible matches (similar shape):");
      return;
    }

    // Otherwise check similarity
    const similarity = getSimilarity(value, actualName);
    if (similarity >= 0.5 && isOrderCorrect(value, actualName)) {
      setResult(" Name found: (50% similar with correct order)");
    } else {
      setResult("❌ Name not found");
    }
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

      {/* Suggestions */}
      {suggestions.length > 0 && (
        <ul className="mt-3 space-y-2">
          {suggestions.map((name, i) => (
            <li
              key={i}
              className="p-2 bg-white rounded shadow text-center hover:bg-blue-100 cursor-pointer"
              onClick={() => {
                setInputName(name);
                setSuggestions([]);
                setResult(`✅ Name found: ${name}`);
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
