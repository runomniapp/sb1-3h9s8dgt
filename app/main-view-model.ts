import { Observable } from '@nativescript/core';

export class MainViewModel extends Observable {
    private _minNumber: string = '';
    private _maxNumber: string = '';
    private _result: number | null = null;

    get minNumber(): string {
        return this._minNumber;
    }

    set minNumber(value: string) {
        if (this._minNumber !== value) {
            this._minNumber = value;
            this.notifyPropertyChange('minNumber', value);
        }
    }

    get maxNumber(): string {
        return this._maxNumber;
    }

    set maxNumber(value: string) {
        if (this._maxNumber !== value) {
            this._maxNumber = value;
            this.notifyPropertyChange('maxNumber', value);
        }
    }

    get result(): number | null {
        return this._result;
    }

    set result(value: number | null) {
        if (this._result !== value) {
            this._result = value;
            this.notifyPropertyChange('result', value);
            this.notifyPropertyChange('hasResult', this.hasResult);
        }
    }

    get hasResult(): boolean {
        return this._result !== null;
    }

    generateRandomNumber() {
        const min = parseInt(this._minNumber);
        const max = parseInt(this._maxNumber);

        if (isNaN(min) || isNaN(max)) {
            alert('Lütfen geçerli sayılar giriniz');
            return;
        }

        if (min >= max) {
            alert('İlk sayı ikinci sayıdan küçük olmalıdır');
            return;
        }

        this.result = Math.floor(Math.random() * (max - min + 1)) + min;
    }
}