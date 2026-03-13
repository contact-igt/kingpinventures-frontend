import React from 'react';

const InputField = ({ label, type, placeholder, required = false }) => (
    <div className="space-y-2">
        <label className="text-xs uppercase tracking-widest text-gray-600 font-bold font-body">{label}</label>
        <input required={required} type={type} className="w-full bg-transparent border-b border-gray-200 py-3 focus:border-[#111827] outline-none transition-colors text-lg text-[#111827] placeholder-[#333]" placeholder={placeholder} />
    </div>
);

export default InputField;
