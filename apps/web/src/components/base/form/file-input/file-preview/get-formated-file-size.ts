/**
 * Получить форматированный размер файла
 *
 * @param size Размер файла в байтах
 */
const getFormatedFileSize = (size: number) => {
    const units = ['bytes', 'KB', 'MB', 'GB'];

    let level = 0;
    let remains = size;

    while (remains >= 1024 && ++level) {
        remains = remains / 1024;
    }

    const isFractionDigits = remains < 10 && level > 0;
    const fractionDigits = (isFractionDigits ? 1 : 0);
    const resultSize = remains.toFixed(fractionDigits);

    const result = `${resultSize} ${units[level]}`;

    return result;
};

export default getFormatedFileSize;
