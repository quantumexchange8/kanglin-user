
const formatAmount = (amount) => {
    return parseFloat(amount)
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};


export {
    formatAmount,
};