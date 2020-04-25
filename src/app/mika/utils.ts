export function doBreakTest(nativeElement: HTMLElement): void {
    let isErrors = false;

    console.error = function () {
        isErrors = true;
    }

    expect(isErrors).toBe(false);

    let button = nativeElement.querySelector('button');
    button.click();

    expect(isErrors).toBe(false);
}