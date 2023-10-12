export function isParent(element: any, formGroup: string) {
    while (element.parentElement) {
        if (element.matches(formGroup)) {
            return true;
        } else {
            element = element.parentElement
        }
    }

    return false;
}
