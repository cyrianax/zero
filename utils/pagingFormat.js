module.exports = function({page_size = 10, page_index = 1}) {
    const pageIndex = Math.max(+page_index, 1);
    const pageSize = Math.max(+page_size, 1);

    return {
        size: pageSize,
        index: pageSize * (pageIndex - 1)
    };
}