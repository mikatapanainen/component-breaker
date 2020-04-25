import { Button } from 'protractor';

export function doBreakTest(nativeElement: HTMLElement): void {   
    expect(isBreak(nativeElement)).toBe(false);
}

export function isBreak(nativeElement: HTMLElement): boolean {
    let isErrors = false;

    console.error = function () {
        isErrors = true;
    }

    nativeElement.querySelectorAll('button').forEach(button => button.click())

    return isErrors;
}