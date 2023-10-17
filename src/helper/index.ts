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


export function splitArray(array: any[], length: number): any[] {
    const result: any[] = [];
    for (let i = 0; i < array.length; i += length) {
      const subarray = array.slice(i, i + length);
      result.push(subarray);
    }
    return result;
  }