const timers = {};
export default function callOnce(fn, delay) {
    clearTimeout(timers[fn]);
    timers[fn] = setTimeout(fn, delay);
}