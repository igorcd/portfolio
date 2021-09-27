export const sentenceCase = (value: string): string => {
    const lowerCase = value.slice(1, value.length)?.toLowerCase();
    const upperCase = value[0]?.toUpperCase();
    if(lowerCase && upperCase) {
        return upperCase + lowerCase;
    }
    return value;
}; 

export const titleCase = (value: string): string  => {
    return value.split(" ").map(word => {
        return ['de'].includes(word) ? word : sentenceCase(word);
    }).join(" ");
};
