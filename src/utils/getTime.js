function getTime(time) {
    if (time <= 0) return '00';

    const minutes = Number.parseInt(time / 60);
    const seconds = time % 60;

    return `${formatNumber(minutes)}:${formatNumber(seconds)}`;
}

function formatNumber(number) {
    return number >= 10 ? number : '0' + number;
}

export default getTime;
