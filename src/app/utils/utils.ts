import { async, ComponentFixture, TestBed } from '@angular/core/testing';

const TEST_NUMBERS: string[] = ['0','1000', '9999999999999999'];
const TEST_STRINGS: string[] = ['', 'x', 'abcdefghij', 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'];

export enum TestType {
    NUMBER_INPUTS,
    STRING_INPUTS,
    BUTTON_CLICKS
}

export function doBreakTest(fixture: ComponentFixture<any>): void {   
    expect(isBreak(fixture)).toBe(false);
}

export function isBreak(fixture: ComponentFixture<any>): boolean {
    let isErrors = false;

    console.error = function () {
        isErrors = true;
    }

    testInputs(fixture, TEST_NUMBERS);
    testInputs(fixture, TEST_STRINGS);
    fixture.nativeElement.querySelectorAll('button').forEach(button => button.click());

    return isErrors;
}

export function isBreakWithType(fixture: ComponentFixture<any>, testType: TestType, isErrors: boolean, testNumbers: string[], testStrings: string[]): boolean {
    if (testType === TestType.NUMBER_INPUTS) {
        testInputs(fixture, testNumbers);
    } else if (testType === TestType.STRING_INPUTS) {
        testInputs(fixture, testStrings);
    } else if (testType === TestType.BUTTON_CLICKS) {
        fixture.nativeElement.querySelectorAll('button').forEach(button => button.click());
    }

    return isErrors;
}

function testInputs(fixture: ComponentFixture<any>, inputValues: string[]): void {
    const nativeElement = fixture.nativeElement;

    nativeElement.querySelectorAll('input').forEach(input =>
        inputValues.forEach(inputValue => {
            input.value = inputValue;
            fixture.detectChanges();
            input.dispatchEvent(new Event('input'));
        })
    );
}