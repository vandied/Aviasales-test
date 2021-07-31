export const stopsCountSuffix = (segmentLength: number): string => {
    if (segmentLength === 0) {
        return 'ПРЯМОЙ';
    } else if (segmentLength === 1) {
        return '1 ПЕРЕСАДКА';
    }
    return `${segmentLength} ПЕРЕСАДКИ`;
};

const getTime = (date: Date): string => `${date.getHours()}:${date.getMinutes()}`;

export const getRouteTime = (date: string, duration: number): string => {
    const startTime = new Date(date);
    const endTime = new Date(startTime);
    endTime.setMinutes(endTime.getMinutes() + duration);

    return `${getTime(startTime)} – ${getTime(endTime)}`;
};

export const getLengthRoute = (duration: number): string => {
    let tempDuration = duration;
    const days = Math.trunc(tempDuration / (24 * 60));
    tempDuration = tempDuration - days * 24 * 60;
    const hours = Math.trunc(tempDuration / 60);
    const minutes = tempDuration - hours * 60;

    return `${days > 0 ? `${days}Д` : ''} ${hours}Ч ${minutes}M`;
};
