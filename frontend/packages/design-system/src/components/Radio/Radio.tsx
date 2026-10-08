import { resolveSx } from '#internal/systems/index';
import { createClassName } from '#internal/utils/classname';

import styles from './Radio.module.css';

import type { Props } from './Radio.types';

const classnameDefault = 'ui-Radio';

export const Radio = (props: Props) => {
  const { children, className, disabled, variant = 'default', sx, style, ...restProps } = props;

  const modifiers = {
    variant: variant && styles?.[`variant-${variant}`],
  };

  const classname = createClassName({
    styles,
    baseName: classnameDefault,
    modifiers,
    className,
  });

  const spacingStyle = resolveSx({ sx });

  const customStyles = { ...spacingStyle, ...style };

  return (
    <label className={classname} style={customStyles}>
      <input {...restProps} className={styles.input} disabled={disabled} type="radio" />
      <span aria-hidden="true" className={styles.indicator} />
      {children && <span className={styles.label}>{children}</span>}
    </label>
  );
};
