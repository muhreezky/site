import dayjs, { type ConfigType } from 'dayjs';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';

dayjs.extend(utc);
dayjs.extend(timezone);

export function afterToday(days: number = 1) {
	const date = new Date();
	date.setDate(date.getDate() + days);
	return date;
}

export function formatDate(
	date: ConfigType,
	format = 'DD/MM/YYYY HH:mm:ss',
	tz = 'Asia/Jakarta'
) {
	return dayjs.tz(date, tz).format(format);
}
