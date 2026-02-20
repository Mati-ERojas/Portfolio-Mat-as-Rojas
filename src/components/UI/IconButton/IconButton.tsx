import styles from './IconButton.module.css';

interface IIconButtonProps {
  icon?: string;
  text?: string;
  onClick?: () => void;
  fontSize: string;
  iconFontSize: string;
}

export const IconButton = (props: IIconButtonProps) => {
  return (
    <button
        className={styles.iconButton}
        onClick={props.onClick}
        style={{
            fontSize: props.fontSize,
        }}
    >
      {props.icon && <span className="material-symbols-outlined" style={{fontSize: props.iconFontSize}}>{props.icon}</span>}
      {props.text}
    </button>
  )
}
