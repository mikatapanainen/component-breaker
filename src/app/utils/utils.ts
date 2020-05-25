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
    let isErrors:boolean = false;

    console.error = function () {
        isErrors = true;
    }

    doBreakTestWithType(fixture, TestType.NUMBER_INPUTS, TEST_NUMBERS, TEST_STRINGS);
    doBreakTestWithType(fixture, TestType.STRING_INPUTS, TEST_NUMBERS, TEST_STRINGS);
    doBreakTestWithType(fixture, TestType.BUTTON_CLICKS, TEST_NUMBERS, TEST_STRINGS);

    return isErrors;
}

export function doBreakTestWithType(fixture: ComponentFixture<any>, testType: TestType, testNumbers: string[], testStrings: string[]): void {
    if (testType === TestType.NUMBER_INPUTS) {
        testInputs(fixture, testNumbers);
    } else if (testType === TestType.STRING_INPUTS) {
        testInputs(fixture, testStrings);
    } else if (testType === TestType.BUTTON_CLICKS) {
        fixture.nativeElement.querySelectorAll('button').forEach(button => button.click());
    }
}

function testInputs(fixture: ComponentFixture<any>, inputValues: string[]): void {
    const nativeElement = fixture.nativeElement;

    nativeElement.querySelectorAll('input').forEach(input =>
        inputValues.forEach(inputValue => {
            input.value = inputValue;
            input.dispatchEvent(new Event('input'));
            fixture.detectChanges();
        })
    );
}