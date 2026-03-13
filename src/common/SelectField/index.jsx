import React from 'react';

const SelectField = ({ label, defaultValue, options }) => (
    <div className="space-y-2 relative">
        <label className="text-xs uppercase tracking-widest text-gray-600 font-bold font-body">{label}</label>
        <select defaultValue={defaultValue} className="w-full bg-transparent border-b border-gray-200 py-3 focus:border-[#111827] outline-none transition-colors text-lg text-[#111827] appearance-none rounded-none cursor-pointer">
            {options.map(option => (
                <option key={option} value={option} className="bg-[#f3f4f6] text-[#111827]">{option}</option>
            ))}
        </select>
        <div className="absolute right-0 bottom-4 pointer-events-none text-gray-600">▼</div>
    </div>
);

export default SelectField;
