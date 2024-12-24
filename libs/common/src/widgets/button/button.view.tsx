import {Button} from 'primereact/button';

/**
 * @prop {() => void} onClick Обработчик клика.
 * @prop {boolean} [disabled] Обработчик клика.
 */
type TProps = {
  onClick: () => void;
  children?: string;
  className?: string;
  disabled?: boolean;
};

/**
 * Компонент обёртка над Primereact для отображения кнопки.
 */
export const ButtonView = ({
  children,
  className,
  disabled,
  onClick,
}: TProps) => {
  return (
    <Button className={className} onClick={onClick} disabled={disabled}>
      {children}
    </Button>
  );
};
