export const addErrorIntoField = (errors: boolean) => errors? {error: true}: {error: false};
export const phoneRegEx = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/
// export const phoneRegEx = /^(([+]{0,1}\d{2})|\d?)[\s-]?[0-9]{2}[\s-]?[0-9]{3}[\s-]?[0-9]{4}$/gm