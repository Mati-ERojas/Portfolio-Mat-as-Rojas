import styles from './IconButton.module.css';

interface IIconButtonProps {
  icon?: string;
  text?: string;
  onClick?: () => void;
  fontSize: string;
  iconFontSize: string;
  href?: string;
  dowload?: boolean;
}

export const IconButton = (props: IIconButtonProps) => {
  return (
    <a
        href={props.href}
        download={props.dowload}
        className={styles.iconButton}
        onClick={props.onClick}
        style={{
            fontSize: props.fontSize,
        }}
    >
      {props.icon && <span className="material-symbols-outlined" style={{fontSize: props.iconFontSize}}>{props.icon}</span>}
      {props.text}
    </a>
  )
}
