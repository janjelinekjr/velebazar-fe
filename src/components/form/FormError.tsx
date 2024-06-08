import {FieldError} from 'react-hook-form';

type FormErrorProps = {
    error: Pick<FieldError, 'message'> | undefined
}
const FormError = ({error}: FormErrorProps) => {
    return error ? <div className="pt-2 text-danger">{error.message}</div> : null
}
export default FormError;