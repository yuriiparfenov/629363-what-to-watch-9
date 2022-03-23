import { useAppSelector } from '../../hooks';

function ErrorMessage(): JSX.Element | null {
  const { error } = useAppSelector((state) => state);

  if (error) {
    return (
      <div>
        {error}
      </div>
    );
  }

  return null;
}

export default ErrorMessage;
