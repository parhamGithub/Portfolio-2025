interface SpinnerProps {
  text?: string;
  size?: string;
}

const Spinner = ({ text = "", size = "5em" }: SpinnerProps) => {
    const header = text ? <h1>{text}</h1> : null;
    return (
        <div className="spinner">
            {header}
            <div className="loader" style={{ height: size, width: size }} />
        </div>
    )
}

export default Spinner