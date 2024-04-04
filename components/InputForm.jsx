import clsx from 'clsx';
import React from 'react';

function InputForm({label , id , register , errors , disabled , type}) {
    return (
        <div>
           <label htmlFor={id} className="block text-sm font-medium text-gray-900 leading-6">
            {label}
           </label>
           <div className='mt-2'>
            <input type={type} id={id} autoComplete='id' disabled={false} {...register(id , {required: true})}
            className={clsx(`form-input block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6` , errors[id] && "focus:ring-red-500", 
            disabled && "opacity-50 cursor-default" )} />
           </div>
        </div>
    );
}

export default InputForm;