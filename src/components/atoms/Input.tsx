// src/components/atoms/Input.tsx
import React from 'react'

export type InputProps = {
  id: string
  label?: string
  type: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  className?: string
  labelClassName?: string
}

export default function Input({
  id,
  label,
  type,
  value,
  onChange,
  className = '',
  labelClassName = 'text-white',
}: InputProps) {
  return (
    <div className={`space-y-1 mb-4 ${className}`}>
      {label && (
        <label htmlFor={id} className={`block text-sm font-medium ${labelClassName}`}>
          {label}
        </label>
      )}
      <input
        id={id}
        name={id}
        type={type}
        value={value}
        onChange={onChange}
        required
        className="
          block w-full px-4 py-3
          bg-white text-gray-900 placeholder-gray-400
          border border-gray-300
          rounded-lg shadow-sm
          focus:outline-none focus:ring-2 focus:ring-blue-500
        "
      />
    </div>
  )
}
