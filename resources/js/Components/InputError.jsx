export default function InputError({ message, className = '', ...props }) {
    return message ? (
        <p {...props} className={'text-sm ms-2 mb-0 text-red-600 ' + className}>
            {message}
        </p>
    ) : null;
}
