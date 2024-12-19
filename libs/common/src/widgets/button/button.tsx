import {ButtonView} from './button.view';
import {TAnalyticsProps, sendEvent} from '../../shared';
import {E_ANALYTIC_EVENTS} from '../../shared/constants';

/**
 * @prop {TAnalyticsProps} [analyticProps] Данные для аналитики.
 * @prop {() => void} onClick Обработчик клика.
 * @prop {boolean} [disabled] Обработчик клика.
 */
type TProps = {
  analyticProps?: TAnalyticsProps;
  onClick: () => void;
  children?: string;
  className?: string;
  disabled?: boolean;
};

/**
 * Компонент обёртка над Primereact для отображения кнопки. Содержит логику.
 */
export const Button = ({
  analyticProps,
  children,
  className,
  disabled,
  onClick,
}: TProps) => {
  const handleClick = () => {
    onClick();
    if (analyticProps)
      sendEvent({
        event: E_ANALYTIC_EVENTS.CLICK,
        label: analyticProps.label,
        namespace: analyticProps.namespace,
      });
  };

  return (
    <ButtonView className={className} onClick={handleClick} disabled={disabled}>
      {children}
    </ButtonView>
  );
};
