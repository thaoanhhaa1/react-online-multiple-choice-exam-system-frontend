function classNames(...classes) {
    return classes
        .filter(Boolean)
        .map((i) => i.trim())
        .join(' ');
}

export default classNames;
