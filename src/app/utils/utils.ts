import { async, ComponentFixture, TestBed } from '@angular/core/testing';

const testNumbers: string[] = ['0','1000', '9999999999999999'];

export function doBreakTest(fixture: ComponentFixture<any>): void {   
    expect(isBreak(fixture)).toBe(false);
}

export function isBreak(fixture: ComponentFixture<any>): boolean {
    let isErrors = false;

    console.error = function () {
        isErrors = true;
    }

    testInputs(fixture, testNumbers);
    fixture.nativeElement.querySelectorAll('button').forEach(button => button.click());

    return isErrors;
}

function testInputs(fixture: ComponentFixture<any>, inputValues: string[]): void {
    const nativeElement = fixture.nativeElement;

    nativeElement.querySelectorAll('input').forEach(input =>
        ['0','1000', '9999999999999999'].forEach(inputValue => {
            input.value = inputValue;
            fixture.detectChanges();
            input.dispatchEvent(new Event('input'));
        })
    );
}