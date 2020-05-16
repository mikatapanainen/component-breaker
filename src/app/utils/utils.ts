import { async, ComponentFixture, TestBed } from '@angular/core/testing';

export function doBreakTest(fixture: ComponentFixture<any>): void {   
    expect(isBreak(fixture)).toBe(false);
}

export function isBreak(fixture: ComponentFixture<any>): boolean {
    const nativeElement = fixture.nativeElement;
    let isErrors = false;

    console.error = function () {
        isErrors = true;
    }

    nativeElement.querySelectorAll('input').forEach(input =>
        ['0','1000', '9999999999999999'].forEach(inputValue => {
            input.value = inputValue;
            fixture.detectChanges();
            input.dispatchEvent(new Event('input'));
        })
    );
    nativeElement.querySelectorAll('button').forEach(button => button.click());

    return isErrors;
}