import { Injectable } from "@angular/core";


import { NgbDateParserFormatter, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { dateStructureToString, stringToDateStructure } from '@hicoder/angular-core';

@Injectable()
export class MraNgbDateFormatterService extends NgbDateParserFormatter {
    private dateFormat = 'MM/DD/YYYY';
    private timeFormat = 'hh:mm:ss';

    // from input -> internal model
    parse(value: string): NgbDateStruct {
        return stringToDateStructure(value, this.dateFormat);
    }
    // from internal model -> string
    format(date: NgbDateStruct): string {
        return dateStructureToString(date, this.dateFormat);
    }
}
