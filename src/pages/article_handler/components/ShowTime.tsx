import { parseISO, formatDistanceToNow } from "date-fns-jalali";

interface ShowTimeProps {
  timestamp: string;
}

const ShowTime = ({ timestamp }: ShowTimeProps) => {
    let timeEgo: string = ""
    if (timestamp) {
        const date: Date = parseISO(timestamp)
        const time: string = formatDistanceToNow(date)
        timeEgo = `${time} قبل`
    }

    return (
        <span>
            <i>{timeEgo}</i> &nbsp;
        </span>
    )
}

export default ShowTime