import type { InputHTMLAttributes, SelectHTMLAttributes, TextareaHTMLAttributes } from 'react';

interface BaseProps {
  label: string;
  error?: string;
  id: string;
}

type InputProps = BaseProps & {
  as?: 'input';
} & Omit<InputHTMLAttributes<HTMLInputElement>, 'id'>;

type TextareaProps = BaseProps & {
  as: 'textarea';
} & Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'id'>;

type SelectProps = BaseProps & {
  as: 'select';
  options: { value: string; label: string }[];
} & Omit<SelectHTMLAttributes<HTMLSelectElement>, 'id'>;

type FormInputProps = InputProps | TextareaProps | SelectProps;

export default function FormInput(props: FormInputProps) {
  const { label, error, id, as: asType } = props;

  const fieldClasses =
    'w-full px-4 py-3 bg-white border border-neutral-300 rounded-xl text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-primary-400 focus:ring-2 focus:ring-primary-100 transition-all duration-200';

  return (
    <div className="space-y-1.5">
      <label htmlFor={id} className="block text-sm font-medium text-neutral-700">
        {label}
      </label>

      {asType === 'textarea' ? (
        (() => {
          const { label: fieldLabel, error: fieldError, as: fieldAs, id: fieldId, ...rest } = props as TextareaProps;
          void fieldLabel;
          void fieldError;
          void fieldAs;
          void fieldId;
          return <textarea id={id} className={`${fieldClasses} min-h-[120px] resize-y`} {...rest} />;
        })()
      ) : asType === 'select' ? (
        (() => {
          const { label: fieldLabel, error: fieldError, as: fieldAs, options, id: fieldId, ...rest } = props as SelectProps;
          void fieldLabel;
          void fieldError;
          void fieldAs;
          void fieldId;
          return (
            <select id={id} className={`${fieldClasses} cursor-pointer`} {...rest}>
              <option value="">Select an option</option>
              {options.map((opt) => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
          );
        })()
      ) : (
        (() => {
          const { label: fieldLabel, error: fieldError, as: fieldAs, id: fieldId, ...rest } = props as InputProps;
          void fieldLabel;
          void fieldError;
          void fieldAs;
          void fieldId;
          return <input id={id} className={fieldClasses} {...rest} />;
        })()
      )}

      {error && <p className="text-sm text-error mt-1">{error}</p>}
    </div>
  );
}
