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
    'w-full px-4 py-3 bg-dark-elevated border border-dark-border rounded-xl text-neutral-200 placeholder-neutral-500 focus:outline-none focus:border-secondary-500 focus:ring-1 focus:ring-secondary-500/50 transition-all duration-200';

  return (
    <div className="space-y-1.5">
      <label htmlFor={id} className="block text-sm font-medium text-neutral-300">
        {label}
      </label>

      {asType === 'textarea' ? (
        (() => {
          const { label: _l, error: _e, as: _a, id: _id, ...rest } = props as TextareaProps;
          return <textarea id={id} className={`${fieldClasses} min-h-[120px] resize-y`} {...rest} />;
        })()
      ) : asType === 'select' ? (
        (() => {
          const { label: _l, error: _e, as: _a, options, id: _id, ...rest } = props as SelectProps;
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
          const { label: _l, error: _e, as: _a, id: _id, ...rest } = props as InputProps;
          return <input id={id} className={fieldClasses} {...rest} />;
        })()
      )}

      {error && <p className="text-sm text-error mt-1">{error}</p>}
    </div>
  );
}
